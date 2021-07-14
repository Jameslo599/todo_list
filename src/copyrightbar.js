import { makeButton } from "./make-items";

//	Houses copyright bar
const container = document.getElementById("copyrightHolder");

//	Generates complete copyright bar
const makeCopyright = () => {
  const copyright = makeButton({
    type: "div",
    id: "copyright",
    className: "clearfix",
  });
  container.appendChild(copyright);

  const copyrightText = makeButton({
    type: "div",
    id: "copyrightText",
    className: "text float left",
  });
  copyright.appendChild(copyrightText);

  const copyrightLinks = makeButton({
    type: "ul",
    id: "links",
    className: "links float right",
  });
  copyright.appendChild(copyrightLinks);

  const gitIcon = makeButton({ type: "li" });
  const gitLink = makeButton({ type: "a" });
  const gitFont = makeButton({ type: "i", className: "fab fa-github-square" });
  gitLink.href = "https://github.com/Jameslo599";
  gitLink.target = "_blank";
  gitLink.rel = "noreferrer noopener";

  gitLink.appendChild(gitFont);
  gitIcon.appendChild(gitLink);
  copyrightLinks.appendChild(gitIcon);
};

export default makeCopyright;
