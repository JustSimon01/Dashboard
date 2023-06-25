import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css'
import { Card, Table, Tag, Tooltip, message, Button, Space } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from './Draggable';
import Droppable from './Droppable';

const gridStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: 'lightslategray',
  cursor: 'pointer',
};

const dropContainer = {
  width: '600px',
  height: '500px',
};

const itemsContainer = {
  width: '600px',
};

export const DragAndDropContainer = () => {

  const [elements, setElements] = React.useState([]);

  const handleDrop = (itemId) => {
    setElements([
      ...elements, itemId
    ]);
  };

  useEffect(() => {
    console.log("Array of Elements ", elements)
  }, [elements])

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Card style={itemsContainer} title="Card Title">
          <Space>
            <Draggable data={{ id: 7, content: '000' }} />
            <Draggable data={{ id: 1, content: '111' }} />
            <Draggable data={{ id: 2, content: '222' }} />
            <Draggable data={{ id: 3, content: '333' }} />
          </Space>
        </Card>
        <Droppable style={dropContainer} onDrop={handleDrop}>
          {elements.map((item) => { return <Draggable key={uuidv4()} data={{ id: item.id, content: item.content, x: item.x, y: item.y }} /> }
          )}
        </Droppable>
      </DndProvider>
    </>
  )
}


export default DragAndDropContainer;


