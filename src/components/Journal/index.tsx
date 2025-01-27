import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { useEffect, useState } from "react";
import { Journal as JournalType } from "../../types/Journal";
import axiosInstance from "api/axiosInstance";
import NavigationSideBar from "../NavigationSideBar";
import NavigationMobileSideBar from "../NavigationMobileSideBar";

import { ScrollUpButton } from "@radix-ui/react-select";
import { Home } from "lucide-react";

export default function Journal() {
  const [journals, setJournals] = useState<JournalType[]>([]);
  const [categories, setCategories] = useState<string[]>([
    "Personal",
    "Work",
    "Health",
  ]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    axiosInstance.get("/journal/").then((response) => {
      setJournals(response.data);

      const allTags: string[] = Array.from(
        new Set(response.data.flatMap((journal: JournalType) => journal.tags))
      );

      setTags(allTags);
    });
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setSelectedTags([...selectedTags, newTag]);
      setNewTag("");
    }
  };

  const filteredJournals = journals.filter((journal) => {
    const matchesCategory = selectedCategory
      ? journal.category === selectedCategory
      : true;
    const matchesTags =
      selectedTags.length > 0
        ? selectedTags.every((tag) => journal.tags.includes(tag))
        : true;
    return matchesCategory && matchesTags;
  });

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 hidden md:block bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <NavigationSideBar
          categories={categories}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTags={selectedTags}
          newTag={newTag}
          setNewTag={setNewTag}
          handleCategoryChange={handleCategoryChange}
          handleTagChange={handleTagChange}
          handleAddTag={handleAddTag}
        />
      </aside>
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Filters" : "Open Filters"}
      </button>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="absolute top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 p-6">
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              Close
            </button>
            {/* Categories and Tags Content */}
            <NavigationMobileSideBar
              categories={categories}
              tags={tags}
              selectedCategory={selectedCategory}
              selectedTags={selectedTags}
              newTag={newTag}
              setNewTag={setNewTag}
              handleCategoryChange={handleCategoryChange}
              handleTagChange={handleTagChange}
              handleAddTag={handleAddTag}
            />
          </div>
        </div>
      )}

      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Journal Entries
          </h2>
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search entries..."
              className="bg-gray-100 dark:bg-gray-800"
            />
            <Button>New Entry</Button>
          </div>
        </header>
        <div className="p-6 space-y-6">
          {filteredJournals.length > 0 ? (
            filteredJournals.map((journal) => (
              <Card key={journal.journalId}>
                <CardHeader>
                  <CardTitle>{journal.title}</CardTitle>
                  <CardDescription>{journal.createdAt}</CardDescription>
                </CardHeader>
                <CardContent>{journal.content}</CardContent>
                <CardFooter>
                  <Link
                    to={`/journals/${journal.journalId}`}
                    className="text-green-700 hover:text-green-500"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No journal entries found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
