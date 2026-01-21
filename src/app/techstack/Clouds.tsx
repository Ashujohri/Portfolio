import { AWSIcon, AzureDevIcon } from "../components/Icon";
import { TECH_STACK } from "../constants/constants";

export default function Clouds() {
  return (
    <>
      <div className="text-xl mx-2 underline underline-offset-8 font-bold">
        {TECH_STACK.Clouds.Heading}
      </div>
      {/* AWS */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <AWSIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Clouds.Aws.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Clouds.Aws.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Azure */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <AzureDevIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Clouds.Azure.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Clouds.Azure.Desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
