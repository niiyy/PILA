import React from 'react'
import { AiFillAlert } from 'react-icons/ai'

import Free from '../../assets/features/free.png'
import Easy from '../../assets/features/easy.png'
import Modern from '../../assets/features/modern.png'

const Features = () => {
  return (
    <section className="features__container">
      <article className="feature">
        <div className="feature__icon">
          <img src={Free} alt="" />
        </div>

        <h2 className="feature__title">Hello world</h2>

        <span className="feature__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          voluptatibus ea ipsam ex, sapiente aut officiis eos ipsa, odit in
          reiciendis consequuntur vitae exercitationem? Mollitia sint sit
          perspiciatis ut id?
        </span>
      </article>
      <div className="separator"></div>
      <article className="feature">
        <div className="feature__icon">
          <img src={Easy} alt="" />
        </div>

        <h2 className="feature__title">Hello world</h2>

        <span className="feature__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          voluptatibus ea ipsam ex, sapiente aut officiis eos ipsa, odit in
          reiciendis consequuntur vitae exercitationem? Mollitia sint sit
          perspiciatis ut id?
        </span>
      </article>
      <div className="separator"></div>
      <article className="feature">
        <div className="feature__icon">
          <img src={Modern} alt="" />
        </div>

        <h2 className="feature__title">Hello world</h2>

        <span className="feature__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          voluptatibus ea ipsam ex, sapiente aut officiis eos ipsa, odit in
          reiciendis consequuntur vitae exercitationem? Mollitia sint sit
          perspiciatis ut id?
        </span>
      </article>
    </section>
  )
}

export default Features
