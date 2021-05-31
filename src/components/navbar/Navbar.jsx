import "./navbar.scss"

export default function Navbar({openMenu, setOpenMenu}) {
  return (
    <nav className={"navbar " + (openMenu && "active")}>
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <a href="#">Rafał Piech</a>
        </div>
        <div className="navbar__hamburger" onClick={() => setOpenMenu(!openMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}