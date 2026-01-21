"use client";
import LaunchIcon from "@mui/icons-material/Launch";
import { LANGUAGE_AND_OTHERS, PROJECT_SECTION } from "../constants/constants";

export default function AuraProject() {
  return (
    <div className="card bg-base-700 m-4">
      <div className="hero bg-gray-600 rounded-lg mt-3 min-h-screen p-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.NCMRWF.AuraImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.NCMRWF.ProjectTitle}
            </h1>
            <p className="py-4 text-md">
              {PROJECT_SECTION.NCMRWF.ProjectHeader}
            </p>
            <p className="text-sm mb-2">
              {PROJECT_SECTION.NCMRWF.ProjectSubHeader}
            </p>
            <a
              href={PROJECT_SECTION.NCMRWF.ProjectLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.NCMRWF.CompanyLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.CODE_HARBOR.CompanyVisit}
              </button>
            </a>

            <ul className="list bg-base-400 rounded-box shadow-md p-2 m-2">
              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.Responsibility}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.JobsRuns}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.LinuxBased}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.ImdPune}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.Reporting}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.NCMRWF.Command}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.Automation}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.RealWorldData}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NCMRWF.Mentors}
              </li>
            </ul>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Linux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ShellScripting}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Python}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Php}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Ftp}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Mvvm}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MultiModel}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">13 Devloper</div>
          </div>
        </div>
      </div>
    </div>
  );
}
