import React from "react";
import css from "./NumParamWidget.module.css";

const NumParamWidget = (props) => {
    let color = css.white;
    let icon = null;
    switch (props.title) {
        case 'Группа развития':
            color = css.blue;
            icon = css.diamond;
            break;
        case 'Соответствие':
            color = css.yellow;
            icon = css.star;
            break;
        case 'Результативность':
            color = css.pink;
            icon = css.star;
            break;
        case 'Потенциал':
            color = css.green;
            icon = css.star;
            break;
        default:
            color = css.white;
            break;
    }
    const justify_content = props.desc === null & props.date === null ? css.right : '';
    return (
        <div className={`${css.numParamWidget} ${color}`}>
            <div className={css.title}>{props.title}</div>
            <div className={`${css.content} ${justify_content}`}>
                <div className={icon}></div>
                <div className={css.val}>{props.val}</div>
                <div className={css.desc}>
                    <div className={css.descTitle}>{props.desc}</div>
                    <div>{props.date}</div>
                </div>
            </div>
        </div>
    )
}

export default NumParamWidget;