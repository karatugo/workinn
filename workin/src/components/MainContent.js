import React from "react"
import TodoItem from './TodoItem.js';


function MainContent() {

    return (
        <main>
            <div className="todo-list" style={{ }}>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </main>
    )
}

export default MainContent