import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import { analyticsProjects } from "./data/analyticsProjects";
import { fullstackProjects } from "./data/fullstackProjects";
import { analyticsSkills, fullstackSkills } from "./data/skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/data-analytics"
        element={
          <ProfilePage
            profileId="analytics"
            projects={analyticsProjects}
            skills={analyticsSkills}
          />
        }
      />
      <Route
        path="/full-stack"
        element={
          <ProfilePage
            profileId="fullstack"
            projects={fullstackProjects}
            skills={fullstackSkills}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
