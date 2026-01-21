"use client";
import LaunchIcon from "@mui/icons-material/Launch";
import { LANGUAGE_AND_OTHERS, PROJECT_SECTION } from "../constants/constants";

export default function ExlProjects() {
  return (
    <div className="card bg-base-700 m-4">
      {/* EXL Code harbor */}
      <div className="hero bg-gray-600 min-h-screen p-2 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.CODE_HARBOR.ExlImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.CODE_HARBOR.CodeHarborTitle}
            </h1>
            <p className="py-4 text-md font-bold">
              {PROJECT_SECTION.CODE_HARBOR.CodeHarborDesc}
            </p>
            <p className="text-md mb-2">
              {PROJECT_SECTION.CODE_HARBOR.KeyHightLightTitle}
            </p>
            <p className="text-md mb-2">
              {PROJECT_SECTION.CODE_HARBOR.CodeMigration}
            </p>{" "}
            <p className="text-md mb-2">
              {PROJECT_SECTION.CODE_HARBOR.TestingDebug}
            </p>{" "}
            <p className="text-md mb-2">
              {PROJECT_SECTION.CODE_HARBOR.Documentation}
            </p>{" "}
            <p className="text-md mb-2">
              {" "}
              {PROJECT_SECTION.CODE_HARBOR.Optimization}
            </p>{" "}
            <p className="text-md mb-2">
              {" "}
              {PROJECT_SECTION.CODE_HARBOR.Integration}
            </p>
            <p className="text-md mb-2">{PROJECT_SECTION.CODE_HARBOR.Note}</p>
            <a
              href={PROJECT_SECTION.CODE_HARBOR.ExlLink}
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
                {PROJECT_SECTION.CODE_HARBOR.Modern}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Developing}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Designing}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Handling}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Collaborating}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.WorkingFeature}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Reviewing}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.ResponsiveLayouts}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.MobileApp}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.CODE_HARBOR.Agentic}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.LLMInegration}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.AIFirst}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Improving}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CODE_HARBOR.Strengthening}
              </li>
            </ul>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.TypeScript}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.React}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.Python}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.PostgresSQL}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.FASTAPIs}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.Redux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.SSOAuthentication}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.MaterialUI}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.AWS}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.EnterpriseGitHub}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {PROJECT_SECTION.CODE_HARBOR.AgenticAIDriven}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">
              {PROJECT_SECTION.CODE_HARBOR.DesveloperSize}
            </div>
          </div>
        </div>
      </div>

      {/* GCU */}
      <div className="hero bg-gray-600 min-h-screen p-2 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src="https://yt3.googleusercontent.com/rkTrB1uoc9hOFrMyp1uuAPQHFElGbIUFyQRVpsfVGAWYf1DAT7BoZHIqB7Gq870whPDPwDyOHAk=s160-c-k-c0x00ffffff-no-rj"
            className="max-w-xs rounded-full bg-base-300"
          /> */}
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.GCU.GcuTitle}
            </h1>
            <p className="py-4 text-md">{PROJECT_SECTION.GCU.GcuDescription}</p>
            <p className="text-sm mb-2">
              {PROJECT_SECTION.GCU.GcuSubDescription}
            </p>
            <a
              href={PROJECT_SECTION.GCU.GcuLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.CODE_HARBOR.ExlLink}
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
                {PROJECT_SECTION.GCU.FrontendInterface}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ImplementedGraphql}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ManageGlobal}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.UiUx}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ApiContract}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.QaCycle}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ResponsiveLayout}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ReactMobile}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ParticipatedCI}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.GCU.ExpertiseGained}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.ReactTools}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.JavaSpring}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.CrossPlatform}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.EnterpriseDevOps}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.GCU.EducationPlatform}
              </li>
            </ul>

            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.TypeScript}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.React}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Next}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Java}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.GraphQL}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Zustand}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.JWT}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MaterialUI}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.TanStack}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ReactNative}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.AzureDevops}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Microservices}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">
              {PROJECT_SECTION.GCU.DesveloperSize}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
