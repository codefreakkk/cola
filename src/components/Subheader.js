import React from 'react'
import '../css/sidebar.css'

function Subheader({title, subtitle}) {
  return (
    <div className='title'>
        <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">{title}</h1>


        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

          <li class="breadcrumb-item text-muted">
            <a href="../../index.html" class="text-muted text-hover-primary">Home</a>
          </li>


          <li class="breadcrumb-item">
            <span class="bullet bg-gray-400 w-5px h-2px"></span>
          </li>


          <li class="breadcrumb-item text-muted">{subtitle}</li>

        </ul>
      </div>
  )
}

export default Subheader