import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | FitPlan India',
  description: 'Terms and Conditions for FitPlan India usage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms and Conditions</h1>
      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-sm text-gray-500">Last Updated: December 2025</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Introduction</h2>
        <p>Welcome to FitPlan India! These terms and conditions outline the rules and regulations for the use of FitPlan India's Website, located at https://fitplanindia.com.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use FitPlan India if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Medical Disclaimer</h2>
        <p className="bg-red-50 p-4 border-l-4 border-red-500 rounded font-medium">
          FitPlan India provides general educational information and diet planning services. We are NOT medical doctors. The content on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">3. License</h2>
        <p>Unless otherwise stated, FitPlan India and/or its licensors own the intellectual property rights for all material on FitPlan India. All intellectual property rights are reserved. You may access this from FitPlan India for your own personal use subjected to restrictions set in these terms and conditions.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">4. User Comments</h2>
        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. FitPlan India does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of FitPlan India,its agents and/or affiliates.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Disclaimer</h2>
        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Contact Information</h2>
        <p>If you have any queries regarding any of our terms, please contact us.</p>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-4">
          <p className="font-semibold text-gray-900">FitPlan India</p>
          <p className="text-gray-600 mt-2">
            1102, Serene 53, Vaishnodevi Circle,<br />
            Ahmedabad, Gujarat - 380060<br />
            India
          </p>
          <p className="text-gray-600 mt-4">
            Email: <a href="mailto:support@fitplanindia.com" className="text-emerald-600 hover:underline">support@fitplanindia.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
