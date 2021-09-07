import React, { useImperativeHandle, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"



const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: #ffffff;
    z-index: 1031;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    visibility: hidden;
    opacity: 0;

    transition: all 0.35s;

    cursor: pointer;
    font-size: 2rem;

    &.open {
        visibility: visible;
        opacity: 1;
    }

    a {
        pointer-events: all;
        color:#AF4B5A
    }
`



const CloseButton = styled.div`
     position: absolute;
     top: 4rem;
     right: 4rem;
`

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    componentDidMount() {
        console.log(this)
    }
    render(props) {
        return (
            <MenuWrapper
                role="button"
                tabIndex={0}
                className={`${this.state.open ? `open` : ""}`}
                onClick={() => this.close()}
                onKeyDown={() => this.close()
                }
            >
                <CloseButton>Close</CloseButton>
                {
                    this.props.menuLinks.map(menuItem => (
                        <Link to={menuItem.link}>{menuItem.name}</Link>
                    )

                    )
                }
            </MenuWrapper >
        )
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        this.setState({ open: true })
    }
}

export default React.forwardRef((props, ref) => {
    const menuRef = useRef()

    useImperativeHandle(ref, () => ({
        open() {
            menuRef.current.open()
        },
    }))

    return <Menu ref={menuRef} {...props} />
})