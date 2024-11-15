"use client";

import { FileText, Bell, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  report: FileText,
  notification: Bell,
  subscription: CreditCard,
};

export function NotificationItem({ notification }) {
  const Icon = icons[notification.type] || Bell;

  return (
    <div
      className={cn(
        "flex items-start space-x-4 p-4 rounded-lg transition-colors",
        notification.read
          ? "bg-muted/40"
          : "bg-muted/80 hover:bg-muted cursor-pointer"
      )}
    >
      <div
        className={cn(
          "rounded-full p-2",
          notification.read ? "bg-muted" : "bg-primary/10"
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            notification.read ? "text-muted-foreground" : "text-primary"
          )}
        />
      </div>
      <div className="flex-1 space-y-1">
        <p
          className={cn(
            "text-sm font-medium leading-none",
            notification.read ? "text-muted-foreground" : "text-foreground"
          )}
        >
          {notification.title}
        </p>
        <p className="text-sm text-muted-foreground">{notification.message}</p>
        <p className="text-xs text-muted-foreground">{notification.time}</p>
      </div>
    </div>
  );
}