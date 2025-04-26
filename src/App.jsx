import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";
import {v4} from 'uuid';

import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description:
        "Estudar conceitos bases da linguagem React, fazer 1 projeto básico",
      isCompleted: false,
    },

    {
      id: 2,
      title: "Estudar Python",
      description:
        "Estudar conceitos bases da linguagem Python, fazer 1 projeto básico",
      isCompleted: false,
    }
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>

      <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>

      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
    </>
  );
}

export default App;