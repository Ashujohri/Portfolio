import { LANGUAGE_AND_OTHERS, TECH_STACK } from "../constants/constants";

export default function Skills() {
  return (
    <div className="bg-zinc-600 rounded-lg">
      <div className="text-4xl font-bold underline underline-offset-8 p-4">
        {LANGUAGE_AND_OTHERS.Skill}
      </div>
      <div className="flex flex-row justify-between">
        <div className="m-3">
          <div className="text-lg mx-3 my-4">{LANGUAGE_AND_OTHERS.Lang}</div>
          <div className="badge bg-gray-800 text-white mx-1">
            {LANGUAGE_AND_OTHERS.JavaScript}
          </div>
          <div className="badge bg-gray-800 text-white mx-1">
            {LANGUAGE_AND_OTHERS.TypeScript}
          </div>
          <div className="badge bg-gray-800 text-white mx-1">
            {LANGUAGE_AND_OTHERS.Node}
          </div>
          <div className="badge bg-gray-800 text-white mx-1">
            {LANGUAGE_AND_OTHERS.Python}
          </div>
        </div>

        <div className="m-3">
          <div className="text-lg my-4">{LANGUAGE_AND_OTHERS.MobileDev}</div>
          <div className="badge bg-gray-800 text-white mx-1">
            {LANGUAGE_AND_OTHERS.ReactNative}
          </div>
          <div className="badge bg-gray-800 text-white mx-1">
            {LANGUAGE_AND_OTHERS.Flutter}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="m-3">
          <div className="text-lg mx-3 my-4">
            {LANGUAGE_AND_OTHERS.Architecture}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.AgenticModel}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.MicroArchi}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.MultiModel}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.ClientArchitect}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Mvvm}
          </div>
        </div>

        <div className="m-3">
          <div className="text-lg my-4">{LANGUAGE_AND_OTHERS.Tools}</div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.React}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Express}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Socket}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Postman}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Swagger}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Firebase}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.MaterialUI}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.GraphQL}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Redux} & {LANGUAGE_AND_OTHERS.Zustand}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="m-3">
          <div className="text-lg mx-3 my-4">{LANGUAGE_AND_OTHERS.DevOps}</div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.CICD}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.GitHub}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.HerokuServer}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.Ftp}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.AWS}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.AzureDevops}
          </div>
        </div>

        <div className="m-3">
          <div className="text-lg my-4">
            {LANGUAGE_AND_OTHERS.AiINtegration}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.WebSocket}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.WebHooks}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.RealTime}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.LlmInte}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="m-3">
          <div className="text-lg mx-3 my-4">{TECH_STACK.Database.Heading}</div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.MySQL}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.PostgresSQL}
          </div>
          <div className="badge bg-gray-800 text-white mx-1 mb-2">
            {LANGUAGE_AND_OTHERS.MongoDB}
          </div>
        </div>
      </div>
    </div>
  );
}
