import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Popup from "./Popup";
function Movie(props) {
  const [modal, setModal] = useState(false);

  function popupdetailshandler() {
    setModal(true);
    console.log("something");
  }
  function gettingBackdrop() {
    setModal(false);
    console.log("is it working");
  }
  return (
    <div className="container">
      <img
        src={props.img}
        alt=""
        className="card-img"
        onClick={popupdetailshandler}></img>
      <h3>{props.name}</h3>
      <p>{props.year}</p>
      {modal ? (
        <Popup img={props.img} desc={props.description} name={props.title} />
      ) : null}
      {modal ? <Backdrop onClick={gettingBackdrop} /> : null}
    </div>
  );
}
export default Movie;
