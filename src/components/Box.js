import React from "react";

export default function Box(props) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          backgroundColor: `${props.color}`,
          borderRadius: "5px",
        }}
      ></div>
      <button
        onClick={props.handleDelete}
        style={{
          boxSizing: "border-box",
          marginBottom: "25px",
          marginTop: "5px",
          fontSize: "20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          width: `${props.width}px`,
          height: "30px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
    </div>
  );
}
