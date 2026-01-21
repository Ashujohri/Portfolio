import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../components/Icon";
import { HERO_SECTION } from "../constants/constants";

export default function HeroSection() {
  return (
    <div className="hero bg-gray-600 min-h-1/2">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/profile.jpg"
          className="max-w-sm rounded-full shadow-2xl border-4 border-indigo-600"
        />
        <div className="mx-8 my-8">
          <h1 className="text-5xl font-bold">{HERO_SECTION.Name}</h1>
          <p className="text-2xl py-2">{HERO_SECTION.Designation}</p>
          <p className="py-3 text-2xl">{HERO_SECTION.CompanyName}</p>
          <p className="py-3 text-2xl">{HERO_SECTION.CompanyLocation}</p>
          <a
            href={HERO_SECTION.ResumeLink}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">
              <DownloadIcon className="w-6 h-6 text-white" />
              {HERO_SECTION.DownloadResume}
            </button>
          </a>

          <div className="flex flex-row mt-3">
            <a className="mx-3 tooltip" data-tip="+91 8889870969">
              <PhoneIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href={HERO_SECTION.PhoneLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Connect on Whatsapp"
            >
              <WhatsappIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href={HERO_SECTION.MailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip mx-3"
              data-tip={HERO_SECTION.MailId}
            >
              <MailIcon className="w-6 h-6 text-white" />
            </a>

            <a
              href={HERO_SECTION.LinkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="linkedIn"
            >
              <LinkedInIcon className="w-6 h-6 text-white" />
            </a>

            <a
              href={HERO_SECTION.GithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip mx-2"
              data-tip="Github"
            >
              <GithubIcon className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
