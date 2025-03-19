import { IconName } from "src/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  FACEBOOK = "Facebook",
  X = "X",
  LINKEDIN = "LinkedIn",
  TIKTOK = "TikTok",
  MEDIUM = "Medium",
}

type TSocialInfo = {
  icon: IconName;
  link: string;
  fathomEventName: string;
};

export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "https://www.instagram.com/Bolt.new",
    fathomEventName: "Social: Instagram icon clicked",
  },
  [SocialPlatforms.X]: {
    icon: "x",
    link: "https://www.x.com/Bolt.new",
    fathomEventName: "Social: X icon clicked",
  },
  [SocialPlatforms.FACEBOOK]: {
    icon: "facebook",
    link: "https://www.facebook.com/Bolt.new/",
    fathomEventName: "Social: Facebook icon clicked",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/Boltnew",
    fathomEventName: "Social: LinkedIn icon clicked",
  },
  [SocialPlatforms.TIKTOK]: {
    icon: "tiktok",
    link: "https://www.tiktok.com/@Bolt.new",
    fathomEventName: "Social: TikTok icon clicked",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "https://Bolt.new.medium.com/",
    fathomEventName: "Social: Medium icon clicked",
  },
};
