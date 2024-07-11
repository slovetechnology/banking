
"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { LuTrendingUp } from "react-icons/lu"
import { BiSolidBellRing } from "react-icons/bi"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
}


const DashboardStats = [
  { title: 'total users balance', counts: '$300,000,000' },
  { title: 'total users', counts: '50' },
  { title: 'total Withdrawals', counts: '50' },
  { title: 'total Withdrew', counts: '$50,000,000' },
  { title: 'total Transfered', counts: '50' },
  { title: 'total Amount Transfered', counts: '$50,000,000' },
]

const DashboardStats2 = [
  { title: 'Approved Users', counts: '30' },
  { title: 'Pending Withdrawals', counts: '50' },
  { title: 'Declined Withdrawals', counts: '50' },
  { title: 'Completed Savings', counts: '100' },
]


export default function AdminHomePage() {
  return (
    <>
      <div className="w-11/12 mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">
            {DashboardStats.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border">
                <div className="flex items-center justify-between">
                  <div className="text-sm lg:text-base text-zinc-500 capitalize font-semibold">{item.title}</div>
                  <div className="text-gray-500">
                    <LuTrendingUp className="text-xl lg:text-2xl" />
                  </div>
                </div>
                <div className="font-bold text-base lg:text-xl mt-5">{item.counts}</div>
              </div>
            ))}
          </div>
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>Saving Goals</CardTitle>
                <CardDescription>January - Till Date</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="natural"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total Savings Transactions for the last 6 months
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="order-2 lg:order-1">
            <div>
              <div className="text-primary text-3xl font-bold px-4 mt-10 mb-5">Latest Notifications</div>
              <div className="bg-white px-6 pt-14 pb-5">
                <ol className="relative border-l border-gray-200">
                  {new Array(5).fill(0).map((item, i) => (
                    <li key={i} className={`mb-10 ml-6 cursor-pointer`}>
                      <span className={`absolute flex items-center text-sm ${i % 1 === 0 ? 'text-slate-400 bg-slate-100 ring-white' : 'text-blue-100 bg-blue-500 ring-white'} justify-center w-8 h-8  rounded-full -left-4 ring-4 `}>
                        <BiSolidBellRing />
                      </span>
                      <div className="grid grid-cols-2">
                        <div className="">
                          <h3 className="leading-tight font-bold text-sm capitalize text-primary"> Notification Title </h3>
                        </div>
                        <div className="">
                          <div className="text-xs text-right font-medium">10/10/2024 10:10 AM</div>
                        </div>
                      </div>
                      <div className="text-sm text-left mr-2 text-slate-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi! Lorem ipsum dolor sit amet. </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">
              {DashboardStats2.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm lg:text-base text-zinc-500 capitalize font-semibold">{item.title}</div>
                    <div className="text-gray-500">
                      <LuTrendingUp className="text-xl lg:text-2xl" />
                    </div>
                  </div>
                  <div className="font-bold text-base lg:text-xl mt-5">{item.counts}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
