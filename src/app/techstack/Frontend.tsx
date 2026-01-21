import {
  JavascriptIcon,
  MaterialuiIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  SASSIcon,
  TailwindIcon,
  TypeScriptIcon,
  ZustandIcon,
} from "../components/Icon";
import { TECH_STACK } from "../constants/constants";

export default function Frontend() {
  return (
    <>
      <div className="text-xl mx-2 underline underline-offset-8 font-bold">
        {TECH_STACK.Frontend.Heading}
      </div>
      {/* React JS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <ReactIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.React.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.React.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* NextJS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <NextJSIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.Next.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.Next.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* JavaScript */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <JavascriptIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.JavaScript.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.JavaScript.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* TypeScript */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <TypeScriptIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.TypeScript.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.TypeScript.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Redux */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <ReduxIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.Redux.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.Redux.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Zustand */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <ZustandIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.Zustand.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.Zustand.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* TanStack Query */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={"/images/tanstack.png"}
            className="w-[100px] h-[100px] rounded-full bg-base-400"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.TanStack.Tile}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.TanStack.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Material-UI */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <MaterialuiIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.Material.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.Material.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* TailwindCSS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <TailwindIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.Tailwind.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.Tailwind.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* SASS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <SASSIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Frontend.Sass.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Frontend.Sass.Desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
