export const TermsContentSection = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-[52px] lg:py-16">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-8 space-y-2 border-b-2 border-gray-200 pb-8 sm:mb-12">
          <p className="font-inter text-sm font-semibold tracking-wide text-gray-600 sm:text-base">
            Effective Date: July 1, 2026
          </p>
          <p className="font-inter text-sm font-medium text-gray-600 sm:text-base">
            Whipcare (ZacWurld Technologies Ltd.) · Lagos, Nigeria · CONFIDENTIAL
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 sm:prose-base">
          {/* Introduction */}
          <div className="space-y-4 rounded-lg border-l-4 border-[#701e00] bg-gray-50 p-4 sm:p-6">
            <p className="font-inter text-[15px] font-medium leading-[1.6] text-gray-800 sm:text-base">
              <strong>Who this document is for.</strong> These Terms and Conditions apply to every person who uses the Whipcare platform — whether you are a car owner booking a service, a fleet operator managing vehicles, or a verified service provider receiving jobs. Different sections apply to different user types. Section headings indicate when a section applies to a specific group. By creating an account or using the platform, you agree to these Terms in full.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="space-y-4">
            <h2 className="font-inter text-lg font-bold text-gray-900 sm:text-xl">Contents</h2>
            <div className="grid gap-2 text-sm sm:gap-3 sm:text-base">
              {[
                "1. Who We Are & What Whipcare Does",
                "2. Definitions",
                "3. Creating an Account",
                "4. How the Platform Works",
                "5. Payments & Escrow",
                "6. Diagnostic Fees",
                "7. Spare Parts",
                "8. Scope Mismatch & Wrong Diagnosis",
                "9. Quality Warranty",
                "10. Dispute Resolution",
                "11. Cancellations",
                "12. Provider-Specific Terms",
                "13. Car Owner-Specific Terms",
                "14. Fleet Operator-Specific Terms",
                "15. Provider Ratings & Reviews",
                "16. Anti-Disintermediation",
                "17. Intellectual Property",
                "18. Data Privacy & NDPA 2023",
                "19. Liability & Indemnity",
                "20. Force Majeure",
                "21. Governing Law",
                "22. Changes to These Terms",
                "23. Contact Us",
              ].map((item) => (
                <p key={item} className="font-inter leading-[1.6] text-gray-700">
                  • {item}
                </p>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">
              1. Who We Are & What Whipcare Does
            </h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare is operated by ZacWurld Technologies Ltd., a company registered in Nigeria. We operate a digital marketplace connecting car owners and fleet operators with verified vehicle service providers — mechanics, car wash operators, towing agents, and detailers.
            </p>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare is a marketplace, not a service provider. We do not employ the mechanics or workshops on the platform. We verify them, manage booking and escrow infrastructure, enforce our Provider SLA, and provide structured dispute resolution. The service itself is delivered by independent providers.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">2. Definitions</h2>
            <div className="space-y-2 overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Term</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Platform", "The Whipcare website and mobile application"],
                    ["Car Owner", "Any individual who uses Whipcare to book vehicle services"],
                    ["Fleet Operator", "A company or individual managing two or more vehicles who accesses Whipcare under a Fleet Agreement"],
                    ["Service Provider / Provider", "A verified mechanic, workshop, car wash, towing agent, or detailer registered on the platform"],
                    ["Escrow", "The holding mechanism by which Whipcare retains payment until both parties confirm job completion"],
                    ["Booking", "A confirmed service request accepted by a Provider via the platform"],
                    ["Diagnostic Fee", "A non-refundable inspection fee paid to the Provider before any repair estimate is issued"],
                    ["Discovery Protocol", "The in-app process for raising revised scope or additional faults mid-job"],
                    ["Warranty Period", "The 5-day (one working week) post-completion window during which labour defects are covered"],
                    ["MTTR", "Mean Time To Repair — the target completion time agreed for fleet service bookings"],
                    ["NDPA 2023", "Nigeria Data Protection Act 2023"],
                    ["SLA", "Whipcare's Provider Service Level Agreement, the binding operational framework for all Providers"],
                  ].map(([term, meaning]) => (
                    <tr key={term}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{term}</td>
                      <td className="px-3 py-2 text-gray-700">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">3. Creating an Account</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              To use Whipcare you must be at least 18 years old, provide accurate information, and maintain the security of your login credentials. You are responsible for all activity on your account.
            </p>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Vehicle Authorisation (Car Owners & Fleet Operators)</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                By submitting a vehicle for service, you confirm you are the registered owner or have express authorisation from the registered owner. You accept full liability for disputes arising from unauthorised vehicle submission.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Provider Registration</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Providers must complete identity verification, upload proof of qualification, and pass onboarding assessment before receiving jobs. Providers are assigned a Tier (1, 2, or 3) based on verification status. Tier determines commission rate and job access — see Section 12.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Account Suspension</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Whipcare may suspend or permanently close any account that violates these Terms, engages in fraud, manipulates ratings, or attempts to circumvent the platform — with or without prior notice depending on severity.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">4. How the Platform Works</h2>
            <div className="space-y-3 overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Step</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Car Owner / Fleet Operator</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Service Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["1", "Describe the service needed and submit a booking", "Receives booking alert (Tier 2 and above)"],
                    ["2", "Review provider bids — price, ETA, rating", "Submits a bid with quoted price and estimated arrival time"],
                    ["3", "Accept a provider", "Receives booking confirmation"],
                    ["4", "Pay into Whipcare escrow", "Travels to job location. Logs arrival. Takes pre-service photo (mandatory)"],
                    ["5", "Wait for service completion", "Completes the job. Submits post-service photo. Marks job complete"],
                    ["6", "Review job. Confirm completion in-app", "Payout released after confirmation and payout window"],
                  ].map(([step, owner, provider]) => (
                    <tr key={step}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{step}</td>
                      <td className="px-3 py-2 text-gray-700">{owner}</td>
                      <td className="px-3 py-2 text-gray-700">{provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4">
              <p className="font-inter text-[15px] font-semibold leading-[1.6] text-amber-900 sm:text-base">
                Do not confirm completion until you are satisfied. Once you confirm in the app, your 48-hour dispute window begins. You can still raise a dispute after confirmation, but only within the 48-hour window or the 5-day warranty period.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">5. Payments & Escrow</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              All payments are made through the Whipcare platform via escrow. Cash, direct bank transfers, or third-party payment to providers for platform bookings are not protected and are not eligible for dispute resolution.
            </p>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Payout Windows</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                After a car owner confirms completion, the provider's payout is released on the following schedule:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Service Type</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Payout Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Car Wash & Detailing", "1–2 hours after confirmation"],
                      ["Diagnostics only", "2–4 hours after report delivery"],
                      ["Standard Repair", "12–24 hours after confirmation"],
                      ["Major Repair (engine, gearbox, suspension)", "24 hours after confirmation"],
                      ["Towing & Haulage", "12–24 hours after delivery confirmation"],
                    ].map(([service, window]) => (
                      <tr key={service}>
                        <td className="px-3 py-2 text-gray-900">{service}</td>
                        <td className="px-3 py-2 text-gray-700">{window}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Escrow Freeze Conditions</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Escrow is automatically frozen when: a dispute is raised, the provider's pre-service photo is missing, a no-show is confirmed, a provider requests payment above their bid without using the Discovery Protocol, or the Ops Lead identifies a platform-level issue. Frozen escrow is held until formal resolution.
              </p>
            </div>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              <strong>Escrow is not insurance.</strong> Escrow covers the booked job value only. It does not guarantee compensation for vehicle damage claims exceeding the job value. Provider insurance requirements apply — see Section 12.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">6. Diagnostic Fees</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              A diagnostic fee is charged before any repair estimate. This fee is non-refundable once inspection is complete, even if you decide not to proceed with the repair. The fee compensates the provider for time and assessment.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Vehicle Type</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Fee Range (₦)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Motorcycle / Tricycle", "₦1,500 – ₦3,000"],
                    ["Saloon / Sedan", "₦3,000 – ₦5,000"],
                    ["SUV / Crossover", "₦5,000 – ₦8,000"],
                    ["Pickup / Truck", "₦5,000 – ₦8,000"],
                    ["Commercial Bus / Van", "₦7,000 – ₦12,000"],
                  ].map(([vehicle, fee]) => (
                    <tr key={vehicle}>
                      <td className="px-3 py-2 text-gray-900">{vehicle}</td>
                      <td className="px-3 py-2 text-gray-700">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">7. Spare Parts</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Parts are the car owner's responsibility. Providers may not purchase or install parts without explicit platform approval.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Scenario</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Permitted</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["You bring your own parts", "Yes", "Provider checks compatibility and documents any concern before installation"],
                    ["You ask provider to source parts", "With approval", "Parts request must go through platform. Ops Lead approves first"],
                    ["Provider sources parts without approval", "No", "Platform will not reimburse. Provider bears full cost and liability"],
                    ["Counterfeit / unverified parts installed", "No", "Immediate provider suspension. Escrow frozen."],
                    ["Your parts are defective pre-installation", "Conditional", "Provider must document defect before installation. You confirm in-app to proceed. Provider's labour warranty still applies to the installation work itself."],
                  ].map(([scenario, permitted, condition]) => (
                    <tr key={scenario}>
                      <td className="px-3 py-2 text-gray-900 font-medium">{scenario}</td>
                      <td className="px-3 py-2 text-gray-700 font-semibold">{permitted}</td>
                      <td className="px-3 py-2 text-gray-700">{condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">
              8. Scope Mismatch & Wrong Diagnosis
            </h2>
            <div className="rounded-lg border-l-4 border-[#701e00] bg-gray-50 p-4">
              <p className="font-inter text-[15px] font-medium leading-[1.6] text-gray-800 sm:text-base">
                This section protects both car owners and providers. It governs situations where the fault in your vehicle is different from — or more serious than — the service you originally requested.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Provider's obligation</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Before beginning any repair, the provider must conduct a pre-check. If the pre-check reveals the requested service will not resolve the underlying issue, the provider must notify you via the Discovery Protocol before proceeding.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Your options when notified:</h3>
              <div className="space-y-2 font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                <p>
                  <strong>Option A — Proceed with original scope only.</strong> Confirm in-app that you want only the originally booked service. You accept that the underlying fault has not been addressed. Provider's warranty covers only the original scope. Whipcare is not liable for vehicle failure caused by the declined fault.
                </p>
                <p>
                  <strong>Option B — Approve revised scope.</strong> Approve the provider's recommendation in-app. Payment is topped up. Warranty covers the full confirmed revised scope.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">If the provider did not notify you</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                If a provider completed your requested scope without raising a pre-check notification, and your vehicle subsequently fails due to a related fault, raise a dispute within 48 hours. Whipcare will review whether the provider met their notification obligation.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Scenario</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Liability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Provider completes requested scope without pre-check. Vehicle fails due to related fault.", "Provider — fully liable"],
                    ["Provider notifies car owner. Car owner declines in writing. Vehicle fails from declined fault.", "Car owner — no provider or Whipcare liability"],
                    ["Provider notifies car owner. Car owner does not respond. Provider proceeds.", "Provider — partial liability"],
                    ["Full revised scope agreed. Vehicle fails within 5-day warranty.", "Provider — warranty applies"],
                  ].map(([scenario, liability]) => (
                    <tr key={scenario}>
                      <td className="px-3 py-2 text-gray-900">{scenario}</td>
                      <td className="px-3 py-2 text-gray-700 font-semibold">{liability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">9. Quality Warranty</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              All labour work is guaranteed for 5 days (one working week) from confirmed job completion.
            </p>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              If the same fault recurs within 5 days due to poor workmanship, the provider must rectify at zero additional labour cost. To invoke the warranty: raise a dispute in-app within the 5-day window, describe the recurring fault, and attach photos.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Covered</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">NOT Covered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Same fault recurring from poor workmanship within 5 days", "New or unrelated faults after the job"],
                    ["Parts installed incorrectly by provider", "Parts you supplied that were defective before installation (if provider documented the risk)"],
                    ["Work not completed to agreed standard", "Damage caused by your actions after collecting the vehicle"],
                    ["Scope mismatch fault where provider failed to notify car owner", "Fault arising from scope car owner declined in writing"],
                  ].map(([covered, notCovered]) => (
                    <tr key={covered}>
                      <td className="px-3 py-2 text-gray-900">{covered}</td>
                      <td className="px-3 py-2 text-gray-700">{notCovered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Parts defect during warranty window</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                If a provider-sourced part (with Ops approval) fails within 5 days, the provider replaces it at zero additional labour cost. Cost recovery from the parts supplier is the provider's responsibility.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">10. Dispute Resolution</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              If you are not satisfied, raise a dispute in-app before confirming completion — or within the 48-hour dispute window after confirmation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Stage</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Timeframe</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">What Happens</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["1 — Dispute Raised", "0–4 hrs", "Both parties acknowledged in writing. Escrow frozen. Assigned to Customer Support."],
                    ["2 — Evidence Collection", "4–24 hrs", "Both parties submit photos, descriptions, in-app messages."],
                    ["3 — Provider Response", "24–36 hrs", "Provider has 12 hours to respond. Silence = automatic decision in car owner's favour."],
                    ["4 — Decision", "36–48 hrs", "Customer Support Lead issues decision: full refund, partial adjustment, full release, or warranty repair."],
                    ["5 — Escalation", "48–72 hrs", "Either party may escalate to Ops Lead. Final binding decision within 24 hours. No further internal appeal."],
                  ].map(([stage, timeframe, what]) => (
                    <tr key={stage}>
                      <td className="px-3 py-2 font-semibold text-gray-900">{stage}</td>
                      <td className="px-3 py-2 text-gray-700">{timeframe}</td>
                      <td className="px-3 py-2 text-gray-700">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              <strong>After both windows close.</strong> Complaints raised after the 5-day warranty period and 48-hour dispute window are outside Whipcare's resolution scope. We recommend test-driving your vehicle before confirming completion on all mechanical repairs.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">11. Cancellations</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Scenario</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Car owner cancels before provider travels", "Full escrow refund within 1 hour"],
                    ["Provider no-show (ERT +60 mins, no contact)", "Full escrow refund to car owner within 1 hour. Provider receives a platform strike."],
                    ["Car owner absent when provider arrives", "30-minute grace period. After 60 minutes: 20% of job value charged as provider compensation. 80% refunded to car owner."],
                    ["Diagnostic complete, car owner cancels repair", "Diagnostic fee is non-refundable. Repair escrow refunded."],
                    ["Force majeure event (flooding, unrest, etc.)", "Job rescheduled, not cancelled. No strike or penalty to either party. Escrow frozen and protected."],
                  ].map(([scenario, outcome]) => (
                    <tr key={scenario}>
                      <td className="px-3 py-2 text-gray-900">{scenario}</td>
                      <td className="px-3 py-2 text-gray-700">{outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">12. Provider-Specific Terms</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              This section applies exclusively to Service Providers. Car owners and fleet operators should note these terms explain how providers are governed — which directly affects service standards they experience.
            </p>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">12.1 — Provider Tiers & Commission</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Tier</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Who</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Commission</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Job Access</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Tier 1", "New / unverified", "20%", "View only — cannot bid"],
                      ["Tier 2", "Verified individual mechanic or solo operator", "15%", "Full B2C booking access"],
                      ["Tier 3", "Verified workshop with multiple staff on payroll", "10%", "Full B2C and B2B fleet access"],
                    ].map(([tier, who, commission, access]) => (
                      <tr key={tier}>
                        <td className="px-3 py-2 font-semibold text-gray-900">{tier}</td>
                        <td className="px-3 py-2 text-gray-700">{who}</td>
                        <td className="px-3 py-2 text-gray-700">{commission}</td>
                        <td className="px-3 py-2 text-gray-700">{access}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">12.2 — Provider Obligations</h3>
              <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
                <li>• Arrive within declared ETA — or notify via platform at least 30 minutes before ETA expires</li>
                <li>• Take a mandatory pre-service photo before touching the vehicle. Jobs cannot move to 'in progress' without it</li>
                <li>• Conduct a scope pre-check before beginning any repair (see Section 8)</li>
                <li>• All communication with car owners must occur through the Whipcare platform</li>
                <li>• Respond to in-app messages within 30 minutes during business hours (8am–8pm)</li>
                <li>• Do not source or install parts without platform approval</li>
                <li>• Clean up after every job. Leave vehicle and space in better condition than found</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">12.3 — Provider Strike System</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Strike</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Consequence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Strike 1", "Formal written warning"],
                      ["Strike 2", "72-hour job access suspension"],
                      ["Strike 3", "30-day suspension. Must reapply with written commitment letter"],
                      ["Strike 4", "Permanent deactivation. No discretion."],
                    ].map(([strike, consequence]) => (
                      <tr key={strike}>
                        <td className="px-3 py-2 font-semibold text-gray-900">{strike}</td>
                        <td className="px-3 py-2 text-gray-700">{consequence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">12.4 — Provider Insurance Requirements</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Provider Type</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Minimum Coverage Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Tier 2 providers", "Third-party liability — minimum ₦500,000 per incident"],
                      ["Tier 3 workshops", "Third-party liability (₦5,000,000 per incident) + employer's liability for staff"],
                      ["Towing providers (all tiers)", "Motor trade/towing liability — minimum ₦2,000,000 per incident. Mandatory before first towing job."],
                      ["Fleet contract providers", "Professional indemnity (₦10,000,000) in addition to third-party liability"],
                    ].map(([type, coverage]) => (
                      <tr key={type}>
                        <td className="px-3 py-2 text-gray-900">{type}</td>
                        <td className="px-3 py-2 text-gray-700">{coverage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Providers without required insurance are downgraded to Tier 1 view-only status until coverage is confirmed.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">12.5 — Conduct Standards</h3>
              <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
                <li>• Zero tolerance for abusive, threatening, or physically aggressive behaviour toward car owners or Whipcare staff. First confirmed incident: permanent deactivation</li>
                <li>• No provider may operate a vehicle, handle tools, or perform any service while under the influence of alcohol or controlled substances</li>
                <li>• Subcontracting without disclosure is prohibited. Tier 3 workshops may assign jobs internally to registered staff only</li>
                <li>• Do not share personal contact details, social handles, or solicit repeat bookings from Whipcare-referred clients outside the platform (see Section 16)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">12.6 — Immediate Termination Grounds (Providers)</h3>
              <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
                <li>• Fraud or deliberate misrepresentation</li>
                <li>• Installation of counterfeit or unapproved parts</li>
                <li>• Second anti-disintermediation violation</li>
                <li>• Confirmed gross misconduct or physical aggression</li>
                <li>• Confirmed operation under the influence</li>
                <li>• Data or privacy breach involving car owner personal information</li>
                <li>• Accumulation of Strike 4</li>
                <li>• Second vehicle damage incident</li>
                <li>• Failure to maintain required insurance after written notice to cure (14-day cure period)</li>
              </ul>
            </div>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">13. Car Owner-Specific Terms</h2>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">13.1 — Your Responsibility for Accurate Fault Description</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                You are responsible for describing your vehicle's symptoms accurately when submitting a booking. Providing a false or incomplete description that results in a provider travelling to a job they cannot complete (due to missing equipment or mismatched skill) will not entitle you to a refund of the diagnostic fee, and may result in a partial escrow retention to compensate the provider's travel costs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">13.2 — Confirming Completion</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Confirming job completion in the app is a meaningful legal act. It triggers payment release to the provider. Do not confirm if you have not inspected the vehicle. Once confirmed, your recourse is the 48-hour dispute window and the 5-day warranty period. Confirmation given under duress — for example while the provider is physically present and pressuring you — should be reported immediately to zacwurld@gmail.com. Whipcare will review the timing and circumstances of the confirmation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">13.3 — Vehicle History Disclosure</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                You should disclose any known material faults with your vehicle at the time of booking, particularly if they may affect the provider's safety or ability to complete the requested service. Failure to disclose a known material fault that causes damage to the provider's tools, equipment, or person may result in liability on your part.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">13.4 — Abusive Behaviour Toward Providers</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Car owners who threaten, intimidate, or are physically aggressive toward providers will have their accounts suspended pending investigation. If the threat is credible or harm occurred, Whipcare will support the provider and the matter will be escalated. Repeated abusive behaviour will result in permanent account closure.
              </p>
            </div>
          </div>

          {/* Section 14 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">14. Fleet Operator-Specific Terms</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Fleet operators use Whipcare on the same pay-per-job escrow model as individual car owners. There is no separate payment structure. The key differences are scale, priority protocols, MTTR accountability, and the additional disclosure obligations below.
            </p>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">14.1 — Fleet Onboarding Obligations</h3>
              <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
                <li>• Provide accurate records for all vehicles in the fleet at onboarding: registration, make, model, year, and known pre-existing faults</li>
                <li>• Update vehicle records when new vehicles are added or retired from the fleet</li>
                <li>• Appoint a named Fleet Contact who will be Whipcare's primary point of contact for all escalations</li>
                <li>• Ensure all vehicle drivers authorised to present vehicles for service are registered under the fleet account</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">14.2 — Pre-Existing Fault Disclosure</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Fleet operators must disclose known pre-existing faults on any vehicle submitted for service. Failure to disclose a known fault that causes a repair failure, provider liability dispute, or safety incident makes the fleet operator — not Whipcare and not the provider — liable for the resulting damage or costs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">14.3 — Emergency Priority Protocol</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Priority</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Scenario</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Whipcare Commitment</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Provider Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["P1 — Critical", "Vehicle breakdown causing active revenue loss (logistics, passenger transport)", "Ops Lead begins provider deployment within 15 minutes of P1 flag during operating hours (7am–9pm). Best effort outside these hours.", "Tier 3 provider dispatch within 30–60 minutes depending on location and availability"],
                      ["P2 — Urgent", "Breakdown not halting operations but cannot wait more than 4 hours", "Provider assigned from fleet pool within 1 hour", "On-site within 2–4 hours depending on traffic and zone"],
                      ["P3 — Standard", "Scheduled or non-urgent maintenance", "Normal booking queue", "Normal booking flow"],
                    ].map(([priority, scenario, whipcare, provider]) => (
                      <tr key={priority}>
                        <td className="px-3 py-2 font-semibold text-gray-900">{priority}</td>
                        <td className="px-3 py-2 text-gray-700">{scenario}</td>
                        <td className="px-3 py-2 text-gray-700">{whipcare}</td>
                        <td className="px-3 py-2 text-gray-700">{provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4">
                <p className="font-inter text-[15px] font-semibold leading-[1.6] text-amber-900 sm:text-base">
                  <strong>Note on response times.</strong> Whipcare commits to initiating provider deployment within the timeframes above. Actual arrival times depend on provider availability, traffic conditions, and geographic proximity. Whipcare is not liable for provider travel delays outside its control. The P1 commitment is to begin the process — not to guarantee arrival within 15 minutes.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">14.4 — MTTR (Mean Time To Repair)</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                MTTR targets are set in the Fleet Agreement and are provider commitments — not Whipcare guarantees. Whipcare's obligation on MTTR is to reroute promptly if a provider misses targets. The provider bears liability for MTTR breaches, not the platform.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                      <th className="px-3 py-2 text-left font-bold text-gray-900">MTTR Breach</th>
                      <th className="px-3 py-2 text-left font-bold text-gray-900">Consequence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["First miss (>20% of target)", "Ops Lead contacts provider. Root cause documented. 2-week improvement window."],
                      ["Second miss within 60 days", "Formal written caution. Provider's fleet access reviewed."],
                      ["Third miss", "Provider removed from fleet account. Fleet operator notified. Replacement provider introduced."],
                    ].map(([breach, consequence]) => (
                      <tr key={breach}>
                        <td className="px-3 py-2 text-gray-900">{breach}</td>
                        <td className="px-3 py-2 text-gray-700">{consequence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">14.5 — Fleet Account Conduct</h3>
              <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
                <li>• Fleet operators may not instruct or pressure providers to bypass platform processes, skip documentation, or accept verbal scope changes</li>
                <li>• Fleet operators who repeatedly submit vehicles without disclosed pre-existing faults after written warning may have their fleet account reviewed or suspended</li>
                <li>• Fleet operators are responsible for ensuring their nominated drivers present vehicles in a safe condition to service</li>
              </ul>
            </div>
          </div>

          {/* Section 15 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">15. Provider Ratings & Reviews</h2>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• Rate providers after completed bookings only — ratings are verified against booking history</li>
              <li>• Leave honest, specific reviews based on your actual experience</li>
              <li>• Do not coordinate with others to manipulate a provider's rating in either direction</li>
              <li>• Do not use the review system to threaten providers into discounts or favours</li>
              <li>• Accounts with fewer than 2 completed bookings cannot contribute to a provider's public score</li>
              <li>• Abuse of the review system (fake positives, coordinated negatives) will result in account suspension</li>
              <li>• Providers may flag a suspicious review within 48 hours of it appearing. Whipcare's Ops Lead will review the flagged account's booking history</li>
            </ul>
          </div>

          {/* Section 16 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">16. Anti-Disintermediation</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              The value Whipcare provides — verification, escrow, dispute resolution, service history — disappears the moment transactions move off-platform. These rules protect all parties.
            </p>
            <div className="space-y-2 text-[15px] sm:text-base">
              <p className="font-semibold text-gray-900">
                Providers must not:
              </p>
              <p className="text-gray-700">
                Share personal contact details with Whipcare-referred clients, accept direct payment for platform bookings, or solicit repeat business outside the platform.
              </p>
              <p className="font-semibold text-gray-900">
                Car owners and fleet operators must not:
              </p>
              <p className="text-gray-700">
                Solicit off-platform arrangements with providers they meet through Whipcare, or offer to pay a provider directly to avoid the platform fee.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Party</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Violation</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Consequence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Provider", "First violation", "Formal warning + 7-day job access suspension"],
                    ["Provider", "Second violation", "Permanent removal. No recourse."],
                    ["Car Owner / Fleet Operator", "First violation", "Formal warning + account review"],
                    ["Car Owner / Fleet Operator", "Second violation", "Permanent account closure"],
                  ].map(([party, violation, consequence]) => (
                    <tr key={`${party}-${violation}`}>
                      <td className="px-3 py-2 text-gray-900">{party}</td>
                      <td className="px-3 py-2 text-gray-700">{violation}</td>
                      <td className="px-3 py-2 text-gray-700">{consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 17 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">17. Intellectual Property</h2>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• All software, design, algorithms, and branding on the Whipcare platform are the intellectual property of ZacWurld Technologies Ltd.</li>
              <li>• You may not reproduce, scrape, reverse-engineer, or replicate any part of the platform</li>
              <li>• Your vehicle service history and booking data is your data — you may request a full export at any time</li>
              <li>• Whipcare may use anonymised, aggregated data (no identifying information) for platform improvement and research</li>
              <li>• Pre-service and post-service photos uploaded to the platform are stored by Whipcare and may be used anonymised for product improvement</li>
              <li>• Providers may not display 'Verified Whipcare Partner' credentials without written permission from Whipcare</li>
              <li>• Whipcare's name, logo, and trade dress may not be used in provider advertising, signage, or social media without written consent</li>
            </ul>
          </div>

          {/* Section 18 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">18. Data Privacy & NDPA 2023</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare processes personal data in accordance with the Nigeria Data Protection Act 2023 (NDPA 2023).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Data Type</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Why We Collect It</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-900">Who Can See It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Name, phone, email", "Account creation and communication", "Whipcare only"],
                    ["Vehicle details & registration", "Booking matching and service history", "Whipcare + assigned Provider"],
                    ["Location (when booking)", "Provider dispatch and arrival", "Whipcare + assigned Provider (job location only)"],
                    ["Payment transaction data", "Escrow management", "Whipcare + payment processor"],
                    ["Service history records", "Vehicle health tracking, disputes, warranty", "Whipcare + Car Owner / Fleet Operator"],
                    ["Pre/post-service photos", "Dispute evidence and quality assurance", "Whipcare + both booking parties"],
                  ].map(([dataType, why, who]) => (
                    <tr key={dataType}>
                      <td className="px-3 py-2 text-gray-900 font-medium">{dataType}</td>
                      <td className="px-3 py-2 text-gray-700">{why}</td>
                      <td className="px-3 py-2 text-gray-700">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• We do not sell your data. We do not share it with third parties for marketing</li>
              <li>• Providers may only use car owner data for the purpose of completing the booked job</li>
              <li>• Providers must not contact car owners using platform-obtained data for any purpose not related to the active booking</li>
              <li>• Under NDPA 2023, you have the right to access, correct, and request deletion of your personal data — submit requests to zacwurld@gmail.com</li>
              <li>• In the event of a data breach, Whipcare will notify affected users and the NDPC within 72 hours of becoming aware</li>
              <li>• Vehicle service history records are retained for 5 years for legal and operational purposes</li>
            </ul>
          </div>

          {/* Section 19 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">19. Liability & Indemnity</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare's liability is limited as follows:
            </p>
            <ul className="space-y-1 text-[15px] text-gray-700 sm:text-base">
              <li>• Maximum liability for any single claim is limited to the escrow amount held for the booking in question</li>
              <li>• Whipcare is not liable for vehicle damage exceeding the job value, loss of use, consequential losses, or damage from parts the car owner supplied</li>
              <li>• Whipcare is not liable for provider actions that breach our SLA — our obligation is to enforce the SLA through the dispute and penalty system</li>
              <li>• Nothing in these Terms excludes liability for death, personal injury caused by Whipcare's negligence, or fraud</li>
            </ul>
            <div className="space-y-2 border-t-2 border-gray-200 pt-4">
              <h3 className="font-inter font-semibold text-gray-900">Provider indemnity</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Providers indemnify Whipcare against any claims, costs, fines, or regulatory penalties arising from the provider's breach of these Terms, the Provider SLA, or applicable Nigerian law — including NDPA 2023 breaches and vehicle damage claims.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-inter font-semibold text-gray-900">Fleet operator indemnity</h3>
              <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
                Fleet operators indemnify Whipcare against claims arising from undisclosed pre-existing vehicle faults, unauthorised vehicle submission, or fleet operator instructions that cause a provider to breach their SLA obligations.
              </p>
            </div>
          </div>

          {/* Section 20 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">20. Force Majeure</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Neither Whipcare nor any user is liable for failure to perform obligations caused by events beyond reasonable control — including flooding, civil unrest, fuel scarcity, CBN payment system outages, telecom failures, or government-imposed movement restrictions. In such events, escrow remains frozen and protected. Jobs are rescheduled, not cancelled, unless both parties agree otherwise in writing. No strike, penalty, or breach is recorded against either party during a verified force majeure event.
            </p>
          </div>

          {/* Section 21 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">21. Governing Law</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any unresolved dispute is subject to the exclusive jurisdiction of the courts of Lagos State, or — by mutual written agreement — binding arbitration under the Lagos Court of Arbitration (LCA) or Chartered Institute of Arbitrators Nigeria (CIArb Nigeria). Internal dispute resolution (Section 10) must be fully exhausted before any court or arbitration proceedings are commenced.
            </p>
          </div>

          {/* Section 22 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">22. Changes to These Terms</h2>
            <p className="font-inter text-[15px] leading-[1.6] text-gray-700 sm:text-base">
              Whipcare may update these Terms from time to time. Material changes will be communicated via the app and by email at least 14 days before they take effect. Continued use of the platform after the effective date constitutes acceptance. If you do not agree, you may close your account before the effective date.
            </p>
          </div>

          {/* Section 23 */}
          <div className="space-y-3">
            <h2 className="font-inter text-lg font-bold text-[#701e00] sm:text-xl">23. Contact Us</h2>
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
                    ["General support", "zacwurld@gmail.com"],
                    ["Dispute escalation", "zacwurld@gmail.com — Subject: Dispute — [Booking ID]"],
                    ["Data access / NDPA requests", "zacwurld@gmail.com — Subject: Data Request"],
                    ["Legal notices", "ZacWurld Technologies Ltd., Lagos, Nigeria"],
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
            <div className="mt-8 border-t-2 border-gray-200 pt-6 text-center">
              <p className="font-inter text-sm font-semibold text-gray-700 sm:text-base">
                Whipcare — The Operating System for Vehicle Health in Africa
              </p>
              <p className="font-inter text-xs text-gray-600 sm:text-sm">
                ZacWurld Technologies Ltd. · Lagos, Nigeria · www.whipcare.app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
