"use client";

import { EXPERIENCE_SECTION, PROJECT_SECTION } from "../constants/constants";

export default function AuraCard() {
  return (
    <div className="card bg-base-700 m-4">
      <div className="hero bg-gray-600 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.NCMRWF.AuraImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {EXPERIENCE_SECTION.Aura.CompanyName}
            </h1>
            <p className="py-4 text-md font-bold">
              {EXPERIENCE_SECTION.Aura.CompanyDesc}
            </p>
            <a
              href={PROJECT_SECTION.NCMRWF.CompanyLink}
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
                  document.getElementById("my_modal_1") as HTMLDialogElement
                )?.showModal()
              }
            >
              {EXPERIENCE_SECTION.Exl.DetailedWork}
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-gray-500 mt-10 w-11/12 max-w-3xl">
                <h3 className="font-bold text-lg mt-3 mb-3">
                  {EXPERIENCE_SECTION.Exl.DetailsTitle}
                </h3>
                <p className="py-1">{EXPERIENCE_SECTION.Aura.FirstExposure}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Aura.LinuxOs}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Aura.DataArchives}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Aura.ShellScripts}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Aura.Executable}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Aura.BatchProcess}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Aura.LinuxNodes}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Aura.FtpPipeline} </p>
                <p className="py-1">{EXPERIENCE_SECTION.Aura.Forecasting}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Aura.SystemLevel}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Aura.Enterprise}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Aura.Discipline}</p>
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
