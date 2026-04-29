import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quickship — our story, mission, values, and the team behind one of the country's most trusted logistics companies.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
