import { createElement, useEffect, useState } from "react";

export default function Logo() {
  const [logo, setLogo] = useState(
    <img
      width="50"
      src="https://www.okta.com/sites/default/files/media/image/2023-03/Okta_Aura_Black_L.png"
    ></img>
  );
  useEffect(() => {
    var logoElement = createElement("img", {
      src: window.localStorage.getItem("logo"),
      className: "logo",
      style: {
        maxWidth: parseInt(window.localStorage.getItem("logoWidth") || 100),
        maxHeight: parseInt(window.localStorage.getItem("logoHeight") || 50),
      },
    });
    window.localStorage.getItem("logo") && setLogo(logoElement);
  }, []);
  return <>{logo}</>;
}
