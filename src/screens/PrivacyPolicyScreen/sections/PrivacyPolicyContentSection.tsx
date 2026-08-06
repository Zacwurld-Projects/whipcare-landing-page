export const PrivacyPolicyContentSection = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-[52px] lg:py-16">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-8 space-y-2 border-b-2 border-gray-200 pb-8 sm:mb-12">
          <p className="font-inter text-sm font-semibold tracking-wide text-gray-600 sm:text-base">
            Effective Date: July 1, 2026
          </p>
          <p className="font-inter text-sm font-medium text-gray-600 sm:text-base">
            Governed by the Nigeria Data Protection Act 2023 (NDPA 2023)
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 sm:prose-base">
          {/* Introduction */}
          <div className="space-y-4 rounded-lg border-l-4 border-[#701e00] bg-gray-50 p-4 sm:p-6">
            <p className="font-inter text-[15px] font-medium leading-[1.6] text-gray-800 sm:text-base">
              Your privacy matters to us. This Privacy Policy explains what personal data Whipcare collects, why we collect it, how we use and protect it, who we share it with, and what rights you have under the Nigeria Data Protection Act 2023 (NDPA 2023). Please read it fully. By using the Whipcare platform, you agree to the practices described in this Policy.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="space-y-4">
            <h2 className="font-inter text-lg font-bold text-gray-900 sm:text-xl">Contents</h2>
            <div className="grid gap-2 text-sm sm:gap-3 sm:text-base">
              {[
                "1. Who We Are",
                "2. Who This Policy Covers",
                "3. What Data We Collect",
                "4. Why We Collect It — Lawful Bases",
                "5. How We Use Your Data",
                "6. Who We Share Your Data With",
                "7. How Long We Keep Your Data",
                "8. How We Protect Your Data",
                "9. Your Rights Under NDPA 2023",
                "10. Cookies & Tracking",
                "11. Children's Privacy",
                "12. Cross-Border Data Transfers",
                "13. Data Breach Response",
                "14. Service Provider Data Obligations",
                "15. Changes to This Policy",
                "16. Contact Us & Complaints",
              ].map((item) => (
                <p key={item} className="font-inter leading-[1.6] text-gray-700">
                  • {item}
                </p>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">1. Who We Are</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare is a verified vehicle health and service marketplace operated by ZacWurld Technologies Limited ("Whipcare", "we", "us", "our"). We are the Data Controller for personal data processed through the Whipcare platform.
            </p>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              <strong>Contact:</strong> zacwurld@gmail.com · www.whipcare.app · Lagos, Nigeria
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">2. Who This Policy Covers</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              This Privacy Policy applies to all individuals whose personal data Whipcare processes, including:
            </p>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• Car Owners — individuals who book vehicle services through the platform</li>
              <li>• Fleet Operators — companies and individuals managing vehicle fleets on the platform</li>
              <li>• Service Providers — mechanics, workshops, towing agents, car wash operators, and detailers registered on Whipcare</li>
              <li>• Visitors — anyone who visits the Whipcare website or app without registering</li>
              <li>• Business contacts — representatives of companies we work with or communicate with</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">3. What Data We Collect</h2>
            <div className="space-y-3 overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Data Category</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">What It Includes</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Who It Applies To</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Identity Data", "Full name, date of birth, gender, nationality, government-issued ID number (NIN), BVN", "Car Owners, Fleet Operators, Service Providers"],
                    ["Contact Data", "Email address, phone number, WhatsApp number, residential address", "All registered users"],
                    ["Vehicle Data", "Vehicle registration number, make, model, year, mileage, service history, health score, known faults, photos", "Car Owners, Fleet Operators"],
                    ["Location Data", "Location at the time of booking (to match nearby providers), delivery or pickup address for towing", "Car Owners, Fleet Operators"],
                    ["Service Data", "Booking records, job status, service scope, photos (pre-service and post-service), dispute records, ratings and reviews", "All registered users"],
                    ["Payment & Financial Data", "Escrow transaction records, payment amounts, payment status, payout records. We do not store full card numbers — payment processing is handled by our third-party payment processor.", "Car Owners, Fleet Operators, Service Providers"],
                    ["Verification Data", "Professional qualifications, workshop photos, tool verification records, insurance documents, client references", "Service Providers"],
                    ["Usage Data", "IP address, device type, operating system, app version, pages visited, time spent, clicks and interactions", "All users including Visitors"],
                    ["Communications Data", "In-app messages between car owners and providers, support tickets, email correspondence with Whipcare", "All registered users"],
                    ["Inferred Data", "Vehicle health scores, predicted maintenance needs, and other data points derived from your service history and usage patterns", "Car Owners, Fleet Operators"],
                  ].map(([category, includes, applies]) => (
                    <tr key={category}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{category}</td>
                      <td className="px-3 py-2 text-gray-700">{includes}</td>
                      <td className="px-3 py-2 text-gray-700">{applies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">
              4. Why We Collect It — Lawful Bases
            </h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Under the NDPA 2023, we must have a lawful basis for processing your personal data. We rely on the following:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Lawful Basis</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">When We Rely On It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Contract", "Processing necessary to provide our services: creating your account, processing bookings, managing escrow payments, matching you with service providers, handling disputes."],
                    ["Legitimate Interests", "Fraud prevention and platform security, improving our services, communicating service updates, maintaining vehicle service history records, detecting and preventing misuse of the platform."],
                    ["Legal Obligation", "NDPA 2023 compliance, responding to lawful requests from regulatory authorities, maintaining financial records for tax and regulatory purposes."],
                    ["Consent", "Marketing communications (you can withdraw consent at any time), optional analytics and personalisation features, optional data sharing with third parties for service improvement."],
                  ].map(([basis, when]) => (
                    <tr key={basis}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{basis}</td>
                      <td className="px-3 py-2 text-gray-700">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">5. How We Use Your Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Purpose</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Data Used</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Creating and managing your account", "Identity, Contact", "Contract"],
                    ["Matching car owners with verified service providers", "Location, Vehicle, Identity", "Contract"],
                    ["Processing bookings and managing escrow", "Service, Payment", "Contract"],
                    ["Provider verification and onboarding", "Verification, Identity, Contact", "Contract"],
                    ["Dispute resolution", "Service, Communications, Payment", "Contract / Legitimate Interests"],
                    ["Vehicle health scoring and predictive maintenance", "Vehicle, Service, Inferred", "Contract / Legitimate Interests"],
                    ["Sending booking confirmations and service updates", "Contact, Service", "Contract"],
                    ["Platform security and fraud prevention", "Usage, Identity, Payment", "Legitimate Interests"],
                    ["Improving platform features and user experience", "Usage (anonymised)", "Legitimate Interests"],
                    ["Sending marketing communications", "Contact", "Consent"],
                    ["Complying with legal and regulatory obligations", "All categories as required", "Legal Obligation"],
                  ].map(([purpose, data, basis]) => (
                    <tr key={purpose}>
                      <td className="px-3 py-2 text-gray-900">{purpose}</td>
                      <td className="px-3 py-2 text-gray-700">{data}</td>
                      <td className="px-3 py-2 text-gray-700">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">6. Who We Share Your Data With</h2>
            <div className="space-y-3">
              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-gray-900">6.1 Service Providers</h3>
                <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                  When you make a booking, we share the minimum data necessary for the Service Provider to complete the job: your name, phone number, vehicle details, and booking location. Service Providers are bound by our Provider Service Level Agreement and may not use this data for any purpose other than completing your booking.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-gray-900">6.2 Payment Processors</h3>
                <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                  We use third-party payment processors to manage escrow transactions. Your payment data is processed by these providers under their own security standards. We do not store full card numbers.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-gray-900">6.3 Fleet Operators</h3>
                <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                  If you are a driver presenting a vehicle for service under a fleet account, the fleet operator may see your name and the service record for that vehicle.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-gray-900">6.4 Regulatory Authorities</h3>
                <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                  We may disclose personal data to the Nigeria Data Protection Commission (NDPC), law enforcement, or other regulatory bodies where required by law or where disclosure is necessary to prevent fraud or protect safety.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-gray-900">6.5 Business Transfers</h3>
                <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                  In the event of a merger, acquisition, or sale of Whipcare, your personal data may be transferred as part of that transaction. We will notify you before your data is transferred and becomes subject to a different privacy policy.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-gray-900">6.6 We Do Not Sell Your Data</h3>
                <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                  Whipcare does not sell, rent, or trade your personal data to third parties for marketing or commercial purposes. We do not share your data with advertisers.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">7. How Long We Keep Your Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Data Type</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Retention Period</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Account and identity data", "Duration of account + 2 years after closure", "Fraud prevention and legal claims"],
                    ["Vehicle service history", "5 years from last service record", "Legitimate interest in vehicle health tracking; legal basis for disputes"],
                    ["Payment and financial records", "7 years", "Regulatory and tax obligations"],
                    ["Dispute records", "3 years from resolution", "Legal claims and platform integrity"],
                    ["API and access logs", "90 days", "Security monitoring and fraud detection"],
                    ["Marketing preferences", "Until consent withdrawn or account closed", "Consent-based"],
                    ["Provider verification documents", "Duration of provider registration + 2 years", "Contractual and legal obligations"],
                  ].map(([dataType, retention, reason]) => (
                    <tr key={dataType}>
                      <td className="px-3 py-2 text-gray-900">{dataType}</td>
                      <td className="px-3 py-2 text-gray-700">{retention}</td>
                      <td className="px-3 py-2 text-gray-700">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              When data is no longer needed, we delete or anonymise it securely. You may request earlier deletion — see Section 9.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">8. How We Protect Your Data</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare implements the following security measures to protect your personal data:
            </p>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• Encryption of sensitive data in transit (HTTPS/TLS) and at rest (AES-256) for vehicle data, payment metadata, and identity documents</li>
              <li>• Access controls limiting which team members can access personal data, based on the principle of least privilege</li>
              <li>• Authentication controls including short-lived session tokens and multi-factor authentication on administrative systems</li>
              <li>• Regular security audits and vulnerability assessments of our platform and API endpoints</li>
              <li>• Contractual data protection obligations with all third-party processors</li>
              <li>• Staff awareness of data protection obligations under NDPA 2023</li>
            </ul>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4">
              <p className="font-inter text-[15px] font-semibold leading-[1.6] text-amber-900 sm:text-base">
                No system is completely secure. While we take reasonable and appropriate measures to protect your data, we cannot guarantee absolute security. If you suspect your account has been compromised, contact us immediately at zacwurld@gmail.com.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">9. Your Rights Under NDPA 2023</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              As a data subject under the Nigeria Data Protection Act 2023, you have the following rights regarding your personal data held by Whipcare:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Right</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">What It Means</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">How to Exercise It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Right of Access", "You can request a copy of all personal data we hold about you.", "Email zacwurld@gmail.com with subject: Data Access Request. We will respond within 30 days."],
                    ["Right to Rectification", "You can request correction of inaccurate or incomplete data.", "Update your profile in-app, or email us with the specific correction needed."],
                    ["Right to Erasure", "You can request deletion of your personal data where we no longer have a lawful basis to hold it.", "Email zacwurld@gmail.com with subject: Data Deletion Request. Some data may be retained for legal or regulatory reasons."],
                    ["Right to Restriction", "You can request that we restrict processing of your data in certain circumstances (e.g. while you contest its accuracy).", "Email zacwurld@gmail.com explaining the specific restriction requested."],
                    ["Right to Data Portability", "You can request your data in a structured, commonly used format (e.g. CSV) for transfer to another service.", "Email zacwurld@gmail.com with subject: Data Portability Request."],
                    ["Right to Object", "You can object to processing based on legitimate interests or for direct marketing at any time.", "Use the unsubscribe link in any marketing email, or email us directly."],
                    ["Right to Withdraw Consent", "Where processing is based on consent, you can withdraw it at any time without affecting prior processing.", "Update your notification preferences in-app or email us."],
                  ].map(([right, meaning, exercise]) => (
                    <tr key={right}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{right}</td>
                      <td className="px-3 py-2 text-gray-700">{meaning}</td>
                      <td className="px-3 py-2 text-gray-700">{exercise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              We will respond to all rights requests within 30 days. Where a request is complex, we may extend this by a further 30 days with notice. We will not charge a fee for requests unless they are manifestly unfounded or excessive.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">10. Cookies & Tracking</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              10.1 The Whipcare app and website use cookies and similar tracking technologies to: keep you logged in, remember your preferences, understand how you use the platform, and improve our service.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Cookie Type</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Purpose</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Can You Control It?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Essential", "Required for the platform to function (session management, security).", "No — these are necessary for the service."],
                    ["Functional", "Remember your preferences and settings.", "Yes — disable in browser or app settings."],
                    ["Analytics", "Understand usage patterns to improve the platform (anonymised).", "Yes — opt out in your account settings."],
                    ["Marketing", "Serve relevant communications (only with consent).", "Yes — withdraw consent at any time."],
                  ].map(([type, purpose, control]) => (
                    <tr key={type}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{type}</td>
                      <td className="px-3 py-2 text-gray-700">{purpose}</td>
                      <td className="px-3 py-2 text-gray-700">{control}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">11. Children's Privacy</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare is not intended for use by individuals under 18 years of age. We do not knowingly collect personal data from children. If we become aware that we have collected data from a person under 18, we will delete it promptly. If you believe a minor has provided us with personal data, please contact us at zacwurld@gmail.com.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">12. Cross-Border Data Transfers</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare primarily stores and processes data in Nigeria. Where we use international third-party services (such as cloud infrastructure or payment processors), your data may be transferred to and processed in countries outside Nigeria.
            </p>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Where such transfers occur, we ensure appropriate safeguards are in place, including Standard Contractual Clauses or equivalent mechanisms that provide a level of protection consistent with the NDPA 2023. We do not transfer data to countries that do not provide adequate data protection without appropriate safeguards.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">13. Data Breach Response</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, Whipcare will:
            </p>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• Notify the Nigeria Data Protection Commission (NDPC) within 72 hours of becoming aware of the breach</li>
              <li>• Notify you directly without undue delay if the breach is likely to result in a high risk to your rights and freedoms</li>
              <li>• Describe the nature of the breach, the categories and approximate number of data subjects affected, and the likely consequences</li>
              <li>• Describe the measures taken or proposed to address the breach, including measures to mitigate its effects</li>
            </ul>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              If you suspect a data breach involving your Whipcare account, contact us immediately at zacwurld@gmail.com with subject: Security Incident.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">14. Service Provider Data Obligations</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Service Providers registered on Whipcare receive access to car owner personal data (name, phone, location, vehicle details) as part of the booking process. This data is provided to enable completion of the booked service only. Service Providers are required to:
            </p>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• Use car owner data only for the purpose of completing the booked job</li>
              <li>• Not store, copy, or share car owner personal data outside the Whipcare platform</li>
              <li>• Not contact car owners using platform-obtained data for any purpose not related to the active booking</li>
              <li>• Delete any written notes containing car owner personal data within 24 hours of job completion</li>
              <li>• Report any suspected data breach or unauthorised access to Whipcare immediately</li>
            </ul>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Breach of these obligations by a Service Provider may result in immediate suspension, permanent deactivation, and potential legal action under the NDPA 2023. Whipcare may pursue the Service Provider for indemnification of any costs arising from their data breach.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">15. Changes to This Policy</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. We will notify you of material changes via the app and by email at least 14 days before they take effect. The 'Effective Date' at the top of this Policy indicates when it was last updated.
            </p>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Your continued use of the platform after the effective date of any update constitutes acceptance of the revised Policy. If you disagree with changes, you may close your account before they take effect.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">16. Contact Us & Complaints</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              If you have questions, concerns, or complaints about how Whipcare handles your personal data, or if you wish to exercise any of your rights under the NDPA 2023, please contact us:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Contact Type</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Data protection enquiries", "zacwurld@gmail.com — Subject: Privacy / Data Protection"],
                    ["Rights requests (access, deletion, portability)", "zacwurld@gmail.com — Subject: Data Rights Request"],
                    ["Data breach reports", "zacwurld@gmail.com — Subject: Security Incident"],
                    ["General complaints", "zacwurld@gmail.com"],
                    ["Regulatory body", "Nigeria Data Protection Commission (NDPC) — ndpc.gov.ng"],
                    ["Platform", "www.whipcare.app"],
                  ].map(([type, details]) => (
                    <tr key={type}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{type}</td>
                      <td className="px-3 py-2 text-gray-700">{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              If you are not satisfied with our response to a data protection complaint, you have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng.
            </p>
            <div className="mt-8 border-t-2 border-gray-200 pt-6 text-center">
              <p className="font-inter text-sm font-semibold text-gray-700 sm:text-base">
                Whipcare — The Operating System for Vehicle Health in Africa
              </p>
              <p className="font-inter text-xs text-gray-600 sm:text-sm">
                ZacWurld Technologies Limited · Lagos, Nigeria · Effective July 1, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
