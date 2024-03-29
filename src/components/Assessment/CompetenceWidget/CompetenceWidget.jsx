import React, { useState } from "react";
import css from './CompetenceWidget.module.css'

const CompetenceWidget = (props) => {

    function createMarkup() {
        return {__html: props.competence_scale.desc.trim()};
    }

    const [curComment, setCurComment] = useState(props.competence.comment);
    const  onChangeComment = (e) => setCurComment(e.target.value);

    const scales = props.competence_scale.scales.scale.map(s => <label className={css.item} key={s.id}>
        <input type={"radio"} value={s.id} name={props.pa_doc.id} comp_id={props.competence.competence_id} mark_type="mark"
            checked={s.id === props.competence.mark} title={s.name}
            onChange={(e) => {props.sendCompetence(e.currentTarget)}}/>
        <i></i><div className={css.competence_desc}>{s.desc}</div>
    </label>);

    const needComment = (props.competence.mark_text === '0' || props.competence.mark_text === '1') && curComment === '';

    return <div className={css.wiget}>
        <div className={css.header}>
            <div className={css.left}>{props.competence_scale.name}</div>
            <div className={css.right}>
                {props.self_score && 'Самооценка: ' + (props.self_score.mark_text && props.self_score.mark_text !== '' ? props.self_score.mark_text : '-')}
            </div>
        </div>
        <div className={css.content}>
            <div className={css.desc} dangerouslySetInnerHTML={createMarkup()}/>
            <div className={css.scale_container}>
                <form className={css.left}>{scales}</form>
                <div className={css.right}>
                    <div>Комментарий:</div>
                    <textarea value={curComment}
                        name={props.pa_doc.id} comp_id={props.competence.competence_id} mark_type="comment"
                        onChange={onChangeComment}
                        onBlur={(e) => props.sendCompetence(e.currentTarget)}
                        className={needComment && css.validationErr}/>
                </div>
            </div>
        </div>
    </div>
}

export default CompetenceWidget;