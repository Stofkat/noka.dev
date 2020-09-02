import React from "react";
import "./style.scss";
import Icon, { SIZE } from "../../Icon";


export default function ButtonIcon({ icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="button-icon">
      <Icon icon={icon} size={SIZE.small} />
    </div>
  );
}