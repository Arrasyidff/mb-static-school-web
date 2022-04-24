import React from 'react'
import './educations.scss'
import { Education } from '../../components'

function Educations() {
    const tkDesc = "Pengalaman belajar yang menyenangkan dan iklim sekolah penuh kehangatan akan mengisi hari-hari di masa emas yang membantu pembentukan karakter anak."
    const miDesc = "Tema pembelajaran dan proyek-proyek kontekstual menjadi alat bagi siswa untuk mencapai kompetensi dan membangun karakter yang diperlukan seumur hidup."
    const mtsDesc = "Masa remaja sebagai masa peralihan menuju kematangan menjadi terarah dengan guru yang mengayomi dan kegiatan yang penuh makna untuk membangun karakter dan kompetensi."
  return (
    <div className="mb__educations section__padding">
        <h1 className="mb__educations--title section__title">Jenjang Pendidikan</h1>
        <div className="mb__educations-items">
            <Education level={'TK'} desc={tkDesc} />
            <Education level={'MI'} desc={miDesc} />
            <Education level={'MTS'} desc={mtsDesc} />
        </div>
    </div>
  )
}

export default Educations