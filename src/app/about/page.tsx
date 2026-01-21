import { ABOUT_SECTION } from "../constants/constants";
import IconComponent from "./IconsComponet";

export default function About() {
  return (
    <div className="font-serif">
      {/* Over all Details */}
      <div className="text-4xl font-bold mt-4 mb-4 mx-4 underline underline-offset-8">
        {ABOUT_SECTION.Title}
      </div>
      <div className="mt-6 mx-6 px-3 py-3 text-md">
        {ABOUT_SECTION.Description}
      </div>
      <div className="flex flex-row flex-wrap gap-24 mx-4 mt-4 px-4">
        <IconComponent />
      </div>
      {/* <div className="divider divider-neutral" /> */}
      <div className="text-4xl font-bold mx-4 mt-4 mb-2 underline underline-offset-8">
        {ABOUT_SECTION.QualificationTitle}
      </div>
      <div className="flex justify-between p-4">
        {/* Image Section Internship & MERN stack course */}
        <div className="">
          <div className="card bg-gray-700 w-75 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{ABOUT_SECTION.CourseTitle}</h2>
              <span className="text-sm">{ABOUT_SECTION.CourseName}</span>
              <p>{ABOUT_SECTION.InistitueName}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {ABOUT_SECTION.StartingYear}
                </div>
                <a
                  href={ABOUT_SECTION.NumericCertiLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn badge badge-outline">
                    {ABOUT_SECTION.DownloadTitle}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="card bg-gray-700 w-75 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{ABOUT_SECTION.AuraInternship}</h2>
              <span className="text-sm">{ABOUT_SECTION.CorporateTraining}</span>
              <p>{ABOUT_SECTION.AuraName}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {ABOUT_SECTION.AuraYear}
                </div>
                <a
                  href={ABOUT_SECTION.AuraLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn badge badge-outline">
                    {ABOUT_SECTION.DownloadTitle}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Details */}
        <div className="p-2">
          <div className="card bg-gray-700 w-75 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{ABOUT_SECTION.Mca}</h2>
              <span className="text-sm">{ABOUT_SECTION.McaName}</span>
              <p>{ABOUT_SECTION.McaCollegeName}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {ABOUT_SECTION.McaStartYear}
                </div>
                <div className="badge badge-outline">
                  {ABOUT_SECTION.McaEndYear}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="card bg-gray-700 w-75 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{ABOUT_SECTION.Bca}</h2>
              <span className="text-sm">{ABOUT_SECTION.BcaName}</span>
              <p>
                {ABOUT_SECTION.BcaCollegeName}
                <span>{ABOUT_SECTION.BcaAdd}</span>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {ABOUT_SECTION.BcaStartYear}
                </div>
                <div className="badge badge-outline">
                  {ABOUT_SECTION.BcaEndYear}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
