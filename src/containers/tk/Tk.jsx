import React from 'react'
import './tk.scss'
import mi from '../../assets/images/mi.jpg'
import { CoverPage, ItemGrid } from '../../components'

function Tk() {

  const items = [
    {
      desc: 'Imajinasi'
    },
    {
      desc: 'Rancang Bangun'
    },
    {
      desc: 'Seni & Kreatif'
    },
    {
      desc: 'Eksplorasi'
    },
    {
      desc: 'Persiapan'
    },
    {
      desc: 'Komputer'
    },
    {
      desc: 'Kebun, Ternak, dan Ikan'
    },
    {
      desc: 'Ibadah'
    }
  ]
  return (
    <div className="mb__tk">
      <CoverPage coverImage={mi} title={'TK'} />
      <div className="mb__tk-content section__padding">
        <div className="mb__tk-content__curriculum">
          <h1 className="mb__tk-content__curriculum--title">Kurikulum TK Karakter</h1>
          <p className="mb__tk-content__curriculum--desc">
            Dalam mencapai kompetensi yang diharapkan dapat dikuasai anak pada usianya,
            proses pembelajaran dirancang dalam tema-tema yang menarik dan kontekstual
            bagi anak. Proses pembelajaran juga menjadi semakin bermakna dan menyenangkan
            bagi anak dengan adanya aktifitas-aktifitas yang dapat membantu anak mengoptimalkan
            potensinya. Aktifitas tersebut meliputi:
          </p>
          <div className="mb__tk-content__curriculum-items
            grid
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-4"
          >
            {
              items.map((el, idx) => {
                return <ItemGrid key={idx} desc={el.desc} />
              })
            }
          </div>
          <div className="mb__tk-content__curriculum-items">
            <div className="mb__tk-content__curriculum-items--item">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tk