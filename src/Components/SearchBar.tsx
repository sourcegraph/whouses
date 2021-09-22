import { useState } from "react";
import { url1, version } from "./Helpers";

export default function SearchBar() {
  const [npmPackage, setNpmPackage] = useState("");
  const [copied, setCopied] = useState(false);
  const sgURL = url1 + npmPackage + version;
  const whousesURL = 'https://whouses.netlify.app/'+npmPackage

  // Submit on Enter
  const enterPressed = (e: any) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      window.location.href = sgURL;
      return null;
    }
  };
  const buttonClicked = () => {
    if (npmPackage) {
      window.location.href = sgURL;
      return null;
    }
  };
  const linkCopied = () => {
    if (npmPackage) {
      navigator.clipboard.writeText(whousesURL)
      setCopied(prevCheck => !prevCheck);
      return null;
    }
  };

  return (
    <div className="search">
      <h1 className="header">
        Find out what awesome you've started with{" "}
        <a href="https://sourcegraph.com/search">
          <img
            alt="sourcegraph-logo"
            src="https://github.com/sourcegraph/sourcegraph/blob/main/ui/assets/img/favicon.png?raw=true"
            className="footer-logo App-logo"
          />
        </a>
        <a className="header-link" href="https://sourcegraph.com/search">
          Sourcegraph
        </a>
      </h1>
      <input
        type="text"
        autoFocus
        className="bar"
        placeholder="enter npm package name"
        onChange={(e) => {
          setNpmPackage(e.target.value);
        }}
        onKeyDown={(e) => enterPressed(e)}
      />
      <button className="btn" type="submit" onClick={buttonClicked}>
        Find Out!
      </button>
      {npmPackage && !copied && (
        <p className="tips" onClick={() => {linkCopied()}}>
          Or visit https://whouses.netlify.app/{npmPackage}
        </p>
      )}
      {copied && (<p className="tips" onClick={() => {linkCopied()}}>Link Copied!</p>)}
    </div>
  );
}
