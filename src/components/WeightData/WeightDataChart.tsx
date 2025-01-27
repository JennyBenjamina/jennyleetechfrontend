import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ScatterChart,
  Scatter,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { WeightData } from "../../types/WeightData.ts";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.tsx";

const chartConfig = {
  weight: {
    label: "Weight",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface WeightChartDataProps {
  data: WeightData[];
}

interface TooltipLabel {
  value: string;
  angle: number;
  position: string;
}

interface CustomTooltipProps {
  payload?: any;
  label?: any;
  active?: boolean;
}

function CustomTooltip({ payload, label, active }: CustomTooltipProps) {
  console.log(payload, label, active);
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="font-bold">{`${payload[0].value}`}</p>

        {payload[1].dataKey === "weight" ? (
          <p className="label">{`${payload[1].dataKey}: ${payload[1].value} lbs`}</p>
        ) : (
          <p className="label">{`${payload[1].dataKey} : ${payload[1].value}`}</p>
        )}
      </div>
    );
  }

  return null;
}

export function WeightDataChart({ data }: WeightChartDataProps) {
  const [timeRange, setTimeRange] = useState("90d");

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
    return date >= startDate;
  });

  useEffect(() => {}, [filteredData]);

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
      <CardContent className="h-[400px] mt-[50px]">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px] w-full"
        >
          <ScatterChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
              tick={(props) => <CustomizedAxisTick {...props} />}
            />
            {/* First Y-Axis */}
            <YAxis
              domain={[130, 138]} // Custom Y-axis range
              // tickLine={false}
              // axisLine={false}
              tickMargin={8}
              yAxisId="left"
              label={{
                value: "Weight (lbs)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            {/* Second Y-Axis */}
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Disposition",
                angle: -90,
                position: "insideRight",
              }}
            />

            <Tooltip
              content={(props) => <CustomTooltip {...props} />}
              wrapperStyle={{
                padding: 10,
                width: 200,
                backgroundColor: "#7c3aed",
                color: "#f9fafb",
                borderRadius: 5,
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Scatter
              yAxisId="left"
              dataKey="weight"
              fill="#8884d8"
              line={{ stroke: "#8884d8", strokeWidth: 2 }}
            />
            <Scatter
              yAxisId="right"
              type="monotone"
              dataKey="disposition"
              fill="#82ca9d"
            />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}

interface CustomizedAxisTickProps {
  x: number;
  y: number;
  stroke?: string;
  payload: {
    value: string;
  };
}

const CustomizedAxisTick: React.FC<CustomizedAxisTickProps> = ({
  x,
  y,
  stroke,
  payload,
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-65)"
      >
        {payload.value}
      </text>
    </g>
  );
};
