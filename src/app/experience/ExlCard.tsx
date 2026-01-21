"use client";

import { EXPERIENCE_SECTION, PROJECT_SECTION } from "../constants/constants";

export default function ExlCard() {
  return (
    <div className="card bg-base-700 m-4">
      <div className="hero bg-gray-600 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.CODE_HARBOR.ExlImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {EXPERIENCE_SECTION.Exl.CompanyName}
            </h1>
            <p className="py-4 text-md font-bold">
              {EXPERIENCE_SECTION.Exl.CompanyDesc}
            </p>
            <a
              href={PROJECT_SECTION.CODE_HARBOR.ExlLink}
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
                  document.getElementById("my_modal_3") as HTMLDialogElement
                )?.showModal()
              }
            >
              {EXPERIENCE_SECTION.Exl.DetailedWork}
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-gray-500 mt-10 w-11/12 max-w-3xl">
                <h3 className="font-bold text-lg mt-3 mb-3">
                  {EXPERIENCE_SECTION.Exl.DetailsTitle}
                </h3>
                <p className="py-1">{EXPERIENCE_SECTION.Exl.Adopting}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Exl.WorkingGraphql}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Exl.SolvingComplex}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Exl.Integrated}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Exl.Strong}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Exl.Monolithic}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Exl.Modern}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Exl.AiSystem} </p>
                <p className="py-1">{EXPERIENCE_SECTION.Exl.CloudNative}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Exl.Leadership}</p>
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
