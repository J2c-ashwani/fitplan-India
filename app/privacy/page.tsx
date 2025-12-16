import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | FitPlan India',
  description: 'Privacy Policy for FitPlan India. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-sm text-gray-500">Last Updated: December 2025</p>

        <p>At FitPlan India, accessible from https://fitplanindia.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FitPlan India and how we use it.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Information We Collect</h2>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">How we use your information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you to provide updates and other information relating to the website</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Log Files</h2>
        <p>FitPlan India follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Cookies and Web Beacons</h2>
        <p>Like any other website, FitPlan India uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Google DoubleClick DART Cookie</h2>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-600 underline">https://policies.google.com/technologies/ads</a></p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">GDPR Data Protection Rights</h2>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@fitplanindia.com.</p>
      </div>
    </div>
  )
}
