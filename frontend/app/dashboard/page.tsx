"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bell,
  FileText,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", notifications: 4 },
  { name: "Tue", notifications: 3 },
  { name: "Wed", notifications: 7 },
  { name: "Thu", notifications: 5 },
  { name: "Fri", notifications: 8 },
  { name: "Sat", notifications: 6 },
  { name: "Sun", notifications: 4 },
];

const stats = [
  {
    name: "Total Notifications",
    value: "37",
    icon: Bell,
    change: 12,
    trend: "up",
  },
  {
    name: "Active Users",
    value: "2,345",
    icon: Users,
    change: 5.4,
    trend: "up",
  },
  {
    name: "Reports Generated",
    value: "12",
    icon: FileText,
    change: 2.3,
    trend: "down",
  },
  {
    name: "System Health",
    value: "98.5%",
    icon: Activity,
    change: 0.5,
    trend: "up",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendIcon
                    className={`h-4 w-4 ${
                      stat.trend === "up"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  />
                  <span className="ml-1">{stat.change}% from last month</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Notification Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="notifications"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}