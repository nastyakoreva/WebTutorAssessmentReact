import React from "react";
import WorkflowWiget from "./WorkflowWiget/WorkflowWiget";
import css from './Assessment.module.css'
import WfButtonsPanel from "./WfButtonsPanel/WfButtonsPanel";
import CompetenceWidget from "./CompetenceWidget/CompetenceWidget";
import PaTypeInstruction from "./PaTypeInstruction/PaTypeInstruction";
import CompetenceWithIndicatorWiget from "./CompetenceWithIndicatorWiget/CompetenceWithIndicatorWiget";

const Assessment = (props) => {

    const competences = props.competence_scales.map(s => 
        <CompetenceWidget id={s.id} name={s.name} desc={s.desc} scales={s.scales} pa_doc={props.pa_doc} sendCompetence={props.sendCompetence}/>)
    
    const competence_indicators = props.pa_doc.competences.competence !== undefined &&
        props.pa_doc.competences.competence.filter(c => c.indicators.indicator !== undefined).map(x =>
        <CompetenceWithIndicatorWiget competence_id={x.competence_id} indicators={x.indicators.indicator} pa_doc={props.pa_doc}
            indicator_scales={props.indicator_scales} sendCompetence={props.sendCompetence}/>);

    return <div className={css.assessment}>
        <WorkflowWiget workflow_states={props.workflow_states} pa={props.pa} boss={props.boss} expert={props.expert} hr={props.hr}/>
        <WfButtonsPanel backToTree={props.backToTree} goNextPa={props.goNextPa} pa_id_next={props.pa_id_next}/>
        <div className={css.title}>{props.pa_type_title}</div>
        {props.instruction && <PaTypeInstruction instruction={props.instruction}></PaTypeInstruction>}
        {competences}
        {competence_indicators}

        {/*Assessment page : <br/>pa.expert_person_fullname - {props.pa.expert_person_fullname}, <br/>pa.name - {props.pa.name}*/}
    </div>

}

export default Assessment;