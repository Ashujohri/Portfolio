import { GithubIcon, LinkedInIcon, WhatsappIcon } from "./Icon";

export default function Footer() {
  return (
    <div className="flex">
      <footer className="footer sm:footer-horizontal bg-neutral-800 text-base-content p-6 text-white">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Web Designing</a>
          <a className="link link-hover">App Development</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/Ashujohri"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Github"
            >
              <GithubIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-johri/"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="linkedIn"
            >
              <LinkedInIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://wa.me/918889870969"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Connect on Whatsapp"
            >
              <WhatsappIcon className="w-6 h-6 text-white mx-1" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
