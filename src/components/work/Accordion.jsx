import { useState } from "react";

const Accordion = ({ employer, description }) => {
  const [isOpen, setOpen] = useState(true)

  return (
    <div className="accordion">
      <div className="accordion__item">
        <h3 onClick={() => setOpen(!isOpen)}>
          <button className={"accordion__question " + (isOpen && "open")}>{employer}</button>
        </h3>
        <div className={"accordion__collapse " + (isOpen && "collapse")}>
          <div className="accordion__content">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;