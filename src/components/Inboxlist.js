import React from 'react'
import { NavLink } from 'react-router-dom'

function Inboxlist() {
    return (
        <>
            <tr>
                <td class="ps-9">

                    <div class="form-check form-check-sm form-check-custom form-check-solid mt-3">
                        <input class="form-check-input" type="checkbox" value="1" />
                    </div>

                </td>
                <td class="min-w-10px">

                    <a href="#" class="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Star">

                        <span class="svg-icon svg-icon-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor" />
                            </svg>
                        </span>

                    </a>


                    <a href="#" class="btn btn-icon btn-color-gray-400 btn-sm btn-active-color-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Mark as important">

                        <span class="svg-icon svg-icon-3 mt-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z" fill="currentColor" />
                            </svg>
                        </span>

                    </a>

                </td>

                <td class="w-150px w-md-250px">
                    <a href="reply.html" class="d-flex align-items-center text-dark">

                        <div class="symbol symbol-35px me-3">
                            <div class="symbol-label bg-light-danger">
                                <span class="text-danger">M</span>
                            </div>
                        </div>


                        <span class="fw-semibold">Melody Macy</span>

                    </a>
                </td>


                <td>
                    <div class="text-dark mb-1">

                        <a href="reply.html" class="text-dark">
                            <NavLink to="/view" style={{color : 'black'}}><span class="fw-bold">Digital PPV Customer Confirmation</span></NavLink>
                            <span class="fw-bold d-none d-md-inine">-</span>
                            <span class="d-none d-md-inine text-muted">Thank you for ordering UFC 240 Holloway vs Edgar Alternate camera angles...</span>
                        </a>

                    </div>

                    <div class="badge badge-light-primary">inbox</div>
                    <div class="badge badge-light-warning">task</div>

                </td>


                <td class="w-100px text-end fs-7 pe-9">
                    <span class="fw-semibold">8:30 PM</span>
                </td>

            </tr>
        </>
    )
}

export default Inboxlist