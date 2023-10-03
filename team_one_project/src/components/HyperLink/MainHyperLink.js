import "../../App.css";
// import UniTaskLogo_new from "../images/UniTaskLOGO.PNG";
import UniTaskLogo_old from "../../images/Logo_old.PNG";

import LoginSignup from "../../pages/LoginSignup";
import { Link } from "react-router-dom";

export function MainHyperLink() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={UniTaskLogo_old} className="App-logo" alt="logo" />
        <pre></pre>
        <a
          className="App-link"
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma Link
        </a>
        <pre></pre>
        <a
          className="App-link"
          href="https://www.google.com/slides"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powerpoint Link
        </a>
        <pre></pre>
        <a
          className="App-link"
          href="https://docs.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GoogleDoc Link
        </a>
        <Link to="../pages/LoginSignup" element={<LoginSignup />}>
          Login/Register/FindPW
        </Link>
      </header>
    </div>
  );
}