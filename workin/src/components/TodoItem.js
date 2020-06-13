import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="card form-check">
            <input
                type="checkbox"
                className="form-check-input"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label
                style={props.item.completed ? completedStyle : null}
                className="form-check-label">
                {props.item.text}
            </label>
        </div>
    )
}

export default TodoItem