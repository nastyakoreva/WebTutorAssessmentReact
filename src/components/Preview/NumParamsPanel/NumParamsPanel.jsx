import React from "react";
import css from "./NumParamsPanel.module.css";
import NumParamWidget from "./NumParamWidget/NumParamWidget";

const NumParamsPanel = (props) => {
    let params = [];
    params.push({
        title: 'Группа развития',
        val: null,
        desc: 'III профессионалы',
        date: 'май 2023'
    })
    params.push({
        title: 'Соответствие',
        val: '2.5',
        desc: 'Частичное',
        date: 'май 2023'
    })
    params.push({
        title: 'Результативность',
        val: '2.5',
        desc: 'Не результативен',
        date: 'май 2023'
    })
    params.push({
        title: 'Потенциал',
        val: '4',
        desc: 'Высокий',
        date: 'май 2023'
    })
    params.push({
        title: 'Оценка IQ',
        val: '125',
        desc: null,
        date: null
    })
    params.push({
        title: 'Hogan',
        val: '48',
        desc: null,
        date: null
    })
    const paramWidgets = params.map(p => <NumParamWidget title={p.title} val={p.val} desc={p.desc} date={p.date}/>)
    return (
        <div className={css.numParamsPanel}>
            {paramWidgets}
        </div>
    )
}

export default NumParamsPanel;