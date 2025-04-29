import React from "react";
import {
  UserRound,
  ChartNoAxesColumnIncreasing,
  FileText,
  BookOpenText,
  CircleHelp,
} from "lucide-react";
import { ReactNode } from "react";

export type SidebarItem = {
  id: number;
  icon: ReactNode;
  label: string;
  route?: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    icon: React.createElement(UserRound, { fill: "white", strokeWidth: 1 }),
    label: "User",
    route: "/user",
  },
  {
    id: 2,
    icon: React.createElement(ChartNoAxesColumnIncreasing, {
      fill: "white",
      strokeWidth: 3,
    }),
    label: "Chart",
    route: "/financial-report",
  },
  {
    id: 3,
    icon: React.createElement(FileText, { fill: "white", strokeWidth: 1 }),
    label: "File",
    route: "/files",
  },
  {
    id: 4,
    icon: React.createElement(BookOpenText, { fill: "white", strokeWidth: 1 }),
    label: "Book",
    route: "/books",
  },
  {
    id: 5,
    icon: React.createElement(CircleHelp, { fill: "white", strokeWidth: 1 }),
    label: "Help",
    route: "/help",
  },
];
