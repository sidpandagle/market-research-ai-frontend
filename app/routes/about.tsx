import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to MRAIFE!" },
  ];
};

export default function About() {
  return (
    <div className="flex h-screen items-center justify-center">
      About
    </div>
  );
}