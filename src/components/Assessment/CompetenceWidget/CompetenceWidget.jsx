import React, { useState } from "react";
import css from './CompetenceWidget.module.css'

const CompetenceWidget = (props) => {
    console.log(props);
    function createMarkup() {
        return {__html: props.desc.trim()};
    }

    const [curComment, setCurComment] = useState(props.pa_doc.competences.competence.find(x => x.competence_id === props.id).comment);
    const  onChangeComment = (e) => setCurComment(e.target.value);

    const scales = props.scales.scale.map(s => <label className={css.item} key={s.id}>
        <input type={"radio"} value={s.id} title={s.name} name={props.pa_doc.id} comp_id={props.id} role="mark"
            checked={props.pa_doc.competences.competence.find(x => x.competence_id === props.id && x.mark === s.id) !== undefined}
            onChange={(e) => {props.sendCompetence(e.currentTarget)}}
    />
        <i></i><div className={css.competence_desc}>{s.desc}</div>
    </label>);

    return <div className={css.wiget}>
        <div className={css.header}>
            <div className={css.left}>{props.name}</div>
            <div className={css.right}>Самооценка: 3</div>
        </div>
        <div className={css.content}>
            <div className={css.desc} dangerouslySetInnerHTML={createMarkup()}/>
            <div className={css.scale_container}>
                <form className={css.left}>{scales}</form>
                <div className={css.right}>
                    <div>Комментарий:</div>
                    <textarea value={curComment}
                        name={props.pa_doc.id} comp_id={props.id} role="comment"
                        onChange={onChangeComment}
                        onBlur={(e) => props.sendCompetence(e.currentTarget)}/>
                </div>
            </div>
            
        </div>

    </div>

}

export default CompetenceWidget;