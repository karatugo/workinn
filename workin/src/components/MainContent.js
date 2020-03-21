import React from "react"

function MainContent(){
    const date = new Date()

    return (
        <main>
            <p>It's currently {date.getHours() %12 } o'clock.</p>
        </main>
    )
}

export default MainContent