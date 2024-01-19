import React from "react";
import css from './CompetenceWithIndicatorWiget.module.css'
import Indicator from "./Indicator/Indicator";

const CompetenceWithIndicatorWiget = (props) => {

    const competence_name = props.indicator_scales.find(x => x.competence_id === props.competence_id).competence_name;
    const indicators = props.indicators.map(x => <Indicator id={x.indicator_id} mark={x.mark} competence_id={props.competence_id}
        pa_doc={props.pa_doc} indicator_scales={props.indicator_scales} sendCompetence={props.sendCompetence}/>)

    return <div className={css.wiget}>
        <div className={css.header}>{competence_name}</div>
        <div className={css.content}>
            {indicators}
        </div>
    </div>

}

export default CompetenceWithIndicatorWiget;