import React, { useState } from 'react'

function Ppdb() {
    let initialForm = {
        name: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        favoriteFood: ''
    }
    const [form, setForm] = useState(initialForm)

    const handleForm = (e) => {
        const value = e.target.value
        const name = e.target.name
        setForm({
            ...form, [name]: value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log('masuk', form)
    }

    return (
        <div className="mb__ppdb section__padding">
            {JSON.stringify(form)}
            <br />
            <form onSubmit={handleSubmitForm}>
                <input type="text" htmlFor="name" name='name'placeholder='name'
                    onChange={(e) => handleForm(e) }
                />
                <select name="favoriteFood" onChange={(e) => handleForm(e)} id="">
                    <option value="Nasi Padang">Nasi Padang</option>
                    <option value="Sate Padang">Sate Padang</option>
                    <option value="Rendang Padang">Rendang Padang</option>
                </select>
                <input onChange={(e) => handleForm(e)} id='Laki' type="radio" name="gender" value="laki" />
                <label htmlFor="Laki">Laki</label>
                <input onChange={(e) => handleForm(e)} id='Perempuan' type="radio" name="gender" value="perempuan" />
                <label htmlFor="Perempuan">Perempuan</label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Ppdb