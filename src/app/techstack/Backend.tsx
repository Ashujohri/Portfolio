import {
  DjangoIcon,
  ExpressIcon,
  GraphQLIcon,
  NodeIcon,
  PythonIcon,
  SocketIcon,
} from "../components/Icon";
import { TECH_STACK } from "../constants/constants";

export default function Frontend() {
  return (
    <>
      <div className="text-xl mx-2 underline underline-offset-8 font-bold">
        {TECH_STACK.Backend.Heading}
      </div>
      {/* Node JS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <NodeIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Backend.Node.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Backend.Node.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* ExpressJS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <ExpressIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Backend.Express.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Backend.Express.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Python */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <PythonIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Backend.Python.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Backend.Python.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Django */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <DjangoIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Backend.Django.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Backend.Django.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* GraphQL */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <GraphQLIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Backend.Graphql.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Backend.Graphql.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Socket.IO */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <SocketIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Backend.Socket.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Backend.Socket.Desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
