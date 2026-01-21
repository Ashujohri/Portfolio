"use client";

import { EXPERIENCE_SECTION, PROJECT_SECTION } from "../constants/constants";

export default function NumericCard() {
  return (
    <div className="card bg-base-700 m-4">
      <div className="hero bg-gray-600 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.NumericInfo.NumericImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {EXPERIENCE_SECTION.Numeric.CompanyName}
            </h1>
            <p className="py-4 text-md font-bold">
              {EXPERIENCE_SECTION.Numeric.CompanyDesc}
            </p>

            <a
              href={PROJECT_SECTION.NumericInfo.CompanyLink}
              target="_blank"
              rel="noopner noreferrer"
            >
              <button className="btn badge badge-outline m-2">
                {/* <LaunchIcon /> */}
                {PROJECT_SECTION.CODE_HARBOR.CompanyVisit}
              </button>
            </a>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn badge badge-primary"
              onClick={() =>
                (
                  document.getElementById("my_modal_2") as HTMLDialogElement
                )?.showModal()
              }
            >
              {EXPERIENCE_SECTION.Exl.DetailedWork}
            </button>
            <dialog
              id="my_modal_2"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-gray-500 mt-10 w-11/12 max-w-3xl">
                <h3 className="font-bold text-lg mt-3 mb-3">
                  {EXPERIENCE_SECTION.Exl.DetailsTitle}
                </h3>
                <p className="py-1">{EXPERIENCE_SECTION.Numeric.Swicthing}</p>
                <p className="py-1">
                  {EXPERIENCE_SECTION.Numeric.Understanding}
                </p>
                <p className="py-1">{EXPERIENCE_SECTION.Numeric.Stable}</p>
                <p className="py-1">
                  {EXPERIENCE_SECTION.Numeric.SingleSystem}
                </p>
                <p className="py-1"> {EXPERIENCE_SECTION.Numeric.Solid}</p>
                <p className="py-1">
                  {EXPERIENCE_SECTION.Numeric.ApplicationFlow}
                </p>
                <p className="py-1">
                  {" "}
                  {EXPERIENCE_SECTION.Numeric.BuiltConfidence}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-primary">
                      {EXPERIENCE_SECTION.Exl.Close}
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
