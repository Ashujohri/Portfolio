import { EXPERIENCE_SECTION } from "../constants/constants";
import AuraCard from "./AuraCard";
import ExlCard from "./ExlCard";
import NumericCard from "./NumericCard";
import Plus91Card from "./Plus91Card";

export default function Experience() {
  return (
    <div className="px-4 py-4 font-serif">
      <div className="text-4xl mx-2 underline underline-offset-8 font-bold">
        {EXPERIENCE_SECTION.Detailed}
        <span className="m-2">{EXPERIENCE_SECTION.Experience}</span>
      </div>

      {/* Experineces */}
      <ExlCard />
      <Plus91Card />
      <NumericCard />
      <AuraCard />
    </div>
  );
}
