import { useState, useEffect } from "react";
import { MyDialog } from "../components/MyDialog.tsx";
import { InputDataCard } from "../components/InputDataCard.tsx";
import useAuth from "../hooks/useAuth.tsx";
import axiosInstance from "../api/axiosInstance.tsx";
import { toast } from "../@/hooks/use-toast.ts";
import { useQuote } from "../context/QuoteContext.tsx";
import AvatarCircles from "../components/ui/avatar-circles.tsx";

function Home() {
  const [weight, setWeight] = useState<number>();
  const [disposition, setDisposition] = useState<number>();
  const [date, setDate] = useState<Date>(new Date());
  const { activeUser } = useAuth();
  const { quoteFetched, setQuoteFetched } = useQuote();

  const [quote, setQuote] = useState<string>(""); // State for the quote
  const [author, setAuthor] = useState<string>(""); // State for the quote

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); // State for dialo

  useEffect(() => {
    // Fetch quote of the day on component mount
    const fetchQuoteOfTheDay = async () => {
      try {
        const response = await axiosInstance.get("/quoteOfTheDay");
        setQuote(response.data.q); // Assume API response contains
        setAuthor(response.data.a); // Assume API response contains author
        setIsDialogOpen(true); // Open dialog after fetching quote
        setQuoteFetched(true); // Mark as fetched
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load the quote of the day.",
          variant: "destructive",
        });
      }
    };

    fetchQuoteOfTheDay();
  }, [quoteFetched, setQuoteFetched]);

  const handleWeight = (weight: number) => {
    setWeight(weight);
  };

  const handleDisposition = (disposition: number) => {
    setDisposition(disposition);
  };

  const handleDate = (date: Date) => {
    setDate(date);
  };

  const handleOnClick = async () => {
    try {
      await axiosInstance.post("/weightData/addWeightData", {
        userId: activeUser.userId,
        weight: weight,
        disposition: disposition,
        date: date,
      });
      toast({
        title: "New Weight Added!",
        description: `${weight} lbs added to the database for ${date.toLocaleDateString()}`,
      });
    } catch (error) {
      toast({
        title: "Error on adding new weight!",
        description: `${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-2xl">
      {/* <AvatarCircles
        avatarUrls={[
          {
            imageUrl:
              "https://gravatar.com/avatar/3ac98e4ddcdf4e248c59590eda6cee1c?s=400&d=robohash&r=x",
            profileUrl:
              "https://gravatar.com/avatar/3ac98e4ddcdf4e248c59590eda6cee1c?s=400&d=robohash&r=x",
          },
          {
            imageUrl:
              "https://robohash.org/3ac98e4ddcdf4e248c59590eda6cee1c?set=set4&bgset=&size=400x400",
            profileUrl:
              "https://robohash.org/3ac98e4ddcdf4e248c59590eda6cee1c?set=set4&bgset=&size=400x400",
          },
        ]}
        numPeople={2}
      /> */}
      {/* Display the dialog */}
      <MyDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Quote of the Day"
        description={quote}
        author={author}
      />
      <InputDataCard
        handleWeight={handleWeight}
        handleDisposition={handleDisposition}
        handleDate={handleDate}
        handleOnClick={handleOnClick}
      />
    </div>
  );
}

export default Home;
