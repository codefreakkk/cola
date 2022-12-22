import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css';
import back from '../images/back.png';
import Subheader from './Subheader';

function View() {
  return (
    <div className='write_mail'>
      <Subheader title={'Reply'} subtitle={'Inbox'} />
      <div className='reply'>

        <div class="card-body">

          <div class="d-flex flex-wrap gap-2 justify-content-between mb-8">
            <div class="d-flex align-items-center flex-wrap gap-2">

              <h2 class="fw-semibold me-3 my-1">Trip Reminder. Thank you for flying with us!</h2>


              <span class="badge badge-light-primary my-1 me-2">inbox</span>
              <span class="badge badge-light-danger my-1">important</span>

            </div>
            <div class="d-flex">

              {/* close button */}
              <NavLink to='/'>
                <div class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-bs-toggle="tooltip" data-bs-placement="top">
                  <span class="svg-icon svg-icon-2 m-0">
                    <img src={back} alt="back" height="17" />
                  </span>
                </div>
              </NavLink>


            </div>
          </div>


          <div data-kt-inbox-message="message_wrapper">

            <div class="d-flex flex-wrap gap-2 flex-stack cursor-pointer" data-kt-inbox-message="header">

              <div class="d-flex align-items-center">

                <div class="symbol symbol-50 me-4">
                  <span class="symbol-label">ag bai</span>
                </div>

                <div class="pe-5">

                  <div class="d-flex align-items-center flex-wrap gap-1">
                    <a href="#" class="fw-bold text-dark text-hover-primary">Emma Smith</a>

                    <span class="svg-icon svg-icon-7 svg-icon-success mx-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <circle fill="currentColor" cx="12" cy="12" r="8" />
                      </svg>
                    </span>

                    <span class="text-muted fw-bold">1 day ago</span>
                  </div>


                  <div data-kt-inbox-message="details">
                    <span class="text-muted fw-semibold">to me</span>

                    <a href="#" class="me-1" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start">
                    </a>
                  </div>


                  <div class="text-muted mw-450px d-none" style={{fontWeight: 'light'}}>With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part....</div>

                </div>
              </div>


              <div class="d-flex align-items-center flex-wrap gap-2">

                <span class="fw-semibold text-muted text-end me-3">25 Oct 2022, 11:30 am</span>

                <div class="d-flex">

                  <a href="#" class="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Star">

                    <span class="svg-icon svg-icon-2 m-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                      </svg>
                    </span>

                  </a>

                  <a href="#" class="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Reply">

                    <span class="svg-icon svg-icon-2 m-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="currentColor" />
                        <path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="currentColor" />
                        <path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="currentColor" />
                      </svg>
                    </span>

                  </a>


                </div>
              </div>

            </div>


            <div class="collapse fade show" data-kt-inbox-message="message">
              <div class="py-5">
                <p>Hi Bob,</p>
                <p>With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.</p>
                <p>Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang</p>
                <p>Best regards,</p>
                <p class="mb-0">Jason Muller</p>
              </div>
            </div>

          </div>


          <div class="separator my-6"></div>




        </div>

      </div>
    </div>
  )
}

export default View