import { useEffect } from "react";
import { profiles } from "../../theme/profiles";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Seo from "../ui/Seo";

function ProfileLayout({ profileId, children }) {
  const profile = profiles[profileId];

  useEffect(() => {
    document.documentElement.dataset.profile = profileId;
    return () => {
      delete document.documentElement.dataset.profile;
    };
  }, [profileId]);

  return (
    <div className="profile-layout relative min-h-screen">
      <Seo title={profile.seoTitle} description={profile.seoDescription} path={profile.path} />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export default ProfileLayout;
