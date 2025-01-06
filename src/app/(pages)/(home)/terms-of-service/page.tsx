import Link from "next/link";
import React from "react";

const TermsServicesPage = () => {
  return (
    <div className="max-w-[80%] mx-auto p-8">
      <h1 className="text-[4rem] font-semibold text-black mb-6">
        Terms of Service for AI Blog Generator
      </h1>
      <p className="text-[1.8rem] text-gray-700 mb-4">
        Effective Date: January 6, 2025
      </p>

      <p className="text-[1.8rem] text-gray-700 mb-6">
        By accessing or using the AI Blog Generator website, accessible from{" "}
        <Link
          href="https://ai-blog.shubhamsrmn.me"
          className="text-blue-600 hover:underline"
        >
          https://ai-blog.shubhamsrmn.me
        </Link>
        , you agree to comply with and be bound by the following terms and
        conditions. Please read these terms carefully.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        1. Acceptance of Terms
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        By accessing or using this site, you agree to these Terms of Service. If
        you do not agree to these terms, please do not use our website.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        2. Use of the Website
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        You agree to use this website only for lawful purposes and in accordance
        with our acceptable use policy. You are responsible for ensuring your
        use of the website complies with local laws.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        3. Account Registration
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        To use certain features of the website, you may need to register for an
        account. By registering, you agree to provide accurate and complete
        information and to maintain the accuracy of that information.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        4. Privacy and Data Collection
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        Your use of the website is governed by our Privacy Policy, which
        outlines the types of data we collect, how we use it, and how we protect
        your privacy.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        5. Limitation of Liability
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        AI Blog Generator is not responsible for any damages or losses arising
        from your use of this website, including any errors or omissions in the
        content or any loss of data.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        6. Termination
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        We reserve the right to suspend or terminate your account and access to
        the website at our sole discretion, without notice, for conduct that
        violates these terms or is harmful to others.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        7. Governing Law
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        These terms are governed by and construed in accordance with the laws of
        India. Any disputes arising from or relating to these terms will be
        resolved in the courts located in Pune, Maharashtra, India.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        8. Changes to the Terms
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        We may update these Terms of Service from time to time. When we do, we
        will post the updated terms on this page with the new effective date. We
        encourage you to review these terms periodically.
      </p>

      <h2 className="text-[2.2rem] font-semibold text-black mt-6 mb-4">
        9. Contact Information
      </h2>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        For any questions regarding these Terms of Service, please contact us
        at:
      </p>
      <p className="text-[1.8rem] text-gray-700 mb-6">
        Email:{" "}
        <Link
          href="mailto:shubhamsrmn@gmail.com"
          className="text-blue-600 hover:underline"
        >
          shubhamsrmn@gmail.com
        </Link>
      </p>
      <p className="text-[1.8rem] text-gray-700">
        Address: Old Sangvi, Pune, Maharashtra, India
      </p>
    </div>
  );
};

export default TermsServicesPage;
