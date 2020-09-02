import React from "react";
import "./style.scss";

export default function HeaderTypewriter({ children }) {
  return (
    <div className="container-typewriter">
      <h1 className="typewriter">{children}</h1>
    </div>
  )
}