import { Select, SelectItem } from "@nextui-org/react";

export default function App() {
    const animals: any = [
        { key: 'Test1', label: 'Test1' },
        { key: 'Test2', label: 'Test2' },
        { key: 'Test3', label: 'Test3' },
        { key: 'Test4', label: 'Test4' },
    ]
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
                label="Select an animal"
                className="max-w-xs"
            >
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
            <Select
                label="Favorite Animal"
                placeholder="Select an animal"
                className="max-w-xs"
            >
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}