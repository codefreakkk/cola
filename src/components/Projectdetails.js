import React from "react";
import Projectmembers from "./Projectmembers";
import logo from "../images/logo.png";

function Projectdetails() {
  return (
    <div>
      <div class="card mb-6 mb-xl-9">
        <div class="card-body pt-9 pb-0">
          <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
            <div class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
              <img class="mw-50px mw-lg-75px" src={logo} alt="image" />
            </div>

            <div class="flex-grow-1">
              <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-1">
                    <a
                      href="#"
                      class="text-gray-800 text-hover-primary fs-2 fw-bold me-3"
                    >
                      CRM Dashboard
                    </a>
                    <span class="badge badge-light-success me-auto">
                      In Progress
                    </span>
                  </div>

                  <div class="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">
                    #1 Tool to get started with Web Apps any Kind & size
                  </div>
                </div>

                {/* add target and user */}
                <div class="d-flex mb-4">
                  <a
                    href="#"
                    class="btn btn-sm btn-bg-light btn-active-color-primary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_users_search"
                  >
                    Add User
                  </a>
                  <a
                    href="#"
                    class="btn btn-sm btn-primary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_new_target"
                  >
                    Add Target
                  </a>
                </div>
              </div>

              <div class="d-flex flex-wrap justify-content-start">
                <div class="d-flex flex-wrap">
                  <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div class="d-flex align-items-center">
                      <div class="fs-4 fw-bold">29 Jan, 2022</div>
                    </div>

                    <div class="fw-semibold fs-6 text-gray-400">Due Date</div>
                  </div>

                  <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div class="d-flex align-items-center">
                      <div
                        class="fs-4 fw-bold"
                        data-kt-countup="true"
                        data-kt-countup-value="75"
                      >
                        0
                      </div>
                    </div>

                    <div class="fw-semibold fs-6 text-gray-400">Days left</div>
                  </div>

                  <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div class="d-flex align-items-center">
                      <div
                        class="fs-4 fw-bold"
                        data-kt-countup="true"
                        data-kt-countup-value="15000"
                        data-kt-countup-prefix="$"
                      >
                        0
                      </div>
                    </div>

                    <div class="fw-semibold fs-6 text-gray-400"></div>
                  </div>
                </div>

                {/* project members */}
                <div class="symbol-group symbol-hover mb-3">
                  <Projectmembers />
                  <Projectmembers />
                  <Projectmembers />
                  <Projectmembers />
                  <Projectmembers />
                </div>
              </div>
            </div>
          </div>

          <div class="separator"></div>
        </div>
      </div>
    </div>
  );
}

export default Projectdetails;
