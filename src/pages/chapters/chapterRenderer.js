import * as React from "react"
import PropTypes from "prop-types"

const Chapter = ({ html }) => (
    <div dangerouslySetInnerHTML={{ __html: html }} >
    </div >

)
Chapter.propTypes = {
    html: PropTypes.string
}

export default Chapter
