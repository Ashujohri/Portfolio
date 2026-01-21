import {
  AndroidStudioIcon,
  PostmanIcon,
  SwaggerIcon,
} from "../components/Icon";
import { TECH_STACK } from "../constants/constants";

export default function APIAndDoc() {
  return (
    <>
      <div className="text-xl mx-2 underline underline-offset-8 font-bold">
        {TECH_STACK.ApiAndDoc.Heading}
      </div>
      {/* Postman */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <PostmanIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.ApiAndDoc.Postman.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.ApiAndDoc.Postman.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Swagger */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <SwaggerIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.ApiAndDoc.Swagger.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.ApiAndDoc.Swagger.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* AndroidStuido */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <AndroidStudioIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.ApiAndDoc.AndroidStudio.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.ApiAndDoc.AndroidStudio.Desc}
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <AndroidStudioIcon className="w-[100px] h-[100px] rounded-full bg-base-400" /> */}
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.ApiAndDoc.OtherUtilities.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.ApiAndDoc.OtherUtilities.Desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
