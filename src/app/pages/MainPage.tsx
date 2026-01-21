import { HERO_SECTION } from "../constants/constants";
import HeroSection from "./HeroSection";

export default function MainPage() {
  return (
    <div className="font-serif p-3 m-3">
      {/* Inrduction Section */}
      <HeroSection />

      <section className="font-bold p-3">
        <p className="text-lg">
          {HERO_SECTION.Intro}
          <span className="divider" />
          <span className="text-lg font-serif">{HERO_SECTION.Expertise}</span>
        </p>
      </section>
      <div className="divider" />
      <span className="font-bold mb-3 p-3">
        {HERO_SECTION.Closing}
        <div>{HERO_SECTION.ContactStatement}</div>
      </span>
    </div>
  );
}
