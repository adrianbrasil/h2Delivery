import React, { useEffect } from "react";
import api from "../services/api";

export function Menu() {

  useEffect(() => {
    api.get("api").then(function ({data}) {
      console.log(data);
    });

  }, []);

  return (
    <div className="header-menu">
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  );
}