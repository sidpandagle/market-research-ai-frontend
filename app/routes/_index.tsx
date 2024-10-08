import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MRAIFE" },
    { name: "description", content: "Welcome to MRAIFE!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Main Page
    </div>
  );
}