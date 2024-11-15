"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: { monthly: "$0", yearly: "$0" },
    description: "Essential features for getting started",
    features: [
      "5 notifications per day",
      "Basic email alerts",
      "7-day notification history",
      "Standard support",
    ],
    current: true,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: { monthly: "$15", yearly: "$144" },
    description: "Perfect for power users and growing teams",
    features: [
      "Unlimited notifications",
      "Priority email alerts",
      "30-day notification history",
      "Priority support",
      "Custom notification templates",
      "Advanced analytics",
    ],
    current: false,
  },
];

export default function SubscriptionPage() {
  const handleUpgrade = (tierId: string) => {
    // Add your subscription logic here
    toast.success("Subscription updated successfully!");
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Subscription Plans</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect plan for your notification needs
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl">
        {tiers.map((tier) => (
          <Card
            key={tier.id}
            className={cn(
              "flex flex-col",
              tier.name === "Pro" && "border-primary shadow-lg"
            )}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mt-4">
                <span className="text-4xl font-bold">
                  {tier.price.monthly}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleUpgrade(tier.id)}
                className="w-full"
                variant={tier.current ? "outline" : "default"}
                disabled={tier.current}
              >
                {tier.current ? "Current Plan" : "Upgrade"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}