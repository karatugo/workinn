import React from "react"
import TodoItem from './TodoItem.js';


function MainContent() {

    return (
        <main>
            <div className="todo-list" style={{ }}>
                <TodoItem item={{ task: "Do this" }}/>
                <TodoItem item={{ task: "Do that" }}/>
                <TodoItem item={{ task: "Do that 2" }}/>
            </div>
        </main>
    )
}

export default MainContent