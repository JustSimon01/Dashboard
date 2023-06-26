import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, Table, Tag, Tooltip, message, Upload, Button, Space } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from './Draggable';
import Droppable from './Droppable';
import handleDownload from 'utils/helpers/jsonDownload';
import items from 'assets/data/items.data.json'
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, setItems } from 'store/slices/itemsSlice';

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
  const dispatch = useDispatch();
  const itemsArray = useSelector((state) => state.items);

  const handleDrop = (itemId) => {
    const updatedItemId = { ...itemId, _id: uuidv4() };
    const updatedElements = itemsArray.filter((element) => element._id !== itemId._id);
    dispatch(setItems([...updatedElements, updatedItemId]));
  };

  const customRequest = ({ file, onSuccess }) => {
    onSuccess('ok');
  };

  const clearElements = () => {
    dispatch(clearItems([]));
  };

  function handleUpload(file) {
    let fileObj = file.originFileObj
    if (fileObj) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonData = JSON.parse(event.target.result);
        dispatch(setItems(jsonData));
      };
      const blob = new Blob([fileObj], { type: fileObj.type });
      reader.readAsText(blob);
    }
  };

  const handleFileDownload = () => {
    handleDownload(itemsArray);
  };

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
              handleUpload(file);
            }}>
              <Button type="primary">Загрузить схему</Button>
            </Upload>

            <Button type="primary" onClick={handleFileDownload}>Выгрузить схему</Button>
            <Button type="primary" onClick={clearElements}>Очистить схему</Button>
          </Space>

        </Space>

        <Droppable style={dropContainer} onDrop={handleDrop}>
          {itemsArray && itemsArray.map((item) => { return <Draggable key={uuidv4()} data={item} /> })}
        </Droppable>
      </DndProvider>
    </>
  );
};

export default DragAndDropContainer;
