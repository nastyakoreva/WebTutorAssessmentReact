import React from "react";
import css from './QuestionWidget.module.css'

const QuestionWidget = (props) => {
    console.log(props);

    const scales = props.question_scale.scales.scale.map(s => <label className={css.item} key={s.id}>
    <input type={"radio"} value={s.id} name={props.pa_doc.id} question_id={props.question.supplementary_question_id} 
        checked={s.id === props.question.supplementary_question_mark} role="question" 
        onChange={(e) => {props.sendCompetence(e.currentTarget)}} />
        <i title={s.name}></i><div className={css.desc}>{'name: ' + s.name}<br/>{'desc: ' + s.desc}</div>
    </label>);

    return <div className={css.question}>
        <div className={css.header}>
            <div className={css.name}>{props.question_scale.name}</div>
        </div>
        <div className={css.content}>
            <form className={css.scale_container}>
                {scales}
            </form>
        </div>
    </div>

}

export default QuestionWidget;