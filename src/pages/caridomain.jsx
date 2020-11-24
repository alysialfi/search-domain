import React, { useState, useEffect } from 'react'
import './caridomain.css'

export const Caridomain = () => {

  const [input, setInput] = useState('')
  const [domain, setDomain] = useState('')
  const [display, setDisplay] = useState('')
  const [hasil, setHasil] = useState()
  const [border, setBorder] = useState('2px solid #dddddd')


  const ext = ['net', 'xyz', 'online']

  useEffect(() => {
    cariDomain()
  }, [input])

  const handleInput = (e) => {
    e.preventDefault()
    let val = e.target.value
    setInput(val)
  }

  const cariDomain = () => {

    let extension = input.split('.')[1]
    let dom = input.split('.')[0]
    console.log(extension)

    if (input.length !== 0) {
      let cari = ext.includes(extension)
      console.log(cari)
      if (cari) {
        setTimeout(() => {
          setDisplay('flex')
          setHasil(true)
          console.log('true')
          setBorder('2px solid #dddddd')
        }, 1000);
      }
      else {
        setTimeout(() => {
          setHasil(false)
          setDisplay('flex')
          setDomain(dom)
          setBorder('2px solid #FF5C4E')
        }, 1000);
      }

    } else {
      setDisplay('none')
    }

  }

  return (
    <div className="container">
      <h2>Search Your Domain</h2>
      <div className="container-div-input">
        <div className="div-input">
          {hasil === true ?
            <input className="input-search" placeholder="cari domain" value={input} onChange={handleInput} style={{ border: border }} />
            :
            <input className="input-search" placeholder="cari domain" value={input} onChange={handleInput} style={{ border: border }} />
          }

          <div className="div-search">
            <p>Search</p>
          </div>
        </div>
        {hasil === false ? <h6 style={{ display: display }}>Sorry, domain is'nt available</h6> : <h6 style={{ display: display }}></h6>}
      </div>

      <div className="container-hasil">
        <hr className="pembatas" style={{ display: display }} /><br />

        {hasil === true ?
          <div className="beli">
            <h5 className="h5-available">Domain is available</h5>
            <button type="submit" className="btn-buy">Buy</button>
          </div>
          :
          <>
            <h3 style={{ display: display }}>Recommendation For You</h3><br />
            {ext.map((hasil, id) => (

              <div className="beli" style={{ display: display }}>
                <h5 key={id}>{domain}.{hasil}</h5>
                <button type="submit" className="btn-buy">Buy</button>
              </div>
            ))}
          </>
        }
      </div>

    </div>
  )
}

export default Caridomain