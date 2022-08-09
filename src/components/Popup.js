function Popup(props) {
  return (
    <div className="popup-container">
      <img className="card-img" src={props.img}></img>
      <p>{props.desc}</p>
      <h3>{props.name}</h3>
    </div>
  );
}
export default Popup;
