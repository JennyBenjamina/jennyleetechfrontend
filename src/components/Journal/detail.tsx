import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { Journal } from "../../types/Journal";

const JournalDetails: React.FC = () => {
  const { journalId } = useParams<{ journalId: string }>(); // Get the dynamic `journalId` param
  const [journal, setJournal] = useState<Journal | null>(null);

  useEffect(() => {
    const fetchJournal = async () => {
      const response = await axiosInstance.get(`/journal/${journalId}`);
      setJournal(response.data);
    };

    if (journalId) {
      fetchJournal();
    }
  }, []);

  if (!journal) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{journal.title}</h1>
      <p className="text-gray-600 text-sm mb-2">
        Category: {journal.category} | Created At:{" "}
        {new Date(journal.createdAt).toLocaleDateString()}
      </p>
      <div className="prose prose-sm mb-4">{journal.content}</div>
      <div className="mt-4">
        <span className="text-gray-600 font-bold">Tags:</span>
        {journal.tags.map((tag) => (
          <span
            key={tag}
            className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JournalDetails;
