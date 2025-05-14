import { Outlet, Link } from "react-router-dom";
import "./Page_CSS/layout.css";
import logo from "./assets/regit_logo.png";

interface Props {
  title: String;
}

export default function Layout({ title }: Props) {
  return (
    <>
      <div className="layout-header">
        <div className="logo">
          <img src={logo} />
          <h1>{title}</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
