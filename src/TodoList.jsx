import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({list,remove})=> {
    return (
        <>
        {list ?.length > 0 ?(
            <ul className="todo-list">
                {list.map((entry,index) =>(
                    <div className="todo">
                        <li key={index}>{entry}</li>
                        <button
                           className="btn btn-danger"
                        onClick={()=>{
                            remove(entry);
                        }}>Delete</button>
                    </div>
                ))}
            </ul>
        ):(
            <div className="empty">
                <p>No task found</p>
            </div>
        )}
        </>
    );
};
export default TodoList;