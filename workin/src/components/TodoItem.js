import React from "react"

function TodoItem(props) {
    return (
        <div className="card form-check">
            <input
                type="checkbox"
                className="form-check-input"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label className="form-check-label">{props.item.text}</label>
        </div>
    )
}

export default TodoItem