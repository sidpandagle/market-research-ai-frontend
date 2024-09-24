import { PopoverContent, Button } from "@nextui-org/react";

export default function App() {
  const content = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  );

  const placements = [
    "top-start",
    "top",
    "top-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "right-start",
    "right",
    "right-end",
    "left-start",
    "left",
    "left-end",
  ];

  return (
    // <div className="flex bg-white p-8 w-full flex-wrap md:inline-grid md:grid-cols-3 gap-4">
    //   {placements.map((placement) => (
    //     <Popover key={placement} placement={placement} color="secondary">
    //       <PopoverTrigger>
    //         <Button color="secondary" variant="flat" className="capitalize">
    //           {placement.replace("-", " ")}
    //         </Button>
    //       </PopoverTrigger>
    //       {content}
    //     </Popover>
    //   ))}
    // </div>
    <div className="text-white h-[500px] p-8">
      <div className="header">Login</div>
      <input type="text" className="mt-4 p-2 rounded-md" placeholder="username" /> <br />
      <input type="text" className="mt-4 p-2 rounded-md" placeholder="password" type="password" /> <br />
      <Button color="primary" variant="flat" className="capitalize mt-4">
        Login
      </Button>
    </div>
  );
}