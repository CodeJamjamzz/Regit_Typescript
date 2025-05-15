import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Navigation.tsx";
import "./Page_CSS/header.css";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";

interface Props {
  title: String;
}

export default function Header({ title }: Props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout title={title} />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
