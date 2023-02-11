import React from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidV4 } from "uuid";

export default function BoxList() {
  const [boxes, setBoxes] = React.useState([
    {
      id: uuidV4(),
      width: 50,
      height: 50,
      color: "red",
    },
    {
      id: uuidV4(),
      width: 50,
      height: 50,
      color: "blue",
    },
    {
      id: uuidV4(),
      width: 50,
      height: 50,
      color: "black",
    },
    {
      id: uuidV4(),
      width: 50,
      height: 50,
      color: "pink",
    },
  ]);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };

  function handleSubmit(newBox) {
    addBox({
      id: uuidV4(),
      width: newBox.width,
      height: newBox.height,
      color: newBox.color,
    });
  }

  function handleDelete(id) {
    setBoxes((boxes) => {
      return boxes.filter((box) => box.id !== id);
    });
  }

  return (
    <>
      <NewBoxForm handleSubmit={handleSubmit} />

      {boxes.map((box) => (
        <Box
          key={uuidV4()}
          width={box.width}
          height={box.height}
          color={box.color}
          handleDelete={() => {
            handleDelete(box.id);
          }}
        />
      ))}
      {console.log(boxes)}
    </>
  );
}
