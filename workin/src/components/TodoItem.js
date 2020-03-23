import React from "react"

function TodoItem(props) {

    console.log(props);

    return (
        <div className="card form-check">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="form-check-label">{props.item.task}</label>
        </div>
    )
}

export default TodoItem