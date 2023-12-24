import Weather from "@/components/Weather";
import Button from "@/components/ui/Button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
            <div className="date-and-weather flex w-full items-center justify-between">
                <div className="date">
                    <h1 className="text-4xl font-bold">Monday</h1>
                    <h1 className="text-4xl font-bold">September 13, 2021</h1>
                </div>
                <Weather />
            </div>
        </main>
    );
}
