import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, Table, Tag, Tooltip, message, Upload, Button, Space } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from './Draggable';
import Droppable from './Droppable';
import handleDownload from 'utils/helpers/jsonDownload';
import handleUpload from 'utils/helpers/jsonUpload';
import items from 'assets/data/items.data.json'

const dropContainer = {
  width: '600px',
  height: '500px',
};

const itemsContainer = {
  width: '600px',
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
};

export const DragAndDropContainer = () => {
  const [dragableElements, setdragableElements] = React.useState(items);

  const [elements, setElements] = React.useState([]);

  const handleDrop = (itemId) => {
    setElements((prevElements) => {
      const updatedItemId = { ...itemId, _id: uuidv4() }
      const updatedElements = prevElements.filter((element) => element._id !== itemId._id)
      return [...updatedElements, updatedItemId]
    });
  };

  const customRequest = ({ file, onSuccess }) => {
    onSuccess('ok')
  };

  const clearElements = () => {
    setElements([])
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Space>
          <Card style={itemsContainer} title="Объекты">
            <Space>
              {dragableElements.map((item) => <Draggable key={uuidv4()} data={item} />)}
            </Space>
          </Card>

          <Space direction="vertical">
            <Upload showUploadList={false} customRequest={customRequest} onChange={(info) => {
              const { file } = info;
              handleUpload(file.originFileObj, setElements);
            }}>
              <Button type="primary">Загрузить схему</Button>
            </Upload>

            <Button type="primary" onClick={() => handleDownload(elements)}>Выгрузить схему</Button>
            <Button type="primary" onClick={clearElements}>Очистить схему</Button>
          </Space>

        </Space>

        <Droppable style={dropContainer} onDrop={handleDrop}>
          {elements.map((item) => { return <Draggable key={uuidv4()} data={item} /> }
          )}
        </Droppable>
      </DndProvider>
    </>
  )
}


export default DragAndDropContainer;
