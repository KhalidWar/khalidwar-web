import React from "react";

function AppStoreButton(props) {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      onClick={() => props.onClick(props.url)}
    />
  );
}

export default AppStoreButton;
