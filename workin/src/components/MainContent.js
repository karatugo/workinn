import React from "react"
import TodoItem from './TodoItem';
import todosData from './todosData'

function MainContent() {

    const todoComponents = todosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
        <main>
            <div className="todo-list" style={{}}>
                {todoComponents}
            </div>
        </main>
    )
}

export default MainContent