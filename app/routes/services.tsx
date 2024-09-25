import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Services" },
    { name: "description", content: "Welcome to MRAIFE!" },
  ];
};

export default function Services() {
  return (
    <div className="flex h-screen items-center justify-center">
      Services
    </div>
  );
}