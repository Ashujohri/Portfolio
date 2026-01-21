import { PROJECT_SECTION } from "../constants/constants";
import AuraProject from "./AuraProject";
import ExlProjects from "./ExlProjects";
import NumericProjects from "./NumericProjects";
import Puls91Projects from "./Plus91Projects";

export default function Projects() {
  return (
    <div className="px-4 py-4 font-serif">
      {/* Hero Section */}

      <div className="text-4xl underline underline-offset-8 font-bold">
        {PROJECT_SECTION.CODE_HARBOR.ProjectTitle}
      </div>
      <ExlProjects />
      <Puls91Projects />
      <NumericProjects />
      <AuraProject />
    </div>
  );
}
