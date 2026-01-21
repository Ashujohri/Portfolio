import {
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../components/Icon";
import { HERO_SECTION } from "../constants/constants";

export default function ContactDetails() {
  return (
    <div className="flex bg-gray-600 rounded-lg p-4">
      <div className="flex-row lg:flex-row-reverse">
        <h1 className="text-4xl font-bold underline underline-offset-8">
          {HERO_SECTION.ContactDetail.Heading}
        </h1>
        <div className="m-3">
          <div className="py-4 text-md font-bold flex flex-row">
            <LocationIcon className="w-[25px] h-[25px] bg-blue-300 rounded-full" />
            <span className="text-center mx-2">
              {HERO_SECTION.ContactDetail.Add}
            </span>
          </div>

          <div className="py-1 text-md font-bold flex flex-row">
            <PhoneIcon className="w-6 h-6 text-white" />
            <span className="text-center mx-2">{HERO_SECTION.MobileNo}</span>
          </div>

          <div className="py-1 text-md font-bold flex flex-row">
            <a
              href={HERO_SECTION.PhoneLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Connect on Whatsapp"
            >
              <WhatsappIcon className="w-6 h-6 text-white mx-1" />
            </a>
            {HERO_SECTION.ChatOnWhatsapp}
          </div>

          <div className="py-1 text-md font-bold flex flex-row">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Email"
            >
              <MailIcon className="w-6 h-6 text-white mx-1" />
            </a>
            {HERO_SECTION.MailId}
          </div>

          <div className="py-1 text-md font-bold flex flex-row">
            <a
              href={HERO_SECTION.LinkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="linkedIn"
            >
              <LinkedInIcon className="w-6 h-6 text-white" />
            </a>
            {HERO_SECTION.ProfileLindein}
          </div>

          <div className="py-1 text-md font-bold flex flex-row">
            <a
              href={HERO_SECTION.GithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Github"
            >
              <GithubIcon className="w-6 h-6 text-white" />
            </a>
            {HERO_SECTION.GithubProfile}
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
        </div>
      </div>
    </div>
  );
}
