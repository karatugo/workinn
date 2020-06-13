import React from "react"
import TodoItem from './TodoItem';
import todosData from './todosData'

class MainContent extends React.Component {


    constructor() {
        super()
        this.state = {
            todos: todosData,
            isLoading: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    todos: prevState.todos,
                    isLoading: false

                }
            })
        }, 1500)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoComponents = this.state.todos.map(item =>
            <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />)

        return (
            <main>
                <div className="todo-list" style={{}}>
                    {this.state.isLoading ? <h1>Loading...</h1> : todoComponents}
                </div>
            </main >
        )
    }
}

export default MainContent