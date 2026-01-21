import { ArtificialIntelligenceIcon } from "../components/Icon";
import { TECH_STACK } from "../constants/constants";

export default function AI() {
  return (
    <>
      <div className="text-xl mx-2 underline underline-offset-8 font-bold">
        {TECH_STACK.AI.Heading}
      </div>
      {/* AI */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <ArtificialIntelligenceIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">{TECH_STACK.AI.Title}</h1>
            <p className="py-4 text-md font-bold">{TECH_STACK.AI.Desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
