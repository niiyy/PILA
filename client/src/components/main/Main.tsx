import CardExample from '../card/components/CardExample'
import Features from '../sections/Features'
import Tip from './components/Tip'

const Main = () => {
  return (
    <main>
      <h1>
        Best tool to manage your <span className="special">Project</span>
      </h1>
      <span className="main__description">
        PILA est un site Web qui aide les individus et les équipes à gérer leurs
        projets. Il fournit une variété d'outils et de fonctionnalités qui
        permettent aux utilisateurs d'organiser des tâches, de fixer des délais,
        de collaborer avec d'autres et de suivre les progrès.
      </span>
      <div className="buttons__wrapper">
        <button className="btn primary">Commencer</button>
      </div>
      <div className="img__wrapper">
        <Tip type="review" />
        <CardExample completed={true} />
        <img
          src="https://media.discordapp.net/attachments/1058102861331955873/1066038017816547368/image.png?width=1920&height=1080"
          alt="hero image"
          className="main__hero__img"
        />
      </div>
      <Features />
    </main>
  )
}

export default Main
