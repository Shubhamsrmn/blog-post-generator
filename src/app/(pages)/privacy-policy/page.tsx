import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className=" max-w-[80%] mx-auto p-8">
      <h1 className="text-[4rem] font-semibold text-black mb-6">
        Privacy Policy for AI Blog Generator
      </h1>
      <p className="text-[1.8rem] text-gray-700 mb-4">
        Effective Date: January 6, 2025
      </p>

      <p className="text-[1.8rem] text-gray-700 mb-6">
        At AI Blog Generator, accessible from{" "}
        <a
          href="https://ai-blog.shubhamsrmn.me"
          className="text-blue-600 hover:underline"
        >
          https://ai-blog.shubhamsrmn.me
        </a>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected
        and recorded by AI Blog Generator and how we use it.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside pl-5 text-[1.8rem] text-gray-700 mb-6">
        <li>Name</li>
        <li>Email address</li>
        <li>Profile information from Google (e.g., user profile)</li>
      </ul>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside pl-5 text-[1.8rem] text-gray-700 mb-6">
        <li>To provide and maintain our AI blog generator service</li>
        <li>To communicate with you (e.g., for account-related matters)</li>
        <li>To improve our website and services</li>
      </ul>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        3. Data Sharing
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        We do not sell, trade, or rent your personal information to others.
        However, we may share information with trusted partners for operational
        purposes under strict confidentiality agreements.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        4. Data Security
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        We take appropriate measures to ensure the security of your personal
        information. However, no method of electronic transmission is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        5. Your Rights
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        You have the right to request access to, correction of, or deletion of
        your personal data at any time. You can also withdraw your consent where
        applicable.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        6. Contact Information
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        If you have any questions or concerns about this Privacy Policy, you can
        contact us at:
      </p>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        Email:{" "}
        <a
          href="mailto:shubhamsrmn@gmail.com"
          className="text-blue-600 hover:underline"
        >
          shubhamsrmn@gmail.com
        </a>
      </p>
      <p className="text-[1.8rem] text-gray-700">
        Address: Old Sangvi, Pune, Maharashtra, India
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
