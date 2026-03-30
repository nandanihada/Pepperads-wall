import React, { useState } from "react";

const TermsOfUse = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-red-500">
          Terms of Use
        </h1>

        {/* Section 1 */}
        <div className="mb-6">
          <h2
            className={`text-xl font-bold cursor-pointer ${
              openSection === 1 ? "text-red-500" : "hover:text-blue-400"
            }`}
            onClick={() => toggleSection(1)}
          >
            1. About Our Services
          </h2>
          {openSection === 1 && (
            <div className="mt-2 text-gray-300 space-y-2">
              <p>
                PepperAds offers a powerful digital advertising platform that helps
                businesses promote their products and services through a wide
                network of publishers.
              </p>
              <p>
                We strive to provide innovative targeting, budget control,
                performance tracking, and campaign analytics.
              </p>
              <p>
                Users are responsible for the accuracy and legality of all content
                they advertise through our platform.
              </p>
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2
            className={`text-xl font-bold cursor-pointer ${
              openSection === 2 ? "text-red-500" : "hover:text-blue-400"
            }`}
            onClick={() => toggleSection(2)}
          >
            2. Payment Terms and Billing
          </h2>
          {openSection === 2 && (
            <div className="mt-2 text-gray-300 space-y-2">
              <p>
                All payments for advertising services must be made through
                PepperAds’ approved payment methods.
              </p>
              <p>
                Charges are calculated based on selected plan type and ad
                performance, as applicable.
              </p>
              <p>
                Taxes, transaction fees, and late payment penalties may apply as
                per our policy.
              </p>
              <p>
                You are responsible for maintaining up-to-date billing
                information in your account.
              </p>
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2
            className={`text-xl font-bold cursor-pointer ${
              openSection === 3 ? "text-red-500" : "hover:text-blue-400"
            }`}
            onClick={() => toggleSection(3)}
          >
            3. User Responsibilities and Acceptable Use
          </h2>
          {openSection === 3 && (
            <div className="mt-2 text-gray-300 space-y-2">
              <p>
                You must comply with all local, national, and international laws
                when using our platform.
              </p>
              <p>
                Prohibited activities include spamming, misleading advertising,
                hate speech, or promoting illegal products/services.
              </p>
              <p>
                We reserve the right to review, suspend, or terminate accounts
                found in violation of these terms without prior notice.
              </p>
              <p>
                Respectful behavior and honest communication are expected at all
                times.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
