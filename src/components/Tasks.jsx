import { ArrowRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
    console.log(props);
    return (
        <>
            <div className="container">
                <ul>
                    {props.tasks.map((task) => (
                        <li key={task.id}>
                            <button style={{ textDecoration: task.isCompleted ? "line-through" : "none" }} onClick={() => props.onTaskClick(task.id)}>
                                {task.title}
                            </button>
                            <button> <ArrowRightIcon /> </button>
                            <button onClick={() => props.onDeleteTaskClick(task.id)}> <TrashIcon /> </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tasks;