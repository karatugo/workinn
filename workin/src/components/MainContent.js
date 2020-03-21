import React from "react"

function MainContent() {
    const date = new Date()
    const styles = {
        color: "#FF8C00",
        backgroundColor: "black",
        fontSize: "30px",
    }

    return (
        <main>
            <p style={styles}>It's currently {date.getHours() % 12} o'clock.</p>
        </main>
    )
}

export default MainContent