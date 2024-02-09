import React from "react";
import css from './CompetenceWithIndicatorWiget.module.css'
import Indicator from "./Indicator/Indicator";

const CompetenceWithIndicatorWiget = (props) => {

    const competence_name = props.indicator_scales.find(x => x.competence_id === props.competence_id).competence_name;
    let self_scores_arr = [];
    const indicators = props.indicators.map(x => {
        let cur_self_val = props.self_score && props.self_score.indicators && props.self_score.indicators.indicator.find(
            i => i.indicator_id === x.indicator_id)?.mark_text;
        self_scores_arr.push(cur_self_val && cur_self_val !== '' ? cur_self_val : '-');

    return <Indicator id={x.indicator_id} mark={x.mark} competence_id={props.competence_id}
        pa_doc={props.pa_doc} indicator_scales={props.indicator_scales} sendCompetence={props.sendCompetence}/>});

    return <div className={css.wiget}>
        <div className={css.header}>
            <div className={css.left}>{competence_name}</div>
            <div className={css.right}>
                {props.self_score && 'Самооценка: ' + self_scores_arr.join(', ')}
            </div>
        </div>
        <div className={css.content}>
            {indicators}
        </div>
    </div>

}

export default CompetenceWithIndicatorWiget;