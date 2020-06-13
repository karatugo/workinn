import React from "react"

function TodoItem(props) {
    return (
        <div className="card form-check">
            <input type="checkbox" className="form-check-input" checked={props.item.completed} />
            <label className="form-check-label">{props.item.text}</label>
        </div>
    )
}

export default TodoItem