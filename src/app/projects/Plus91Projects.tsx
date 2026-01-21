"use client";
import LaunchIcon from "@mui/icons-material/Launch";
import { LANGUAGE_AND_OTHERS, PROJECT_SECTION } from "../constants/constants";

export default function Puls91Projects() {
  return (
    <div className="card bg-base-700 m-4">
      {/* Century-Ply */}
      <div className="hero bg-gray-600 min-h-screen p-2 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.CENTURY.Plus91ImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.CENTURY.ProjectTitle}
            </h1>
            <p className="py-4 text-md">
              {PROJECT_SECTION.CENTURY.ProjectDesc}
            </p>

            <a
              href={PROJECT_SECTION.CENTURY.ProjectLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.CENTURY.Plus91Link}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.CODE_HARBOR.CompanyVisit}
              </button>
            </a>

            <ul className="list bg-base-400 rounded-box shadow-md p-1 m-2">
              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.Responsibility}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.TookOwner}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.Analyzed}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.ImprovedApi}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.GeoLocation}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.Assisted}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.Supported}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.SystemBehaviour}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.CENTURY.Debugging}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.Automation}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.TimebaseData}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.Salesforce}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.CENTURY.Redesigning}
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
              {LANGUAGE_AND_OTHERS.PostgresSQL}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Salesforce}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.CronJobs}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Firebase}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.HerokuGitHub}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.HerokuServer}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Redux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ReactNative}
            </div>
            <div className="badge bg-zinc-300 mx-1 mt-2">
              {LANGUAGE_AND_OTHERS.ClientArchitect}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">1 Devloper</div>
          </div>
        </div>
      </div>

      {/* TrueSales LMS */}
      <div className="hero bg-gray-600 min-h-screen p-2 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.TRUESALES.ProjectTitle}
            </h1>
            <p className="py-4 text-md">
              {PROJECT_SECTION.TRUESALES.ProjectDesc}
            </p>

            <p>{PROJECT_SECTION.TRUESALES.ProjectSubDesc}</p>

            <a
              href={PROJECT_SECTION.CENTURY.Plus91Link}
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
                {PROJECT_SECTION.TRUESALES.StateManagement}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.Integrated}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.BuiltAndEnhanced}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.SocketUsed}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.ImplementedCronJob}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.SmoothApi}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.ClientDemos}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.TRUESALES.LmsPlatform}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.Scalable}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.RealTime}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.BackgroundTask}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.CrmSystem}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.TRUESALES.ProductArchitect}
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
              {LANGUAGE_AND_OTHERS.Salesforce}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Socket}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.JWT}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Bootstrap}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.GitHub}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.AWSLinux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Redux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ReactNative}
            </div>
            <div className="badge bg-zinc-300 mx-1 mt-2">
              {LANGUAGE_AND_OTHERS.ClientArchitect}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">2 Devloper</div>
          </div>
        </div>
      </div>

      {/* UPSTEP */}
      <div className="hero bg-gray-600 min-h-screen p-2 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.UPSTEP.ProjectTitle}
            </h1>
            <p className="py-4 text-md">{PROJECT_SECTION.UPSTEP.ProjectDesc}</p>
            <a
              href={PROJECT_SECTION.UPSTEP.ProjectLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.CENTURY.Plus91Link}
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
                {PROJECT_SECTION.UPSTEP.DesignedDevelop}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.RestApi}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.Authorization}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.DatabaseSchema}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.PaymentWorkflow}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.SalesforceApi}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.FrontendFeature}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.ZoomSdk}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.Uat}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.UPSTEP.EdTech}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.BackendHeavy}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.SecureAuth}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.BulkApi}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.Payment}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.UPSTEP.LiveLearning}
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
              {LANGUAGE_AND_OTHERS.Salesforce}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.GitHub}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ZOOM}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Razorpay}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.JWT}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Bootstrap}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.AWSLinux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Redux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.BulkAPIs}
            </div>
            <div className="badge bg-zinc-300 mx-1 mt-2">
              {LANGUAGE_AND_OTHERS.ClientArchitect}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">2 Devloper</div>
          </div>
        </div>
      </div>

      {/* Oil firm management */}
      <div className="hero bg-gray-600 min-h-screen p-2 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-3xl font-bold">
              {PROJECT_SECTION.Valvoline.ProjectTitle}
            </h1>
            <p className="py-4 text-md">
              {PROJECT_SECTION.Valvoline.ProjectDesc}
            </p>
            <a
              href={PROJECT_SECTION.Valvoline.ProjectLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                <LaunchIcon />
                {PROJECT_SECTION.GCU.ProjectVisit}
              </button>
            </a>

            <a
              href={PROJECT_SECTION.CENTURY.Plus91Link}
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
                {PROJECT_SECTION.Valvoline.DevelopedBootstrap}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.DesignedImplented}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.Structures}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.HandledAPI}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.DataValidation}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.ActivelyParticipated}
              </li>

              <li className="text-md opacity-100 tracking-wide underline underline-offset-8 mb-2">
                {PROJECT_SECTION.CODE_HARBOR.KeyLearnings}
              </li>
              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide list-disc">
                {PROJECT_SECTION.Valvoline.MultiPaltform}
              </li>

              <li className="list-row list-disc text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.RelationalDatabase}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.DataDriven}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.Exposure}
              </li>

              <li className="list-row text-sm bg-gray-700 rounded-box shadow-md m-1 tracking-wide">
                {PROJECT_SECTION.Valvoline.TeamBased}
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
              {LANGUAGE_AND_OTHERS.HerokuServer}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.HerokuServer}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Salesforce}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.JWT}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.MaterialUI}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Bootstrap}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.ReactNative}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.Redux}
            </div>
            <div className="badge bg-zinc-300 mx-1">
              {LANGUAGE_AND_OTHERS.WebHooks}
            </div>
            <div className="badge bg-zinc-300 mx-1 mt-2">
              {LANGUAGE_AND_OTHERS.ClientArchitect}
            </div>
            <div className="text-xl opacity-100 tracking-wide underline underline-offset-8 mb-2 mt-3">
              {PROJECT_SECTION.CODE_HARBOR.TeamSize}
            </div>
            <div className="text-md font-serif m-2 p-2">3 Devloper</div>
          </div>
        </div>
      </div>
    </div>
  );
}
