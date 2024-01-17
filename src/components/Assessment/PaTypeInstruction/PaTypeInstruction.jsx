import React from "react";
import css from './PaTypeInstruction.module.css'

const PaTypeInstruction = (props) => {
    function createMarkup() {
        return {__html: props.instruction.trim()};
    }


    return <div className={css.tooltip}>
        <div className={css.info_icon}/>
        <div dangerouslySetInnerHTML={createMarkup()}/>
    </div>
}

export default PaTypeInstruction;