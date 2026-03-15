import Footer from "@/components/sections/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Us | UnifyComply",
  description: "Building the Future of Unified Compliance",
};

export default function AboutPage() {
  return (
    <>
      <div className={`pt-10 pb-20 ${inter.className}`}>
        {/* Header Section */}
        <section className="container mx-auto px-6 max-w-5xl text-center flex flex-col items-center mt-8 mb-20">
          <div className="mb-6 mt-4">
            <div className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-sm font-medium text-[#314643] shadow-[0_10px_30px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl backdrop-saturate-150">
              <span className="relative">About Us</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#081a17] mb-8 leading-[1.1]">
            Building the Future of <br className="hidden md:block" />
            <span className="text-[#0a3f33]">Unified Compliance</span>
          </h1>

          <div className="text-lg md:text-xl leading-relaxed text-[#5a6b67] max-w-3xl mx-auto space-y-6 text-left">
            <p>
              UnifyComply is a unified compliance and risk intelligence platform designed to help organizations navigate the growing complexity of regulatory requirements in the digital economy.
            </p>
            <p>
              As financial services and digital platforms expand globally, businesses must manage identity verification, AML screening, sanctions checks, and transaction monitoring across multiple systems. This fragmented approach increases operational costs, slows customer onboarding, and creates gaps in risk detection.
            </p>
            <p className="font-semibold text-[#0a3f33]">
              UnifyComply solves this challenge by bringing the entire compliance lifecycle into one intelligent platform.
            </p>
            <p>
              Our technology integrates KYC/KYB verification, AML and sanctions screening, bank account ownership analysis, and real-time transaction monitoring into a single system powered by a unified risk intelligence engine.
            </p>
          </div>
        </section>

        {/* Multi-Section Content */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {/* Our Mission */}
            <div className="bg-[#f8faf9] rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0f0eb] rounded-bl-full opacity-50"></div>
              <h2 className="text-3xl font-bold text-[#081a17] mb-6 relative z-10">Our Mission</h2>
              <div className="text-lg text-[#5a6b67] space-y-4 relative z-10">
                <p>
                  Our mission is to simplify compliance and empower organizations to operate securely and confidently in an increasingly regulated digital world.
                </p>
                <p>
                  We believe compliance should enable innovation, not slow it down. By unifying compliance processes and providing real-time risk visibility, we help organizations protect their users, reduce financial crime, and maintain regulatory confidence.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-[#0a3f33] rounded-3xl p-8 md:p-12 shadow-md text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d5041] rounded-bl-full opacity-50"></div>
              <h2 className="text-3xl font-bold mb-6 relative z-10">Our Vision</h2>
              <div className="text-lg text-[#b8d6ce] space-y-4 relative z-10">
                <p>
                  Our vision is to become the intelligent compliance infrastructure powering the next generation of digital financial ecosystems.
                </p>
                <p>
                  As financial services continue to evolve, the need for unified, real-time compliance intelligence will only grow. UnifyComply is building the platform that helps organizations manage risk with greater speed, accuracy, and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Differentiator & Audience */}
          <div className="mb-24 space-y-20">
            {/* What Makes Us Different */}
            <div className="text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#eef5f3] text-[#0a3f33] text-sm font-semibold">
                  The UnifyComply Difference
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#081a17] mb-6">
                  Connecting verification to behavior
                </h2>
                <p className="text-lg text-[#5a6b67] mb-8">
                  Unlike traditional compliance tools that operate in isolation, UnifyComply connects onboarding verification and ongoing transaction behavior into one continuous risk intelligence model.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white border text-left border-gray-100 shadow-xl rounded-2xl p-8 w-full">
                  <h3 className="text-xl font-bold text-[#0a3f33] mb-6">Our platform enables organizations to:</h3>
                  <ul className="space-y-4 text-[#5a6b67] text-lg">
                    {[
                      "Gain a unified view of customer risk",
                      "Detect suspicious transactions in real time",
                      "Reduce false positives and manual reviews",
                      "Maintain compliance across multiple regulatory environments"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d9ebe5] flex items-center justify-center text-[#0a3f33] mt-0.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="bg-[#f8faf9] rounded-3xl p-10 md:p-16 border border-slate-200/60 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#081a17] mb-6">Who We Serve</h2>
                <p className="text-lg text-[#5a6b67]">
                  UnifyComply supports organizations that onboard customers and process financial transactions across a wide range of industries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Fintech companies and neobanks",
                  "Banks and financial institutions",
                  "Payment processors",
                  "Digital lenders",
                  "Crypto and digital asset platforms",
                  "Marketplaces and embedded finance",
                  "Remittance and cross-border platforms",
                  "Insurance and wealth management"
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-center text-center justify-center hover:border-[#0a3f33]/30 transition-colors">
                    <span className="font-medium text-[#314643]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
