export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-gray-900 mb-12">
          Privacy Policy
        </h1>

        {/* Last Updated */}
        <p className="text-gray-500 text-lg mb-12">
          <span className="font-semibold">Last Updated:</span> June 17, 2026
        </p>

        {/* Reusable Section Style */}
        {[
          {
            title: "1. Introduction",
            content: [
              `Welcome to Vignova Technologies Private Limited ("Vignova", "Company", "we", "our", or "us").`,
              `We respect your privacy and are committed to protecting the personal information you provide when visiting our website, interacting with our products and services, contacting us, applying for employment opportunities, or engaging with us in any other manner.`,
              `This Privacy Policy describes how we collect, use, store, process, disclose, and protect your information.`,
              `By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information in accordance with it.`,
            ],
          },
        ].map((section, index) => (
          <section key={index} className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            {section.content.map((text, i) => (
              <p key={i} className="text-lg text-gray-700 leading-9 mb-5">
                {text}
              </p>
            ))}
          </section>
        ))}

        {/* Section 2 */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">2. Information We Collect</h2>

          <h3 className="text-2xl font-semibold mb-4">
            A. Information You Voluntarily Provide
          </h3>
          <p className="text-lg text-gray-700 leading-9 mb-4">
            We may collect information that you voluntarily submit, including:
          </p>
          <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 leading-8 mb-8">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company or Organization Name</li>
            <li>Job Title</li>
            <li>Business Information</li>
            <li>Messages submitted through contact forms</li>
            <li>Career application details</li>
            <li>Resume/CV information</li>
            <li>Any other information voluntarily provided by you</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">
            B. Information Automatically Collected
          </h3>
          <p className="text-lg text-gray-700 leading-9 mb-4">
            When you access our website, we may automatically collect:
          </p>
          <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 leading-8 mb-8">
            <li>IP Address</li>
            <li>Browser Type and Version</li>
            <li>Device Information</li>
            <li>Operating System</li>
            <li>Referral Source</li>
            <li>Pages Viewed</li>
            <li>Date and Time of Access</li>
            <li>Website Usage Information</li>
            <li>Clickstream Data</li>
            <li>Session Information</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">
            C. Cookies and Similar Technologies
          </h3>
          <p className="text-lg text-gray-700 leading-9 mb-5">
            We may use cookies, analytics tools, pixels, log files, and similar
            technologies to improve website functionality, enhance user
            experience, understand user behavior, and improve our products and
            services.
          </p>
          <p className="text-lg text-gray-700 leading-9">
            You may disable cookies through your browser settings. However,
            certain website features may not function properly if cookies are
            disabled.
          </p>
        </section>

        {/* Helper component style repeated */}
        <PolicySection
          title="3. How We Use Information"
          items={[
            "Operating and maintaining our website",
            "Responding to inquiries and support requests",
            "Communicating with users",
            "Improving website performance",
            "Enhancing user experience",
            "Monitoring website security",
            "Conducting analytics and research",
            "Evaluating partnership opportunities",
            "Processing recruitment applications",
            "Preventing fraud and abuse",
            "Enforcing legal rights and agreements",
            "Complying with legal and regulatory obligations",
          ]}
        />

        <PolicySection
          title="4. Legal Basis for Processing"
          items={[
            "User consent",
            "Contractual necessity",
            "Legal obligations",
            "Legitimate business interests",
            "Protection of rights, property, and security",
          ]}
        />

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            5. Information Sharing and Disclosure
          </h2>
          <p className="text-lg text-gray-700 leading-9 mb-5">
            Vignova does not sell, rent, or trade personal information to third parties.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Service Providers</h3>
          <BulletList
            items={[
              "Website hosting",
              "Cloud infrastructure",
              "Analytics",
              "Communication services",
              "Security monitoring",
              "Recruitment management",
            ]}
          />

          <h3 className="text-2xl font-semibold mb-4 mt-8">Business Transfers</h3>
          <BulletList
            items={[
              "Mergers",
              "Acquisitions",
              "Corporate restructuring",
              "Asset sales",
              "Investment transactions",
            ]}
          />

          <h3 className="text-2xl font-semibold mb-4 mt-8">Legal Compliance</h3>
          <BulletList
            items={[
              "Comply with applicable laws",
              "Respond to legal requests",
              "Protect company rights",
              "Investigate fraud or security incidents",
              "Enforce agreements",
            ]}
          />
        </section>

        <PolicySection
          title="6. Data Retention"
          paragraphs={[
            "We retain personal information only for as long as reasonably necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements, and maintain legitimate business records.",
            "When information is no longer required, it may be deleted, anonymized, or securely destroyed.",
          ]}
        />

        <PolicySection
          title="7. Data Security"
          paragraphs={[
            "We implement commercially reasonable administrative, technical, organizational, and physical safeguards designed to protect information against unauthorized access, misuse, disclosure, alteration, or destruction.",
            "However, no internet-based service, transmission method, or storage system can be guaranteed to be 100% secure. Users acknowledge and accept these inherent risks.",
          ]}
        />

        <PolicySection
          title="8. Third-Party Websites and Services"
          items={[
            "Third-party content",
            "Privacy practices",
            "Security measures",
            "Terms and conditions",
          ]}
          paragraphs={[
            "Our website may contain links to third-party websites, applications, or services.",
            "Users should review the privacy policies of any third-party services they access.",
          ]}
        />

        <PolicySection
          title="9. International Data Transfers"
          paragraphs={[
            "Your information may be processed, stored, or transferred to servers and service providers located in India or other jurisdictions where Vignova or its partners operate.",
            "By using our website, you consent to such transfers, processing, and storage as permitted by applicable laws.",
          ]}
        />

        <PolicySection
          title="10. User Rights"
          items={[
            "Accessing personal information",
            "Correcting inaccurate information",
            "Updating personal information",
            "Requesting deletion of personal information",
            "Objecting to certain processing activities",
            "Withdrawing consent where applicable",
          ]}
          paragraphs={[
            "Requests may be submitted using the contact details provided below.",
            "We reserve the right to verify identity before processing such requests.",
          ]}
        />

        <PolicySection
          title="11. Children's Privacy"
          paragraphs={[
            "Our website, products, and services are not directed toward individuals under 18 years of age.",
            "We do not knowingly collect personal information from minors.",
            "If we become aware that personal information from a minor has been collected, we may take steps to remove such information.",
          ]}
        />

        <PolicySection
          title="12. Recruitment and Career Applications"
          items={[
            "Candidate evaluation",
            "Recruitment communication",
            "Employment verification",
            "Future job opportunities",
          ]}
          paragraphs={[
            "Submission of an application does not guarantee employment or further consideration.",
          ]}
        />

        <PolicySection
          title="13. Product-Specific Privacy Policies"
          items={[
            "Privacy Policies",
            "Terms of Service",
            "User Agreements",
            "Data Processing Notices",
          ]}
          paragraphs={[
            "Certain products or services may have separate policies governing their use.",
          ]}
        />

        <PolicySection
          title="14. Intellectual Property and Website Usage"
          paragraphs={[
            "Nothing in this Privacy Policy grants any ownership rights to website content, trademarks, logos, product names, software, designs, documentation, or intellectual property belonging to Vignova Technologies Private Limited.",
            "Unauthorized copying, reproduction, distribution, or misuse may result in legal action.",
          ]}
        />

        <PolicySection
          title="15. Limitation of Liability"
          items={[
            "Website usage",
            "Service interruptions",
            "Security breaches",
            "Unauthorized access",
            "Third-party actions",
            "Data loss",
          ]}
          paragraphs={[
            "Users access and use the website at their own risk.",
          ]}
        />

        <PolicySection
          title="16. Changes to This Privacy Policy"
          paragraphs={[
            "We reserve the right to modify, update, revise, or replace this Privacy Policy at any time without prior notice.",
            "Changes become effective immediately upon publication on this website.",
            "Continued use of the website following changes constitutes acceptance of the revised Privacy Policy.",
          ]}
        />

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">17. Contact Information</h2>
          <p className="text-lg text-gray-700 leading-9 mb-3">
            <strong>Vignova Technologies Private Limited</strong>
          </p>
          <p className="text-lg text-gray-700 mb-3">
            Email: privacy@yourdomain.com
          </p>
          <p className="text-lg text-gray-700 mb-3">
            Website: www.yourdomain.com
          </p>
          <p className="text-lg text-gray-700">
            Registered Office Address: [Insert Registered Office Address]
          </p>
        </section>

        <PolicySection
          title="18. Governing Law and Jurisdiction"
          paragraphs={[
            "This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.",
            "Any disputes arising from or relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts located in Hyderabad, Telangana, India.",
          ]}
        />
      </div>
    </div>
  );
}

/* Helper Components */

function PolicySection({ title, paragraphs = [], items = [] }) {
  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      {paragraphs.map((text, i) => (
        <p key={i} className="text-lg text-gray-700 leading-9 mb-5">
          {text}
        </p>
      ))}

      {items.length > 0 && (
        <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 leading-8">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 leading-8">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}