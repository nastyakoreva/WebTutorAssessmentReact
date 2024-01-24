import React from "react";
import css from './WfButtonsPanel.module.css'

const WfButtonsPanel = (props) => {
    console.log(props)
    const backClickHandler=()=>{
        props.goPrewPa()
    }
    return <div className={css.wfButtonsPanel}>
        <div className={css.wfButton} onClick={backClickHandler}>Назад</div>
        <div className={css.grow}></div>
        <div className={css.wfButton} onClick={props.backToTree}>Сохранить и выйти</div>
        {props.pa_id_next && <div className={css.wfButton} onClick={() => {props.goNextPa(props.pa_id_next, props.plan_id)}}>Далее</div>}
    </div>

}

export default WfButtonsPanel;