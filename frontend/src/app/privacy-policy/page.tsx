export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-gray-900 mb-12">
          Terms & Conditions
        </h1>

        {/* Last Updated */}
        <p className="text-gray-500 text-lg mb-12">
          <span className="font-semibold">Last Updated:</span> June 17, 2026
        </p>

        <PolicySection
          title="1. Acceptance of Terms"
          paragraphs={[
            `By accessing or using the website operated by Vignova Technologies Private Limited ("Vignova", "Company", "we", "our", or "us"), you agree to be bound by these Terms and Conditions.`,
            `If you do not agree with these Terms, you should discontinue use of the website immediately.`,
          ]}
        />

        <PolicySection
          title="2. Website Purpose"
          paragraphs={[
            `The website is intended to provide information regarding Vignova Technologies Private Limited, its products, services, technology initiatives, career opportunities, partnerships, and business activities.`,
            `Information provided on this website is for general informational purposes only.`,
          ]}
        />

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            3. Intellectual Property
          </h2>

          <p className="text-lg text-gray-700 leading-9 mb-5">
            All content available on this website, including but not limited to:
          </p>

          <BulletList
            items={[
              "Logos",
              "Trademarks",
              "Product names",
              "Software",
              "Graphics",
              "Text",
              "Designs",
              "Images",
              "Documents",
            ]}
          />

          <p className="text-lg text-gray-700 leading-9 mt-6">
            are the exclusive property of Vignova Technologies Private Limited
            unless otherwise stated.
          </p>

          <p className="text-lg text-gray-700 leading-9 mt-5">
            No content may be copied, reproduced, distributed, modified, or
            used without prior written consent from Vignova.
          </p>
        </section>

        <PolicySection
          title="4. User Conduct"
          intro="Users agree not to:"
          items={[
            "Violate any applicable law",
            "Attempt unauthorized access to systems",
            "Interfere with website functionality",
            "Upload malicious software",
            "Misrepresent identity",
            "Collect information from other users without authorization",
          ]}
          paragraphs={[
            "Vignova reserves the right to restrict or terminate access for violations.",
          ]}
        />

        <PolicySection
          title="5. Third-Party Links"
          paragraphs={[
            "The website may contain links to third-party websites.",
            "Vignova does not endorse and is not responsible for third-party content, services, policies, or practices.",
          ]}
        />

        <PolicySection
          title="6. Product Information"
          paragraphs={[
            "Descriptions of products, services, roadmaps, features, future developments, or technology concepts are provided for informational purposes.",
            "Vignova reserves the right to modify, discontinue, delay, or change any product, feature, or service without notice.",
          ]}
        />

        <PolicySection
          title="7. No Warranty"
          intro="The website and all content are provided on an 'AS IS' and 'AS AVAILABLE' basis. Vignova makes no warranties regarding:"
          items={[
            "Accuracy",
            "Completeness",
            "Reliability",
            "Availability",
            "Security",
            "Suitability",
          ]}
        />

        <PolicySection
          title="8. Limitation of Liability"
          paragraphs={[
            "To the maximum extent permitted by law, Vignova shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from use of the website.",
          ]}
        />

        <PolicySection
          title="9. Indemnification"
          paragraphs={[
            "Users agree to indemnify and hold harmless Vignova, its directors, officers, employees, and affiliates from claims arising from misuse of the website or violation of these Terms.",
          ]}
        />

        <PolicySection
          title="10. Modifications"
          paragraphs={[
            "Vignova may modify these Terms at any time.",
            "Continued use of the website constitutes acceptance of updated Terms.",
          ]}
        />

        <PolicySection
          title="11. Governing Law"
          paragraphs={[
            "These Terms shall be governed by the laws of India.",
            "Any disputes shall be subject to the exclusive jurisdiction of courts located in Hyderabad, Telangana, India.",
          ]}
        />
      </div>
    </div>
  );
}

/* Reusable Components */

interface PolicySectionProps {
  title: string;
  paragraphs?: string[];
  items?: string[];
  intro?: string;
}

function PolicySection({
  title,
  paragraphs = [],
  items = [],
  intro = "",
}: PolicySectionProps) {
  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      {intro && (
        <p className="text-lg text-gray-700 leading-9 mb-5">{intro}</p>
      )}

      {items.length > 0 && (
        <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 leading-8 mb-6">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {paragraphs.map((text, i) => (
        <p key={i} className="text-lg text-gray-700 leading-9 mb-5">
          {text}
        </p>
      ))}
    </section>
  );
}

interface BulletListProps {
  items: string[];
}

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 leading-8">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
