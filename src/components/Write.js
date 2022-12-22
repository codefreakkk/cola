import React from 'react'
import Subheader from './Subheader'

function Write() {
  return (
    <div className='reply_cont'>
      <Subheader title={'Write'} subtitle={'Inbox'} />
      <div className='write_reply'>

        <form id="kt_inbox_reply_form" class="rounded mt-10">

          <div class="d-block">

            <div class="d-flex align-items-center border-bottom px-8 min-h-50px">

              <div class="text-dark fw-bold w-75px">To:</div>


              <input type="text" class="form-control border-0" name="compose_to" data-kt-inbox-form="tagify" />


            </div>






            <div class="border-bottom">
              <input class="form-control border-0 px-8 min-h-45px" name="compose_subject" placeholder="Subject" />
            </div>


            <div id="kt_inbox_form_editor" class="border-0 h-250px px-3">
              <textarea class="form-control" placeholder="Type your text here" id="mail_comment"></textarea>

            </div>

          </div>


          <div class="d-flex flex-stack flex-wrap gap-2 py-5 ps-8 pe-5 border-top">

            <div class="d-flex align-items-center me-3">

              <div class="btn-group me-4">

                <span class="btn btn-primary fs-bold px-6" data-kt-inbox-form="send">
                  <span class="indicator-label">Send</span>
                  <span class="indicator-progress">Please wait...
                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </span>


              </div>

            </div>
            {/* delete icon */}
            <span class="btn btn-icon btn-sm btn-clean btn-active-light-primary" data-inbox="dismiss" data-toggle="tooltip" title="Dismiss reply">
              <span class="svg-icon svg-icon-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                  <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                  <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                </svg>
              </span>
            </span>

          </div>

        </form>

      </div>
    </div>
  )
}

export default Write