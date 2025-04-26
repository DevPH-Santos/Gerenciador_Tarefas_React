import { useState } from "react";

function AddTasks({onAddTaskSubmit}) {
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  return (
    <>
      <div className="container">

        <input type="text" placeholder="Titulo da Tarefa" required value={title} onChange={(event) => setTitle(event.target.value)}/>
        <input type="text" placeholder="Descrição da Tarefa" required value={description} onChange={(event) => setDescription(event.target.value)}/>
        
        <button onClick={() => {

          //VERIFICA SE O TITULO E A DESCRIÇÃO ESTÃO PREENCHIDOS
          if(!title.trim() || !description.trim()){
            return alert("Preencha os campos!!")
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="addTask">Adicionar</button>

      </div>
    </>
  );
}

export default AddTasks;
