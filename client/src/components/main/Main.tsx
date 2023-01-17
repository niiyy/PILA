import React from 'react'

const Main = () => {
  return (
    <main>
      <h1>
        Best tool to manage your <span className="special">Project</span>
      </h1>
      <span className="main__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        earum reprehenderit natus quae, explicabo tempora provident incidunt
        corrupti necessitatibus est iure temporibus dicta cum, ipsa porro
        commodi. Velit, eius facilis.
      </span>
      <div className="buttons__wrapper">
        <button className="btn primary">Commencer</button>
      </div>
      <img
        src="https://media.discordapp.net/attachments/1004099319726616596/1064982699376390164/image.png?width=1213&height=682"
        alt="hero image"
        className="main__hero_img"
      />
    </main>
  )
}

export default Main
