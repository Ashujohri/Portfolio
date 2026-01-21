"use client";
import LaunchIcon from "@mui/icons-material/Launch";
import { LANGUAGE_AND_OTHERS, PROJECT_SECTION } from "../constants/constants";

export default function NumericProjects() {
  return (
    <div className="card bg-base-700 m-4">
      <div className="hero bg-gray-600 rounded-lg mt-3 min-h-screen p-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.NumericInfo.NumericImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.NumericInfo.ProjectTitle}
            </h1>
            <p className="py-4 text-md">
              {PROJECT_SECTION.NumericInfo.ProjectDesc}
            </p>
            <a
              href={PROJECT_SECTION.NumericInfo.ProjectLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.NumericInfo.CompanyLink}
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
                {PROJECT_SECTION.NumericInfo.FrontenBackend}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.ResponsiveUi}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.BakendApis}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.WebsitePerformance}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.Configuration}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.NumericInfo.MernArchitect}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.RealWorld}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.WritingClean}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.NumericInfo.Collaboration}
              </li>
            </ul>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.JavaScript}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.React}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Node}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MySQL}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.GitHub}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.AWS}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MaterialUI}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.RESTAPIs}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Redux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MultiModel}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">5 Devloper</div>
          </div>
        </div>
      </div>

      {/* Study Metro */}
      <div className="hero bg-gray-600 rounded-lg mt-3 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src="https://media.licdn.com/dms/image/v2/C510BAQEhpBf4J1cqLw/company-logo_200_200/company-logo_200_200/0/1630591819480?e=2147483647&v=beta&t=W90rUVcGxBxump_DdjjgkFhw6wGMzRWEC7MOrPQOm0w"
            className="max-w-xs rounded-full bg-base-300"
          /> */}
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.StudyMetro.ProjectTitle}
            </h1>
            <p className="py-4 text-md">
              {PROJECT_SECTION.StudyMetro.ProjectDesc}
            </p>
            <a
              href={PROJECT_SECTION.StudyMetro.ProjectLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.NumericInfo.CompanyLink}
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
                {PROJECT_SECTION.StudyMetro.RestFulApi}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.Routes}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.ManageDatabase}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.HandleAuth}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.Debugged}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.StudyMetro.BackendArchi}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.ServerSide}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.DatabaseDesign}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.StudyMetro.Scalable}
              </li>
            </ul>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.JavaScript}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.React}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Node}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MySQL}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.GitHub}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.AWSLinux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Bootstrap}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.RESTAPIs}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ContextAPI}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MultiModel}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">8 Devloper</div>
          </div>
        </div>
      </div>
    </div>
  );
}
