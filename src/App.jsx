import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PersonalDetails from "./components/PersonalDetails";
import SocialLinkDetails from "./components/SocialLinkDetails";
import WorkDetails from "./components/WorkDetails";
import Education from "./components/Education";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import CertsSkillsInterests from "./components/CertsSkillsInterests";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/social-link-detail" element={<SocialLinkDetails />} />
        <Route path="/work-detail" element={<WorkDetails />} />
        <Route path="/education" element={<Education />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/certification" element={<CertsSkillsInterests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
