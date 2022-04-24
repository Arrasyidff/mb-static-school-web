import React from 'react'
import { Article } from '../../components'
import './articles.scss'
import { CoverPage } from '../../components'
import mi from '../../assets/images/mi.jpg'

function Articles() {
  return (
    <div className="mb__articles">
      <CoverPage title={"Artikel & Berita"} coverImage={mi} />
      <div className="mb__articles-grid
        section__padding
        grid
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-4"
      >
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}

export default Articles