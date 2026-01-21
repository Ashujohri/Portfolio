import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="navbar bg-gray-950 font-serif">
      <div className="flex-none">
        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button> */}
      </div>
      <div className="flex-1 m-3">
        <Link href={"/"}>
          <span className="cursor-pointer text-xl">Software Engineer</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-gray-600 rounded-lg">
            <Link href={"/about"}>
              <span className="">About</span>
            </Link>
          </li>
          <li className="hover:bg-gray-600 rounded-lg">
            <Link href={"/projects"}>
              <span>Projects</span>
            </Link>
          </li>
          <li className="hover:bg-gray-600 rounded-lg">
            <Link href={"/experience"}>
              <span>Experience</span>
            </Link>
          </li>
          <li className="hover:bg-gray-600 rounded-lg">
            <Link href={"/techstack"}>
              <span>Tech Stack</span>
            </Link>
          </li>
          <li className="hover:bg-gray-600 rounded-lg">
            <Link href={"/contact"}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
}
