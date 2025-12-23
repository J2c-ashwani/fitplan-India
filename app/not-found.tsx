import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/">Back to Home</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/plans">View Diet Plans</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
