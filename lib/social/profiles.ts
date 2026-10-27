/**
 * Canonical public profiles for NAP / sameAs consistency.
 * GBP: do not use share.google short links — they often fail for crawlers.
 * Add the Maps / g.page URL from Google Business Profile when available.
 */
export const SOCIAL_PROFILES = {
  linkedInCompany: "https://www.linkedin.com/company/iago-digital",
  linkedInFounder: "https://www.linkedin.com/in/santiagotellier",
  facebook: "https://www.facebook.com/profile.php?id=61595522623553",
  instagram: "https://www.instagram.com/iagodigital.web/",
  /** Set when you have a stable Maps URL (not share.google/…). */
  googleBusinessProfile: null as string | null,
  youtube: null as string | null,
} as const;

export const FOUNDER = {
  name: "Santiago Tellier",
  jobTitle: "Fundador y CEO",
  linkedIn: SOCIAL_PROFILES.linkedInFounder,
} as const;

/** Organization sameAs — only stable, crawlable profile URLs */
export const organizationSameAs: string[] = [
  SOCIAL_PROFILES.linkedInCompany,
  SOCIAL_PROFILES.facebook,
  SOCIAL_PROFILES.instagram,
].filter(Boolean);

export const footerSocialLinks = [
  { label: "LinkedIn", href: SOCIAL_PROFILES.linkedInCompany },
  { label: "Facebook", href: SOCIAL_PROFILES.facebook },
  { label: "Instagram", href: SOCIAL_PROFILES.instagram },
] as const;

/** Hero order; add entries here (and URLs above) when new networks go live. */
export const heroSocialLinks = [
  { label: "Instagram", href: SOCIAL_PROFILES.instagram },
  { label: "Facebook", href: SOCIAL_PROFILES.facebook },
  { label: "LinkedIn", href: SOCIAL_PROFILES.linkedInCompany },
] as const;
