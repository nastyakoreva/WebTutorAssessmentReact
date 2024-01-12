import React from "react";
import css from "./TreeInstruction.module.css"

const TreeInstruction = (props) => {

    function createMarkup() {
        return {__html: props.content};
    }

    return (
        <div className={css.instruction} dangerouslySetInnerHTML={createMarkup()} />
    )
}

export default TreeInstruction;