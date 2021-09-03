import React from "react"

import Menu from "./src/components/menu"

class Navigation extends React.Component {

    render(props) {
        return (
            <>
                <button onClick={() => this.toggleMenu()}>
                    Open Menu
                </button>

                <Menu menuLinks={this.props.menuLinks} ref={el => (this.childMenu = el)} />
            </>
        )
    }

    toggleMenu() {
        this.childMenu.open()
    }
}

export default Navigation