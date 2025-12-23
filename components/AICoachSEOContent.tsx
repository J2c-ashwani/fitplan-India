import Link from 'next/link'

export default function AICoachSEOContent() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 text-gray-600">
            <div className="prose prose-sm md:prose-base max-w-none">

                <h2 className="text-2xl font-bold text-gray-800 mb-4">FitPlan India AI Diet Coach: Your Free Personal Trainer</h2>
                <p>
                    Welcome to the most advanced <strong>AI Diet Coach</strong> designed specifically for Indian health goals.
                    Whether you have <strong>PCOS, Thyroid issues, or Diabetes</strong>, our AI analyzes your unique bio-profile
                    to create a 100% personalized diet and workout plan in seconds.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why use our AI Workout Generator?</h3>
                <p>
                    Unlike generic PDF plans, our <strong>AI Personal Trainer</strong> adapts to you.
                    Tell it your age, weight, and goals (e.g., "Vegetarian muscle gain" or "Post-pregnancy weight loss"),
                    and it instantly builds a schedule that fits your lifestyle.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Frequently Asked Questions</h3>

                <div className="space-y-4 mt-4">
                    <details className="group border-l-4 border-emerald-500 bg-gray-50 p-4 rounded-r-lg" open>
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                            Is this AI Diet Plan really free?
                        </summary>
                        <p className="mt-2 text-sm">
                            Yes! You can instantly generate a detailed diet and workout summary for free.
                            Our AI analyzes thousands of data points to give you clinical-grade advice without the expensive consultation fee.
                        </p>
                    </details>

                    <details className="group border-l-4 border-emerald-500 bg-gray-50 p-4 rounded-r-lg">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                            Can it make Indian Diet Charts?
                        </summary>
                        <p className="mt-2 text-sm">
                            Absolutely. Our AI specializes in Indian cuisine, including North Indian, South Indian, and Vegetarian options.
                            It understands the nutritional value of Roti, Dal, Sabzi, and can create plans that fit your kitchen.
                        </p>
                    </details>

                    <details className="group border-l-4 border-emerald-500 bg-gray-50 p-4 rounded-r-lg">
                        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                            Do I need to sign up?
                        </summary>
                        <p className="mt-2 text-sm">
                            You can start chatting immediately in "Demo Mode" to see how it works.
                            To save your progress and get the full plan emailed to you, we'll ask for basic details later.
                        </p>
                    </details>
                </div>

                <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
                    <p className="font-semibold text-emerald-800">
                        Ready to start your transformation?
                    </p>
                    <p className="text-sm text-emerald-600 mt-1">
                        Ask the AI above: <em>"Make me a 1500 calorie diet plan"</em>
                    </p>
                </div>

                <div className="mt-12 text-xs text-gray-400 border-t pt-4">
                    <p>Related Searches: Free Personal Trainer AI, Indian Diet Chart Maker, PCOS Weight Loss AI, Gym Routine Generator for Beginners.</p>
                </div>

            </div>
        </article>
    )
}
