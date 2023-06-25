import { Card, Space } from "antd";
import React, { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";

const Droppable = ({ children, onDrop }) => {
  const dropTargetRef = useRef(null);

  const [, dropTarget] = useDrop({
    accept: "box",
    drop(itemId, monitor) {
      const currentClientOffset = monitor.getClientOffset();
      let x = 0;
      let y = 0;
      if (currentClientOffset) {
        const containerRect = dropTargetRef.current.getBoundingClientRect();
        const deltaX = Math.round(currentClientOffset.x - containerRect.left);
        const deltaY = Math.round(currentClientOffset.y - containerRect.top);
        x = deltaX;
        y = deltaY;
      }
      onDrop({ ...itemId, x: x, y: y });
    }
  });



  const gridStyle = {
    width: '600px',
    height: '500px',
  };

  const dropContainer = {
    width: '600px',
    height: '500px',
    position: "relative"
  };

  return (
    <div style={gridStyle} ref={dropTarget(dropTargetRef)}>
      <Card style={dropContainer}>
        <Space wrap='true'>
          {children}
        </Space>
      </Card>

    </div>
  );
};

export default Droppable;
