import { Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import PersonalInformation from "./components/PersonalInformation"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education"
import TechnicalSkills from "./components/TechnicalSkills"
import Links from "./components/Links"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <Routes>
        <Route index="/" element={<Homepage />} />
        <Route path="personal-information" element={<PersonalInformation />} />
        <Route path="work-experience" element={<WorkExperience />} />
        <Route path="education" element={<Education />} />
        <Route path="technical-skills" element={<TechnicalSkills />} />
        <Route path="links" element={<Links />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
