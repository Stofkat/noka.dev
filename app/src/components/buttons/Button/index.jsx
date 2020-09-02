import React from "react";
import "./style.scss"

export default function Button({ title, onClick }) {
  return (
    <div
      className="button-main"
      onClick={onClick}>
      <span>{title}</span>
    </div>
  )
}