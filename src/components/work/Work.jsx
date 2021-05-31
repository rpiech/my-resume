import "./work.scss"
import "./Accordion"
import Accordion from "./Accordion";
import { accordionData } from '../../utils/accordionData'

export default function Work() {
  return (
    <section className="work" id="work">
      <section className="card">
        <div className="card__image">
          <img src="http://ipragapolnoc.pl/static/files/gallery/44/f1acc-praca.png" alt="" />
        </div>
        <div className="card__text">
          <h2>Work Experience</h2>
          {accordionData.map(({employer, description }) => (
            <Accordion employer={employer} description={description} />
          ))}
        </div>
      </section>
    </section>
  )
}