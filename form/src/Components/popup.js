import React from "react";

const Popup = (props) => {
  const reloadApp = () => window.location.reload();
  return (
    <section className="popup">
      <h2>Your note</h2>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.role}</p>
      <p>{props.message}</p>
      <button onClick={props.backBtn}>Nope, go back </button>
      <button onClick={reloadApp}>Yes, please send! </button>
    </section>
  );
};

export default Popup;
