import React from "react";
import Inboxlist from "./Inboxlist";

function Inbox() {
  return (
    <>
      <div className="inbox_parent">
        <div className="title">
          <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
            Messages
          </h1>

          <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <li class="breadcrumb-item text-muted">
              <a href="../../index.html" class="text-muted text-hover-primary">
                Home
              </a>
            </li>

            <li class="breadcrumb-item">
              <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>

            <li class="breadcrumb-item text-muted">Inbox</li>
          </ul>
        </div>

        <div className="card">
          <div class="card-header align-items-center py-5 gap-2 gap-md-5">
            <div class="d-flex flex-wrap gap-1">
              <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  data-kt-check="true"
                  data-kt-check-target="#kt_inbox_listing .form-check-input"
                  value="1"
                />
              </div>

              <a
                href="#"
                class="btn btn-sm btn-icon btn-clear btn-active-light-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Reload"
              >
                <span class="svg-icon svg-icon-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 20.7259C14.6 21.2259 14.2 21.826 13.7 21.926C13.2 22.026 12.6 22.0259 12.1 22.0259C9.5 22.0259 6.9 21.0259 5 19.1259C1.4 15.5259 1.09998 9.72592 4.29998 5.82592L5.70001 7.22595C3.30001 10.3259 3.59999 14.8259 6.39999 17.7259C8.19999 19.5259 10.8 20.426 13.4 19.926C13.9 19.826 14.4 20.2259 14.5 20.7259ZM18.4 16.8259L19.8 18.2259C22.9 14.3259 22.7 8.52593 19 4.92593C16.7 2.62593 13.5 1.62594 10.3 2.12594C9.79998 2.22594 9.4 2.72595 9.5 3.22595C9.6 3.72595 10.1 4.12594 10.6 4.02594C13.1 3.62594 15.7 4.42595 17.6 6.22595C20.5 9.22595 20.7 13.7259 18.4 16.8259Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M2 3.62592H7C7.6 3.62592 8 4.02592 8 4.62592V9.62589L2 3.62592ZM16 14.4259V19.4259C16 20.0259 16.4 20.4259 17 20.4259H22L16 14.4259Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#"
                class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete"
              >
                <span class="svg-icon svg-icon-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.5"
                      d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.5"
                      d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#"
                class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Mark as read"
              >
                <span class="svg-icon svg-icon-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="7"
                      y="2"
                      width="14"
                      height="16"
                      rx="3"
                      fill="currentColor"
                    />
                    <rect
                      x="3"
                      y="6"
                      width="14"
                      height="16"
                      rx="3"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="d-flex align-items-center position-relative">
                <span class="svg-icon svg-icon-2 position-absolute ms-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="17.0365"
                      y="15.1223"
                      width="8.15546"
                      height="2"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      fill="currentColor"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  data-kt-inbox-listing-filter="search"
                  class="form-control form-control-sm form-control-solid mw-100 min-w-150px min-w-md-200px ps-12"
                  placeholder="Search Inbox"
                />
              </div>
            </div>
          </div>

          {/*  */}
          <div>
            <div class="card-body p-0">
              <table
                class="table table-hover table-row-dashed fs-6 gy-5 my-0"
                id="kt_inbox_listing"
              >
                <thead class="d-none">
                  <tr>
                    <th>Checkbox</th>
                    <th>Actions</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                  <Inboxlist />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;
