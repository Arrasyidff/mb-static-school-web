import React from 'react'
import './coverPage.scss'

function CoverPage({title, coverImage}) {
  return (
    <div className="mb__cover-page bg-fixed"
        style={{ backgroundImage: `
        linear-gradient(43deg, rgba(31, 31, 31, 0.678) 7%, rgba(0, 0, 0, 0.227) 100%), 
        url(${coverImage})` }}
    >
        <h1 className='mb__cover-page--title'>
            {title}
        </h1>
    </div>
  )
}

export default CoverPage