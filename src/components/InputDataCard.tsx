import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePicker } from "./DatePicker.tsx";
import ShineBorder from "./ui/shine-border.tsx";

interface InputDataCardProps {
  handleWeight: (weight: number) => void;
  handleDisposition: (disposition: number) => void;
  handleDate: (date: Date) => void;
  handleOnClick: () => void;
}

export function InputDataCard({
  handleWeight,
  handleDisposition,
  handleDate,
  handleOnClick,
}: InputDataCardProps) {
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const weight = parseFloat(event.target.value);
    if (!isNaN(weight)) {
      handleWeight(weight);
    }
  };

  const handleDispositionChange = (value: string) => {
    const disposition = parseInt(value, 10);
    handleDisposition(disposition);
  };

  const handleDateChange = (date: Date) => {
    handleDate(date);
  };

  return (
    <ShineBorder
      className="relative flex h-full mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <Card className="mx-auto w-[350px]">
        <CardHeader>
          <CardTitle>Weight Tracker</CardTitle>
          <CardDescription>Track your weight on this app.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <DatePicker onChange={handleDateChange} />
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Weight</Label>
                <Input
                  id="name"
                  placeholder="Lbs"
                  type="number"
                  onChange={handleWeightChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Disposition</Label>
                <Select onValueChange={handleDispositionChange}>
                  <SelectTrigger id="disposition">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="100">🤓</SelectItem>
                    <SelectItem value="80">😊</SelectItem>
                    <SelectItem value="60">😢</SelectItem>
                    <SelectItem value="40">😭</SelectItem>
                    <SelectItem value="20">🤬</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleOnClick}>Save</Button>
        </CardFooter>
      </Card>
    </ShineBorder>
  );
}
