import React from "react"

export default function Hamburger(props) {
    return (
        <div>
            <svg viewBox="0 0 100 84" style={{ fill: props.color }}>
                <rect y="2" width="100" height="18" rx="8"></rect>
                <rect y="34" width="100" height="18" rx="8"></rect>
                <rect y="66" width="100" height="18" rx="8"></rect>
            </svg>
        </div >

    )

}