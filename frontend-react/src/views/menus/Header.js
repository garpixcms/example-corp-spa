import {Link} from "react-router-dom";

const Header = ({menu}) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menu.map((item) => {
        return (
          <li key={item.id} className="nav-item">
            <Link
              className={`nav-link ${item.is_current ? 'active' : ''}`}
              aria-current="page"
              target={item.target_blank ? '_blank' : undefined}
              to={item.get_link}
            >
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export {
  Header
}