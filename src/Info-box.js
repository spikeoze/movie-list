import React from "react";
import { useGlobalContext } from "./context";
import {  AiOutlineClose  } from "react-icons/ai";
function InfoBox() {
  const { info, showInfoBox, closeBox } = useGlobalContext();

  // console.log(info);
  const { image, name, year, genre, description } = info;

  return (
    <div className={`${showInfoBox ? "info-wrapper show" : "info-wrapper"}`}>
      <div className="info-box">
        <button className="close-btn" onClick={closeBox}>
          < AiOutlineClose  />
        </button>

        <div className="card-content">

          <div className="info-img">
            <img src={image} alt={name} />
          </div>

          <div className="info-text">
            <div className="title">
              <h3>{name}</h3>
            </div>
            <h4>{genre}</h4>
            <h4>{year}</h4>
            <p className="desc">{description}</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default InfoBox;
