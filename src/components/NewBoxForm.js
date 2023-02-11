import React from "react";

export default function NewBoxForm({ handleSubmit }) {
  const [width, setWidth] = React.useState("50");
  const [height, setHeight] = React.useState("50");
  const [color, setColor] = React.useState("");

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          name="width"
          id="width"
          value={width}
          onChange={handleWidth}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          name="height"
          id="height"
          value={height}
          onChange={handleHeight}
        />
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={handleColor}
        />
        <button
          style={{ marginTop: "10px" }}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit({ width, height, color });
            setColor("");
          }}
        >
          Add a new box!
        </button>
        <div
          style={{
            borderBottom: "5px dashed white",
            marginTop: "15px",
            marginBottom: "15px",
            width: "100%",
            color: "",
          }}
        ></div>
      </form>
    </>
  );
}
