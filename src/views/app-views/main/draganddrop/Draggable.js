import React from "react";
import { useDrag } from "react-dnd";

const Draggable = ({ data }) => {

  const { id, content, x, y } = data;
  const [{ isDragging, clientOffset }, dragRef] = useDrag({
    type: "box",
    item: { id, content, x, y },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      clientOffset: monitor.getClientOffset()
    })
  });

  console.log(clientOffset)

  console.log("element", x, y)


  const gridStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'lightslategray',
    cursor: 'move',
    opacity: isDragging ? 0.5 : 1
  };

  const dropStyle = {
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: y,
    left: x,
    backgroundColor: 'lightslategray',
    cursor: 'move',
    opacity: isDragging ? 0.5 : 1
  };

  return (
    !x && !y
      ? <div style={gridStyle} ref={dragRef}>
        {content}
      </div>
      : <div style={dropStyle} ref={dragRef}>
        {content}
      </div>
  );
};

export default Draggable;
