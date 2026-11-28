/**
 * Canonical public profiles for NAP / sameAs consistency.
 * GBP uses the stable Maps CID. Do not replace it with a share.google short link.
 */
export const SOCIAL_PROFILES = {
  linkedInCompany: "https://www.linkedin.com/company/iago-digital",
  linkedInFounder: "https://www.linkedin.com/in/santiagotellier",
  facebook: "https://www.facebook.com/profile.php?id=61595522623553",
  instagram: "https://www.instagram.com/iagodigital.web/",
  /**
   * Stable Maps CID for the iAGO Digital profile.
   * Do not replace this with a share.google short link.
   */
  googleBusinessProfile:
    "https://www.google.com/maps?cid=13561523173257667183",
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
  SOCIAL_PROFILES.googleBusinessProfile,
].filter(Boolean);

export const footerSocialLinks = [
  { label: "LinkedIn", href: SOCIAL_PROFILES.linkedInCompany },
  { label: "Facebook", href: SOCIAL_PROFILES.facebook },
  { label: "Instagram", href: SOCIAL_PROFILES.instagram },
  { label: "Google", href: SOCIAL_PROFILES.googleBusinessProfile },
] as const;

/** Hero order; add entries here (and URLs above) when new networks go live. */
export const heroSocialLinks = [
  { label: "Instagram", href: SOCIAL_PROFILES.instagram },
  { label: "Facebook", href: SOCIAL_PROFILES.facebook },
  { label: "LinkedIn", href: SOCIAL_PROFILES.linkedInCompany },
] as const;

/**
 * Opens the Google review form. This is an action URL, not the Business
 * Profile listing, so it stays out of organization sameAs.
 */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CW9iQFt5NTS8EAE/review";
