import PinnedWebsites from '@/components/PinnedWebsites'
import SearchBar from '@/components/SearchBar'
import Weather from '@/components/Weather'

export default function Home() {
    return (
        <main className="min-h-screen p-24 max-w-7xl mx-auto">
            <div className="date-and-weather flex w-full items-center justify-between mb-10">
                <div className="date">
                    <h1 className="text-4xl font-bold">Monday</h1>
                    <h1 className="text-4xl font-bold">September 13, 2021</h1>
                </div>
                <Weather />
            </div>
            <SearchBar />
            <PinnedWebsites />
        </main>
    )
}
