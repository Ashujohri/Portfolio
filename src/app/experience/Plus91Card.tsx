"use client";

import { EXPERIENCE_SECTION, PROJECT_SECTION } from "../constants/constants";

export default function Plus91Card() {
  return (
    <div className="card bg-base-700 m-4">
      <div className="hero bg-gray-600 rounded-lg mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PROJECT_SECTION.CENTURY.Plus91ImageLink}
            className="max-w-xs rounded-full bg-base-300"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {EXPERIENCE_SECTION.Plus91.CompanyName}
            </h1>
            <p className="py-4 text-md font-bold">
              {EXPERIENCE_SECTION.Plus91.CompanyDesc}
            </p>
            <a
              href={PROJECT_SECTION.CENTURY.Plus91Link}
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
                  document.getElementById("my_modal_4") as HTMLDialogElement
                )?.showModal()
              }
            >
              {EXPERIENCE_SECTION.Exl.DetailedWork}
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box bg-gray-500 mt-10 w-11/12 max-w-3xl">
                <h3 className="font-bold text-lg mt-3 mb-3">
                  {EXPERIENCE_SECTION.Exl.DetailsTitle}
                </h3>
                <p className="py-1">
                  {EXPERIENCE_SECTION.Plus91.HandlingClients}
                </p>
                <p className="py-1">{EXPERIENCE_SECTION.Plus91.ManagingTeam}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Plus91.Solving}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Plus91.Modifying}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.Attendance}</p>
                <p className="py-1">{EXPERIENCE_SECTION.Plus91.Sdk}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.Timezone}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.Cookies} </p>
                <p className="py-1">{EXPERIENCE_SECTION.Plus91.Microservice}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.RealTime}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.FullStack}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.PostgreSql}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.Secure}</p>
                <p className="py-1"> {EXPERIENCE_SECTION.Plus91.Ownership}</p>
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
