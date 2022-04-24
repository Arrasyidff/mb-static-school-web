import React from 'react'
import { CoverPage } from '../../components'
import mi from '../../assets/images/mi.jpg'

function Article() {
    return (
        <div className='mb_container-article section__padding'>
            <CoverPage title={'Artikle & Berita'} coverImage={mi} />
            Coming Soon
        </div>
    )
}

export default Article