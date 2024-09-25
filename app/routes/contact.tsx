import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
    { name: "description", content: "Welcome to MRAIFE!" },
  ];
};

export default function Contact() {
  return (
    <div className="flex h-screen items-center justify-center">
      Contact
    </div>
  );
}