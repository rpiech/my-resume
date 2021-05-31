import "./sidebar.scss";

export default function Sidebar({openMenu, setOpenMenu}) {
  return (
    <div className={"sidebar " + (openMenu && "active")}>
      <ul className="sidebar__list">
        <li onClick={() => setOpenMenu(false)}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
        <a href="#about">About me</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#work">Work Experience</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#hobby">Hobbies</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </div>
  )
}