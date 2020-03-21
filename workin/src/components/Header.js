import React from "react"

function Header() {
    const date = new Date()
    const hours = date.getHours()
    const firstName = "Karatug Ozan"
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else if (hours >= 17 && hours < 22) {
        timeOfDay = "Evening"
    } else {
        timeOfDay = "Night"
    }

    return (
        <header className="navbar">Good {`${timeOfDay}`}, {`${firstName}`}!</header>
    )
}

export default Header