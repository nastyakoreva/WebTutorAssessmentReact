import React from "react";
import css from './WfButtonsPanel.module.css'

const WfButtonsPanel = (props) => {
    return <div className={css.wfButtonsPanel}>
        <div className={css.wfButton} onClick={props.backToTree}>Назад</div>
        <div className={css.grow}></div>
        <div className={css.wfButton} onClick={props.backToTree}>Сохранить и выйти</div>
        <div className={css.wfButton}>Далее</div>
    </div>

}

export default WfButtonsPanel;