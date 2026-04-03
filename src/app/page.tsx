import Image from "next/image";
import { AboutUsTimeline } from "./AboutUsTimeline";

function PrimaryButton({ label = "Apply Now", href = "#apply" }: { label?: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-block bg-white text-forest text-[20px] font-semibold uppercase tracking-[-0.4px] rounded-[8px] px-6 py-3 text-center hover:bg-cream transition-colors"
    >
      {label}
    </a>
  );
}

function SecondaryButton({ label = "Apply Now", href = "#apply" }: { label?: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-block bg-forest text-cream text-[24px] md:text-[30px] font-semibold uppercase tracking-[-0.6px] rounded-[8px] px-8 py-4 text-center hover:bg-forest/90 transition-colors"
    >
      {label}
    </a>
  );
}

function HowItWorksCard({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-forest rounded-[10px] p-5 md:p-6 relative min-h-[200px] md:min-h-[238px]">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-[56px] h-[56px] md:w-[66px] md:h-[66px] rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={title} width={66} height={66} className="object-cover w-full h-full" />
        </div>
        <p className="text-pink font-semibold text-[16px] md:text-[20px] uppercase tracking-[-0.4px] leading-[1.1]">
          {number}. {title}
        </p>
      </div>
      <p className="text-cream font-medium text-[15px] md:text-[18px] leading-[1.1] tracking-[-0.36px]">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Navbar */}
      <header className="w-full">
        <Image
          src="/images/navbar.png"
          alt="Cha Cha Matcha navigation"
          width={1280}
          height={86}
          className="w-full h-auto"
          priority
        />
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[566px] overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Cha Cha Matcha storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(41,27,0,0.2)]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10 max-w-[1280px] mx-auto">
          <h1 className="text-white text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.28px] mb-4">
            Grow With Us
          </h1>
          <p className="text-white font-medium text-[16px] md:text-[20px] tracking-[-0.4px] leading-[1.4] max-w-[607px] mb-6">
            Cha Cha Matcha was built around a simple idea:
            <br />
            make exceptional matcha part of people&apos;s everyday ritual.
          </p>
          <PrimaryButton />
        </div>
      </section>

      {/* Text Banner */}
      <section className="bg-forest py-6 md:py-8 px-4">
        <p className="text-white text-center font-semibold text-[18px] md:text-[24px] uppercase tracking-[-0.48px] leading-[1.2] max-w-[1041px] mx-auto">
          We&apos;re growing thoughtfully and partnering with operators who care about quality, experience, and long-term brand building.
        </p>
      </section>

      {/* Page Menu */}
      <nav id="page-menu" className="flex justify-center gap-6 md:gap-10 py-6 px-4 flex-wrap">
        {["the experience", "about us", "how it works", "apply today"].map((item) => (
          <a
            key={item}
            href={`#${item.replace(/\s+/g, "-")}`}
            className="text-forest font-semibold text-[16px] md:text-[24px] uppercase tracking-[-0.48px] hover:text-forest/70 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* The Experience */}
      <section id="the-experience" className="max-w-[1280px] mx-auto px-6 md:px-10 pb-16">
        <h2 className="text-forest text-[36px] md:text-[50px] font-bold leading-[1.1] tracking-[-1px] mb-8">
          The Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* Early to Matcha */}
          <div>
            <div className="bg-sage rounded-[16px] overflow-hidden h-[350px] md:h-[427px] mb-4 relative">
              <Image
                src="/images/early-to-matcha.png"
                alt="Early to Matcha"
                fill
                className="object-cover rotate-[-17deg] scale-110"
              />
            </div>
            <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.2] mb-2">
              early to matcha
            </h3>
            <p className="text-text-muted font-medium text-[16px] md:text-[18px] leading-[1.45] tracking-[-0.09px]">
              We introduced premium Japanese matcha to our cafés in 2016 — before it was mainstream. Many of today&apos;s favorite matcha drinks started as experiments behind our counter.
            </p>
          </div>

          {/* The Ritual */}
          <div>
            <div className="bg-sage rounded-[16px] overflow-hidden h-[350px] md:h-[493px] mb-4 relative">
              <Image
                src="/images/the-ritual.png"
                alt="The Ritual"
                fill
                className="object-cover rotate-[9.5deg] scale-110"
              />
            </div>
            <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.2] mb-2">
              the ritual
            </h3>
            <p className="text-text-muted font-medium text-[16px] md:text-[18px] leading-[1.45] tracking-[-0.09px]">
              Cha Cha is built around the idea that daily rituals matter. Matcha isn&apos;t a treat, it&apos;s a habit. We obsess over the details that make people come back day after day.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <div className="bg-sage rounded-[16px] overflow-hidden h-[350px] md:h-[427px] mb-4 relative">
              <Image
                src="/images/our-mission.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.2] mb-2">
              our mission
            </h3>
            <p className="text-text-muted font-medium text-[16px] md:text-[18px] leading-[1.45] tracking-[-0.09px]">
              Our mission is to stay the same: do fewer things, better, and build a brand that earns trust through consistency, craft, and care.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="max-w-[1280px] mx-auto px-6 md:px-10 pb-16">
        <h2 className="text-forest text-[36px] md:text-[50px] font-bold leading-[1.1] tracking-[-1px] mb-8">
          About Us
        </h2>

        <AboutUsTimeline />
      </section>

      {/* Cha Cha Today - Stats */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pb-16">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
          <h2 className="text-forest text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.28px]">
            Cha Cha Today
          </h2>
          <p className="text-text-muted font-medium text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.36px] max-w-[624px] mt-2 md:mt-0">
            What began as a single café has grown into a brand with real reach — built deliberately, one cup at a time.
          </p>
        </div>

        <div className="border-t border-forest/20 pt-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { stat: "10M+", label: "Cups served across our cafés" },
            { stat: "200+", label: "Team members across multiple cities" },
            { stat: "1B+", label: "Organic social impressions driven by community and culture" },
            { stat: "10+", label: "Years building, refining, and growing the brand" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="text-forest text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.28px]">
                {stat}
              </p>
              <p className="text-text-muted font-medium text-[14px] md:text-[18px] leading-[1.3] tracking-[-0.36px] mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-[1280px] mx-auto px-6 md:px-10 pb-16">
        {/* Header */}
        <div className="bg-pink rounded-[10px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <h2 className="text-cream text-[36px] md:text-[50px] font-bold leading-[1.1] tracking-[-1px]">
            How It Works
          </h2>
          <p className="text-white font-medium text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.36px] max-w-[498px]">
            We grow deliberately. Our process is designed to ensure alignment — on values, execution, and long-term vision.
          </p>
          <PrimaryButton />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HowItWorksCard
            number="1"
            title="Introduction to Cha Cha"
            description="It starts with an application. We review each one carefully to understand your background, experience, and why Cha Cha resonates with you. If there's a strong fit, our team will reach out to begin the conversation."
            image="/images/step-1.png"
          />
          <HowItWorksCard
            number="2"
            title="Introductory Conversation"
            description="This is a mutual introduction. We take time to learn about you, your market, and how you think about operating a business — and we'll walk you through Cha Cha's approach, expectations, and growth plans."
            image="/images/step-2.png"
          />
          <HowItWorksCard
            number="3"
            title="Location & Market Alignment"
            description="Our team works closely with partners on market selection and site strategy. We prioritize locations that support repeat daily visits and long-term brand health, not just short-term traffic."
            image="/images/step-3.png"
          />
          <HowItWorksCard
            number="4"
            title="Onboarding & Training"
            description="Once approved, we guide you through onboarding — from training and systems to store design and operations. You'll be supported throughout the process with clear tools, resources, and direct access to our team."
            image="/images/step-4.png"
          />
          <HowItWorksCard
            number="5"
            title="Build-Out & Preparation"
            description="We collaborate closely during build-out and pre-opening to ensure every detail reflects the Cha Cha experience — from layout and flow to staffing and opening readiness."
            image="/images/step-5.png"
          />
          <HowItWorksCard
            number="6"
            title="Opening & Ongoing Support"
            description="When your café opens, our partnership continues. We provide ongoing support across operations, marketing, and brand standards to help you build a strong, sustainable business."
            image="/images/step-6.png"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pb-8">
        {/* Map Tabs */}
        <div className="flex gap-6 mb-4 justify-center md:justify-end">
          {["USA", "Canada", "International"].map((tab) => (
            <button
              key={tab}
              className="text-forest font-semibold text-[18px] md:text-[24px] uppercase tracking-[-0.48px] hover:text-forest/70 transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Map Image */}
          <div className="flex-1 w-full">
            <Image
              src="/images/canada-map.png"
              alt="Cha Cha Matcha locations map"
              width={750}
              height={584}
              className="w-full h-auto"
            />
          </div>

          {/* Map Stats */}
          <div className="bg-pink-light rounded-[15px] p-8 w-full md:w-[380px] shrink-0">
            <div className="space-y-4">
              <div>
                <p className="text-forest text-[64px] font-bold leading-[1.1] tracking-[-1.28px]">4</p>
                <p className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1]">
                  store count
                </p>
              </div>
              <div>
                <p className="text-forest text-[64px] font-bold leading-[1.1] tracking-[-1.28px]">4</p>
                <p className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1]">
                  provinces
                </p>
              </div>
              <div>
                <p className="text-forest text-[64px] font-bold leading-[1.1] tracking-[-1.28px]">2</p>
                <p className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1]">
                  countries
                </p>
              </div>
            </div>

            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-forest inline-block" />
                <span className="text-text-muted font-medium text-[16px] md:text-[18px] uppercase tracking-[-0.36px]">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-pink inline-block" />
                <span className="text-text-muted font-medium text-[16px] md:text-[18px] uppercase tracking-[-0.36px]">Unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <div className="flex justify-center pb-16">
        <SecondaryButton />
      </div>

      {/* Become a Partner */}
      <section id="apply-today" className="bg-pink-light px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-forest text-[40px] md:text-[50px] font-bold leading-[1.1] tracking-[-1px] mb-10">
              Become a Partner with Cha Cha
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1] mb-3">
                  U.S. franchise opportunities
                </h3>
                <PrimaryButton />
              </div>

              <div>
                <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1] mb-3">
                  international licensing
                </h3>
                <PrimaryButton />
              </div>

              <div>
                <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1] mb-3">
                  operational stores / conversions
                </h3>
                <PrimaryButton />
              </div>
            </div>
          </div>

          {/* Partner Image */}
          <div className="w-full md:w-[471px] h-[400px] md:h-[680px] rounded-[10px] overflow-hidden shrink-0">
            <Image
              src="/images/partner-image.png"
              alt="Cha Cha Matcha partner"
              width={471}
              height={680}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        <Image
          src="/images/footer-bg.jpg"
          alt="Cha Cha Matcha footer"
          width={1280}
          height={627}
          className="w-full h-auto"
        />
      </footer>
    </div>
  );
}
