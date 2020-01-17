import React, {useEffect, useState} from 'react';
// import { DragDropContext, Draggable } from 'react-beautiful-dnd';

import api from './services/api';

import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';
import Trashcan from './components/Trashcan/index';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/Devs');
      
      setDevs(response.data);
    }

    loadDevs();
  }, [])

  async function handleSubmitDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  // function onDragEnd (result) {
  // }

  return (
      <div id="app">
      {/* <DragDropContext onDragEnd={onDragEnd}>       */}
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleSubmitDev} />
          {/* <Trashcan /> */}
        </aside>
        <main>
          <ul>
            {devs.map((dev, index) => (
              // <Draggable draggableId={dev._id} index={index}>
              //   {(provided) => (
                  <DevItem 
                    // {...provided.draggableProps}
                    // {...provided.dragHandleProps}
                    // innerRef={provided.innerRef}                    
                    key={dev._id} dev={dev}  />
              //   )}
              // </Draggable>
            ))}         
          </ul>
        </main>
      {/* </DragDropContext> */}
    </div>
  );
}

export default App;
