import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Stay Connected with{" "}
          <span className="text-primary">Real-time Notifications</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Experience seamless real-time notifications, subscription management, and
          powerful reporting tools all in one place.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/register">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="lg">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}