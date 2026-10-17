import { profiles } from "../theme/profiles";
import ProfileLayout from "../components/layout/ProfileLayout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import FinalCta from "../components/sections/FinalCta";
import Contact from "../components/sections/Contact";

function ProfilePage({ profileId, projects, skills }) {
  const profile = profiles[profileId];

  return (
    <ProfileLayout profileId={profileId}>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills groups={skills} />
      <Projects projects={projects} profileId={profileId} />
      <FinalCta profile={profile} />
      <Contact profile={profile} />
    </ProfileLayout>
  );
}

export default ProfilePage;
