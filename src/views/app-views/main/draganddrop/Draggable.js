import React from "react";
import { useDrag } from "react-dnd";
import vaseImg from 'assets/png/vase.png';
import tableImg from 'assets/png/table.png';
import chairImg from 'assets/png/chair.png';

const Draggable = ({ data }) => {
  const { _id, id, type, x, y } = data;
  const [{ isDragging }, dragRef] = useDrag({
    type: "box",
    item: { _id, id, type, x, y },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      clientOffset: monitor.getClientOffset()
    })
  });

  const getImageByType = (type) => {
    switch (type) {
      case 'VASE':
        return vaseImg;
      case 'TABLE':
        return tableImg;
      case 'CHAIR':
        return chairImg;
      default:
        return null;
    }
  };

  const blockSideLength = 50;

  const gridStyle = {
    width: blockSideLength,
    height: blockSideLength,
    cursor: 'grab',
    opacity: isDragging ? 0.5 : 1
  };

  const dropStyle = {
    width: blockSideLength,
    height: blockSideLength,
    position: 'absolute',
    top: y - blockSideLength / 2,
    left: x - blockSideLength / 2,
    cursor: 'move',
    opacity: isDragging ? 0.5 : 1
  };

  return (
    !x
      ? <img src={getImageByType(type)} alt={type} ref={dragRef} style={gridStyle} />
      : <img src={getImageByType(type)} alt={type} ref={dragRef} style={dropStyle} />
  );
};

export default Draggable;
