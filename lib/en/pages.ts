export type EnglishSlug =
  | "home"
  | "website-design"
  | "ai-automation"
  | "whatsapp-automation"
  | "seo"
  | "contact";

export type EnglishPage = {
  slug: EnglishSlug;
  path: string;
  /** Matching Spanish path for hreflang when one exists */
  spanishPath?: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  intro: string;
  /** Research hypotheses — not verified volumes */
  keywordHypotheses: string[];
  whoFor: string[];
  problems: { title: string; detail: string }[];
  outcomes: string[];
  includes: string[];
  note?: string;
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

/**
 * English pages are written for international / US-facing search intent.
 * They are not mechanical translations of the Spanish Honduras pages.
 */
export const englishPages: EnglishPage[] = [
  {
    slug: "home",
    path: "/en",
    spanishPath: "/",
    navLabel: "Home",
    title: "iAGO Digital — Web, SEO & AI automation",
    eyebrow: "Digital agency · Central America & beyond",
    headline: "Websites, SEO, and AI workflows that turn attention into inquiries",
    description:
      "iAGO Digital builds business websites, SEO foundations, and AI automations for companies that need clearer conversion paths — based in Honduras, working across Central America, LatAm, and the US.",
    intro:
      "If you are evaluating an agency for a business site, organic visibility, or lead automation, this English hub is for you. Spanish remains our primary market presence in Honduras; English pages explain how we work with international and bilingual teams without copying local Spanish messaging word-for-word.",
    keywordHypotheses: [
      "digital agency Central America",
      "website design for business",
      "AI automation for small business",
      "WhatsApp lead automation",
    ],
    whoFor: [
      "US or remote teams hiring a Central America–based digital partner",
      "Bilingual businesses that need English project communication",
      "Companies that already sell via chat or social and need a serious web channel",
      "Operators who want SEO and automation after the site ships",
    ],
    problems: [
      {
        title: "A pretty site that does not convert",
        detail:
          "We structure message, proof, and CTAs so a visitor knows what you do and how to contact you.",
      },
      {
        title: "Leads dying in inboxes",
        detail:
          "Optional AI / WhatsApp workflows qualify and route inquiries so humans focus on warm conversations.",
      },
      {
        title: "SEO promised as magic rankings",
        detail:
          "We separate technical fixes from ongoing content and reporting — no guaranteed #1 claims.",
      },
    ],
    outcomes: [
      "A clear offer page structure ready for measurement",
      "Spanish + English discovery paths where they make sense",
      "Honest case studies tied to live work",
    ],
    includes: [
      "Discovery call and scoped proposal",
      "Build on Next.js with modern hosting",
      "Analytics / Search Console when in scope",
      "Optional automation and SEO retainers",
    ],
    note: "Keyword ideas on these pages are hypotheses to validate in Google Search Console and keyword tools — not claimed search volumes.",
    faqs: [
      {
        question: "Do you only work in Honduras?",
        answer:
          "No. We are based in Honduras and serve Central America, LatAm, and US projects. Local Spanish pages target Honduran search; English pages support international intent.",
      },
      {
        question: "Will every Spanish page get an English twin?",
        answer:
          "No. We only publish English when the audience and concerns differ enough to justify a page — not mechanical translation.",
      },
    ],
    related: [
      { label: "Website design", href: "/en/website-design" },
      { label: "AI automation", href: "/en/ai-automation" },
      { label: "SEO", href: "/en/seo" },
      { label: "Contact", href: "/en/contact" },
      { label: "Español", href: "/" },
    ],
  },
  {
    slug: "website-design",
    path: "/en/website-design",
    spanishPath: "/website-design-honduras",
    navLabel: "Website design",
    title: "Business website design & development",
    eyebrow: "Service · Website design",
    headline: "Hire a team that builds business websites that convert",
    description:
      "Business website design and development: clear messaging, mobile performance, and lead paths (forms or WhatsApp) — for companies that need more than a template.",
    intro:
      "International buyers usually search for a partner who can ship a credible site, integrate analytics, and hand off something maintainable. That is different from a Honduran owner searching “páginas web Tegucigalpa.” This page focuses on scope, deliverables, and conversion — not city-spam SEO.",
    keywordHypotheses: [
      "business website design",
      "hire web developer for small business",
      "conversion-focused website agency",
      "Next.js website development",
    ],
    whoFor: [
      "Companies replacing a slow or outdated site",
      "Brands launching a service line that needs a serious URL",
      "Teams that want mobile-first performance and clear CTAs",
      "Operators who may add SEO or automation after launch",
    ],
    problems: [
      {
        title: "Nobody understands the offer in five seconds",
        detail:
          "We rewrite structure and CTAs so the next step is obvious.",
      },
      {
        title: "Desktop-only thinking",
        detail:
          "Most decisions happen on phones. We design and ship mobile-first.",
      },
      {
        title: "Launch with no measurement",
        detail:
          "Analytics and a go-live checklist are part of a proper handoff.",
      },
    ],
    outcomes: [
      "Production site aligned to your offer",
      "On-page SEO foundation",
      "Contact path that matches how you sell",
    ],
    includes: [
      "UX/UI and Next.js development",
      "Key pages per agreed scope",
      "Forms and/or chat links",
      "Initial on-page SEO",
      "Launch and handoff",
    ],
    faqs: [
      {
        question: "Can you work with a US company?",
        answer:
          "Yes. See Vulcanox in our case studies for a Florida-facing corporate site. Communication can be in English.",
      },
      {
        question: "Where are pricing details?",
        answer:
          "Plan pricing lives on /pricing (checkout UI). For custom international scopes, contact us for a quote.",
      },
    ],
    related: [
      { label: "AI automation", href: "/en/ai-automation" },
      { label: "SEO", href: "/en/seo" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Versión en español", href: "/website-design-honduras" },
    ],
  },
  {
    slug: "ai-automation",
    path: "/en/ai-automation",
    spanishPath: "/ai-automation-honduras",
    navLabel: "AI automation",
    title: "AI automation for repetitive business work",
    eyebrow: "Service · AI automation",
    headline: "Automate repetitive work without a reckless chatbot",
    description:
      "AI automation for business workflows: qualify leads, connect tools, and hand off to humans — scoped to a real bottleneck, not a science project.",
    intro:
      "English-language search for “AI automation” often means ops and consulting: Zapier/Make, CRM updates, inbox triage. We start from one expensive bottleneck, define guardrails, and only then add model-powered steps.",
    keywordHypotheses: [
      "AI automation for small business",
      "automate lead qualification",
      "AI workflow consultant",
      "connect WhatsApp to CRM",
    ],
    whoFor: [
      "Small teams drowning in copy-paste between apps",
      "Businesses with leads going cold in chat or email",
      "Operators who want AI with human handoff rules",
    ],
    problems: [
      {
        title: "Everything is manual",
        detail:
          "We map the process and automate the costliest step first.",
      },
      {
        title: "Fear of brand-damaging bots",
        detail:
          "Tone, limits, and escalation to a person are part of the design.",
      },
      {
        title: "Tools that do not talk",
        detail:
          "We connect web, chat, sheets, or CRM with the lightest stack that works.",
      },
    ],
    outcomes: [
      "Faster first response",
      "Leads labeled or routed",
      "Documented process for your team",
    ],
    includes: [
      "Process diagnosis",
      "Flow design and AI rules",
      "Implementation and testing",
      "Short team training",
    ],
    faqs: [
      {
        question: "Is this only WhatsApp?",
        answer:
          "No. WhatsApp is one channel. See the WhatsApp page if chat is the only pain point.",
      },
    ],
    related: [
      { label: "WhatsApp automation", href: "/en/whatsapp-automation" },
      { label: "Website design", href: "/en/website-design" },
      { label: "Versión en español", href: "/ai-automation-honduras" },
    ],
  },
  {
    slug: "whatsapp-automation",
    path: "/en/whatsapp-automation",
    spanishPath: "/whatsapp-automation",
    navLabel: "WhatsApp",
    title: "WhatsApp automation for leads",
    eyebrow: "Service · WhatsApp automation",
    headline: "WhatsApp flows that qualify leads when your team is busy",
    description:
      "WhatsApp automation for lead qualification and appointment-style businesses: first reply, FAQs, routing — with clear limits on what bots should not do.",
    intro:
      "In LatAm and many international SMBs, WhatsApp is the sales desk. English buyers often want API vs app guidance, integration options, and pricing drivers — not a generic “AI chatbot” pitch.",
    keywordHypotheses: [
      "WhatsApp Business automation",
      "WhatsApp lead qualification",
      "WhatsApp API for appointments",
      "automate WhatsApp customer service",
    ],
    whoFor: [
      "Appointment-based businesses with heavy chat volume",
      "Teams with slow or inconsistent first replies",
      "Companies connecting web or CRM to WhatsApp",
    ],
    problems: [
      {
        title: "Messages go unanswered",
        detail: "First-response flow plus alert to the right human.",
      },
      {
        title: "Same questions every day",
        detail: "FAQ automation with a clean exit to a person.",
      },
      {
        title: "No idea which lead is hot",
        detail: "Qualification questions and tags or routes by answer.",
      },
    ],
    outcomes: [
      "Fewer cold leads from delay",
      "Team time on conversations that matter",
      "Optional CRM or sheet sync",
    ],
    includes: [
      "Script / flow design",
      "Tooling suited to volume (app tooling vs official API)",
      "Number integration and scenario tests",
    ],
    faqs: [
      {
        question: "What drives price?",
        answer:
          "Flow complexity, integrations, and whether you need the official API (Meta/provider fees are separate). We quote with that breakdown.",
      },
      {
        question: "What will you not automate?",
        answer:
          "Bulk spam, unsupervised medical/legal advice, or complex closes that need a human.",
      },
    ],
    related: [
      { label: "AI automation", href: "/en/ai-automation" },
      { label: "Contact", href: "/en/contact" },
      { label: "Versión en español", href: "/whatsapp-automation" },
    ],
  },
  {
    slug: "seo",
    path: "/en/seo",
    spanishPath: "/seo-services-honduras",
    navLabel: "SEO",
    title: "SEO services — technical, content, reporting",
    eyebrow: "Service · SEO",
    headline: "SEO with a clear process: technical fixes vs ongoing work",
    description:
      "SEO services: technical foundations, useful pages, and monthly reporting. No magic #1 guarantees — method and measurement instead.",
    intro:
      "English SEO buyers usually want the split between one-time technical work and ongoing content/reporting. We do not invent volume numbers; we align pages to real intents and show Search Console–based priorities.",
    keywordHypotheses: [
      "SEO services for small business",
      "technical SEO audit",
      "SEO reporting agency",
      "AI SEO / GEO",
    ],
    whoFor: [
      "Businesses with a site that barely appears in search",
      "Teams tired of ads-only acquisition",
      "Companies that want AI SEO only after basics work",
    ],
    problems: [
      {
        title: "Search engines do not understand the site",
        detail: "Canonicals, sitemap, indexation, errors, structure.",
      },
      {
        title: "Only a vague homepage",
        detail:
          "Service pages that match how people search — not dozens of thin city clones.",
      },
      {
        title: "No reporting cadence",
        detail: "Search Console + Analytics and a short priority list.",
      },
    ],
    outcomes: [
      "Healthier indexation",
      "Pages aligned to winnable intents",
      "Actionable monthly priorities",
    ],
    includes: [
      "Technical audit and priority fixes",
      "On-page and service architecture",
      "Schema where useful",
      "Reporting on continuous plans",
    ],
    faqs: [
      {
        question: "Do you guarantee rankings?",
        answer:
          "No. We guarantee method, transparency, and correct technical execution.",
      },
      {
        question: "What about AI SEO / GEO?",
        answer:
          "It extends classic SEO with clearer entities and question-led pages. See /ai-seo-honduras for the Spanish deep-dive; English AI SEO copy stays honest about what is measurable.",
      },
    ],
    related: [
      { label: "Website design", href: "/en/website-design" },
      { label: "AI SEO (español)", href: "/ai-seo-honduras" },
      { label: "Versión en español", href: "/seo-services-honduras" },
    ],
  },
  {
    slug: "contact",
    path: "/en/contact",
    spanishPath: "/contact",
    navLabel: "Contact",
    title: "Contact iAGO Digital",
    eyebrow: "Contact",
    headline: "Tell us about the site, SEO, or automation you need",
    description:
      "Request a quote or consultation from iAGO Digital. English-friendly project conversations for web, SEO, and AI automation.",
    intro:
      "Share your business, the channel that hurts most (website, Google, or WhatsApp), and your timeline. We typically reply within 48 hours with a clear next step.",
    keywordHypotheses: [
      "contact digital agency",
      "website quote",
      "AI automation consultation",
    ],
    whoFor: [
      "International or bilingual buyers ready to scope a project",
      "Teams comparing agencies on process and fit",
    ],
    problems: [
      {
        title: "You need a scoped proposal, not a sales maze",
        detail:
          "Use the contact form or WhatsApp. English is fine.",
      },
    ],
    outcomes: [
      "A response with suggested scope or clarifying questions",
      "Links to relevant Spanish or English service pages",
    ],
    includes: [
      "Contact form on /contact (same inbox)",
      "WhatsApp: +504 8980-9800",
      "Email: info@iagodigital.com",
    ],
    faqs: [
      {
        question: "Should I use the Spanish contact page?",
        answer:
          "Either works — same team. This English page exists so international visitors are not forced through Spanish-only framing.",
      },
    ],
    related: [
      { label: "Open contact form", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
      { label: "Español", href: "/contact" },
    ],
  },
];

export function getEnglishPage(slug: string): EnglishPage | undefined {
  return englishPages.find((page) => page.slug === slug);
}

export function getEnglishPageByPath(path: string): EnglishPage | undefined {
  return englishPages.find((page) => page.path === path);
}
