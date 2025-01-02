import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { WeightData } from "../../types/WeightData.ts";

// query the database using dates and bring in all the users' first names
// const chartData = [
//   { date: "2024-04-01", user1: 222, user2: 150 },
//   { date: "2024-04-02", user1: 97, user2: 180 },
//   { date: "2024-04-03", user1: 167, user2: 120 },
//   { date: "2024-04-04", user1: 242, user2: 260 },
//   { date: "2024-04-05", user1: 373, user2: 290 },
//   { date: "2024-04-06", user1: 301, user2: 340 },
//   { date: "2024-04-07", user1: 245, user2: 180 },
//   { date: "2024-04-08", user1: 409, user2: 320 },
//   { date: "2024-04-09", user1: 59, user2: 110 },
//   { date: "2024-04-10", user1: 261, user2: 190 },
//   { date: "2024-04-11", user1: 327, user2: 350 },
//   { date: "2024-04-12", user1: 292, user2: 210 },
//   { date: "2024-04-13", user1: 342, user2: 380 },
//   { date: "2024-04-14", user1: 137, user2: 220 },
//   { date: "2024-04-15", user1: 120, user2: 170 },
//   { date: "2024-04-16", user1: 138, user2: 190 },
//   { date: "2024-04-17", user1: 446, user2: 360 },
//   { date: "2024-04-18", user1: 364, user2: 410 },
//   { date: "2024-04-19", user1: 243, user2: 180 },
//   { date: "2024-04-20", user1: 89, user2: 150 },
//   { date: "2024-04-21", user1: 137, user2: 200 },
//   { date: "2024-04-22", user1: 224, user2: 170 },
//   { date: "2024-04-23", user1: 138, user2: 230 },
//   { date: "2024-04-24", user1: 387, user2: 290 },
//   { date: "2024-04-25", user1: 215, user2: 250 },
//   { date: "2024-04-26", user1: 75, user2: 130 },
//   { date: "2024-04-27", user1: 383, user2: 420 },
//   { date: "2024-04-28", user1: 122, user2: 180 },
//   { date: "2024-04-29", user1: 315, user2: 240 },
//   { date: "2024-04-30", user1: 454, user2: 380 },
//   { date: "2024-05-01", user1: 165, user2: 220 },
//   { date: "2024-05-02", user1: 293, user2: 310 },
//   { date: "2024-05-03", user1: 247, user2: 190 },
//   { date: "2024-05-04", user1: 385, user2: 420 },
//   { date: "2024-05-05", user1: 481, user2: 390 },
//   { date: "2024-05-06", user1: 498, user2: 520 },
//   { date: "2024-05-07", user1: 388, user2: 300 },
//   { date: "2024-05-08", user1: 149, user2: 210 },
//   { date: "2024-05-09", user1: 227, user2: 180 },
//   { date: "2024-05-10", user1: 293, user2: 330 },
//   { date: "2024-05-11", user1: 335, user2: 270 },
//   { date: "2024-05-12", user1: 197, user2: 240 },
//   { date: "2024-05-13", user1: 197, user2: 160 },
//   { date: "2024-05-14", user1: 448, user2: 490 },
//   { date: "2024-05-15", user1: 473, user2: 380 },
//   { date: "2024-05-16", user1: 338, user2: 400 },
//   { date: "2024-05-17", user1: 499, user2: 420 },
//   { date: "2024-05-18", user1: 315, user2: 350 },
//   { date: "2024-05-19", user1: 235, user2: 180 },
//   { date: "2024-05-20", user1: 177, user2: 230 },
//   { date: "2024-05-21", user1: 82, user2: 140 },
//   { date: "2024-05-22", user1: 81, user2: 120 },
//   { date: "2024-05-23", user1: 252, user2: 290 },
//   { date: "2024-05-24", user1: 294, user2: 220 },
//   { date: "2024-05-25", user1: 201, user2: 250 },
//   { date: "2024-05-26", user1: 213, user2: 170 },
//   { date: "2024-05-27", user1: 420, user2: 460 },
//   { date: "2024-05-28", user1: 233, user2: 190 },
//   { date: "2024-05-29", user1: 78, user2: 130 },
//   { date: "2024-05-30", user1: 340, user2: 280 },
//   { date: "2024-05-31", user1: 178, user2: 230 },
//   { date: "2024-06-01", user1: 178, user2: 200 },
//   { date: "2024-06-02", user1: 470, user2: 410 },
//   { date: "2024-06-03", user1: 103, user2: 160 },
//   { date: "2024-06-04", user1: 439, user2: 380 },
//   { date: "2024-06-05", user1: 88, user2: 140 },
//   { date: "2024-06-06", user1: 294, user2: 250 },
//   { date: "2024-06-07", user1: 323, user2: 370 },
//   { date: "2024-06-08", user1: 385, user2: 320 },
//   { date: "2024-06-09", user1: 438, user2: 480 },
//   { date: "2024-06-10", user1: 155, user2: 200 },
//   { date: "2024-06-11", user1: 92, user2: 150 },
//   { date: "2024-06-12", user1: 492, user2: 420 },
//   { date: "2024-06-13", user1: 81, user2: 130 },
//   { date: "2024-06-14", user1: 426, user2: 380 },
//   { date: "2024-06-15", user1: 307, user2: 350 },
//   { date: "2024-06-16", user1: 371, user2: 310 },
//   { date: "2024-06-17", user1: 475, user2: 520 },
//   { date: "2024-06-18", user1: 107, user2: 170 },
//   { date: "2024-06-19", user1: 341, user2: 290 },
//   { date: "2024-06-20", user1: 408, user2: 450 },
//   { date: "2024-06-21", user1: 169, user2: 210 },
//   { date: "2024-06-22", user1: 317, user2: 270 },
//   { date: "2024-06-23", user1: 480, user2: 530 },
//   { date: "2024-06-24", user1: 132, user2: 180 },
//   { date: "2024-06-25", user1: 141, user2: 190 },
//   { date: "2024-06-26", user1: 434, user2: 380 },
//   { date: "2024-06-27", user1: 448, user2: 490 },
//   { date: "2024-06-28", user1: 149, user2: 200 },
//   { date: "2024-06-29", user1: 103, user2: 160 },
//   { date: "2024-06-30", user1: 446, user2: 400 },
//   { date: "2024-07-01", user1: 178, user2: 200 },
//   { date: "2024-07-02", user1: 470, user2: 410 },
//   { date: "2024-07-03", user1: 103, user2: 160 },
//   { date: "2024-07-04", user1: 439, user2: 380 },
//   { date: "2024-07-05", user1: 88, user2: 140 },
//   { date: "2024-07-06", user1: 294, user2: 250 },
//   { date: "2024-07-07", user1: 323, user2: 370 },
//   { date: "2024-07-08", user1: 385, user2: 320 },
//   { date: "2024-07-09", user1: 438, user2: 480 },
//   { date: "2024-07-10", user1: 155, user2: 200 },
//   { date: "2024-07-11", user1: 92, user2: 150 },
//   { date: "2024-07-12", user1: 492, user2: 420 },
//   { date: "2024-07-13", user1: 81, user2: 130 },
//   { date: "2024-07-14", user1: 426, user2: 380 },
//   { date: "2024-07-15", user1: 307, user2: 350 },
//   { date: "2024-07-16", user1: 371, user2: 310 },
//   { date: "2024-07-17", user1: 475, user2: 520 },
//   { date: "2024-07-18", user1: 107, user2: 170 },
//   { date: "2024-07-19", user1: 341, user2: 290 },
//   { date: "2024-07-20", user1: 408, user2: 450 },
//   { date: "2024-07-21", user1: 169, user2: 210 },
//   { date: "2024-07-22", user1: 317, user2: 270 },
//   { date: "2024-07-23", user1: 480, user2: 530 },
//   { date: "2024-07-24", user1: 132, user2: 180 },
//   { date: "2024-07-25", user1: 141, user2: 190 },
//   { date: "2024-07-26", user1: 434, user2: 380 },
//   { date: "2024-07-27", user1: 448, user2: 490 },
//   { date: "2024-07-28", user1: 149, user2: 200 },
//   { date: "2024-07-29", user1: 103, user2: 160 },
//   { date: "2024-07-30", user1: 446, user2: 400 },
// ];

const chartConfig = {
  user1: {
    label: "Jenny",
    color: "hsl(var(--chart-1))",
  },
  user2: {
    label: "Allen",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface WeightChartDataProps {
  data: WeightData[];
}

export function WeightDataChart({ data }: WeightChartDataProps) {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = data.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    console.log(startDate, "startdate", date, "date");
    return date >= startDate;
  });

  React.useEffect(() => {
    console.log("filtered", filteredData);
  }, [filteredData]);

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>{new Date().getFullYear()} Area Chart</CardTitle>
          <CardDescription>
            Showing weight distribution over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="filluser1" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-user1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-user1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="filluser2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-user2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-user2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value: any) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value: any) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="weight"
              type="natural"
              fill="url(#filluser2)"
              stroke="var(--color-user2)"
              stackId="a"
            />
            <Area
              dataKey="disposition"
              type="natural"
              fill="url(#filluser1)"
              stroke="var(--color-user1)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
