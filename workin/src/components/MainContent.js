import React from "react"
import TodoItem from './TodoItem';
import todosData from './todosData'

class MainContent extends React.Component {


    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

        return (
            <main>
                <div className="todo-list" style={{}}>
                    {todoComponents}
                </div>
            </main >
        )
    }
}

export default MainContent