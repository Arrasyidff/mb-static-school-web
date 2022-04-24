import React from 'react'
import './mi.scss'
import mi from '../../assets/images/mi.jpg'
import { CoverPage, ItemGrid } from '../../components'

function Mi() {
  const items = [
    {
      desc: 'English CLub'
    },
    {
      desc: 'Iqra'
    },
    {
      desc: 'Seni Rupa'
    },
    {
      desc: 'Seni Tari'
    },
    {
      desc: 'Seni Musik, (Gitar, Drum)'
    },
    {
      desc: 'Klub Matematika'
    },
    {
      desc: 'Taekwondo'
    },
    {
      desc: 'Pramuka'
    },
    {
      desc: 'Klub Sains'
    }
  ]
  const curriculums = [
    {
      desc: 'Mengacu pada kurikulum nasional dengan berbagai pengayaan'
    },
    {
      desc: 'Penerapan pendidikan karakter setiap hari secara terintegrasi dalam setiap kegiatan'
    },
    {
      desc: 'Menggunakan metode pembelajaran siswa aktif (student active learning)'
    },
    {
      desc: 'Pembelajaran bersifat tematis (integrated learning)'
    },
    {
      desc: 'Pembelajaran disertai dengan praktek langsung atau kunjungan (fieldtrip) yang terkait dengan tema pembelajaran'
    },
    {
      desc: 'Mengaplikasikan metode project-based learning (dalam setiap tema, siswa diberikan project yang mendorongnya untuk mengaplikasikan pengetahuan yang dimiliki)'
    },
    {
      desc: 'Sistem evaluasi menggunakan sistem portofolio yang menilai seluruh aspek belajar siswa'
    }
  ]
  return (
    <div className="mb__mi">
      <CoverPage coverImage={mi} title="MI" />
      <div className="mb__mi-content section__padding">
        <div className="mb__mi-content__container">
          <h1 className="mb__mi-content__container--title">
            Kurikulum MI Karakter
          </h1>
          <div className="mb__mi-content__container-desc">
            {
              curriculums.map((item, idx) => {
                return (
                  <div key={idx} className="mb__mi-content__container-desc__item">
                    <div className="mb__mi-content__container-desc__item__icon">
                      <i class="fas fa-check"></i>
                    </div>
                    <p className="mb__mi-content__container-desc__item--desc">{item.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="mb__mi-content__container">
          <h1 className="mb__mi-content__container--title">
            Ekstrakurikuler
          </h1>
          <div className="mb__mi-content__container-items
            grid
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4"
          >
            {
              items.map((el, idx) => {
                return <ItemGrid desc={el.desc} />
              })
            }
          </div>
          <div className="mb__mi-content__container-items">
            <div className="mb__mi-content__container-items--item">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mi