import React from "react";

function Button({buttonName}) {
  const onClickHandler = () => {
    console.log("I am from click handler....");
  };

  return (
    <>
      <button onClick={onClickHandler}>{buttonName}</button>
    </>
  )
}

export default Button
