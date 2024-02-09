import React from "react";
import css from './QuestionWidget.module.css'

const QuestionWidget = (props) => {

    const scales = props.question_scale.scales.scale.map(s => <label className={css.item} key={s.id}>
    <input type={"radio"} value={s.id} name={props.pa_doc.id} question_id={props.question.supplementary_question_id} 
        checked={s.id === props.question.supplementary_question_mark} mark_type="question" 
        onChange={(e) => {props.sendCompetence(e.currentTarget)}} />
        <i title={s.name}></i><div className={css.desc}>{'name: ' + s.name}<br/>{'desc: ' + s.desc}</div>
    </label>);

    const self_score_val = props.question_scale.scales.scale.find(s => s.id === props.self_score?.supplementary_question_mark)?.percent;

    return <div className={css.question}>
        <div className={css.header}>
            <div className={css.left}>{props.question_scale.name}</div>
            <div className={css.right}>
                {props.self_score && 'Самооценка: ' + (self_score_val ?? '-')}
            </div>
        </div>
        <div className={css.content}>
            <form className={css.scale_container}>
                {scales}
            </form>
        </div>
    </div>

}

export default QuestionWidget;