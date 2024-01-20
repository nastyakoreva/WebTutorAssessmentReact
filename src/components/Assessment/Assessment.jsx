import React from "react";
import WorkflowWiget from "./WorkflowWiget/WorkflowWiget";
import css from './Assessment.module.css'
import WfButtonsPanel from "./WfButtonsPanel/WfButtonsPanel";
import CompetenceWidget from "./CompetenceWidget/CompetenceWidget";
import PaTypeInstruction from "./PaTypeInstruction/PaTypeInstruction";
import CompetenceWithIndicatorWiget from "./CompetenceWithIndicatorWiget/CompetenceWithIndicatorWiget";
import QuestionWidget from "./QuestionWidget/QuestionWidget";

const Assessment = (props) => {

    const competences = props.pa_doc.competences.competence !== undefined &&
    props.pa_doc.competences.competence.filter(c => c.indicators.indicator === undefined).map(comp =>
        <CompetenceWidget competence={comp} pa_doc={props.pa_doc} sendCompetence={props.sendCompetence}
            competence_scale={props.competence_scales.find(x => x.id === comp.competence_id)}/>)  
    
    const competence_indicators = props.pa_doc.competences.competence !== undefined &&
        props.pa_doc.competences.competence.filter(c => c.indicators.indicator !== undefined).map(x =>
        <CompetenceWithIndicatorWiget competence_id={x.competence_id} indicators={x.indicators.indicator} pa_doc={props.pa_doc}
            indicator_scales={props.indicator_scales} sendCompetence={props.sendCompetence}/>);

    const questions = props.pa_doc.supplementary_questions.supplementary_question?.map(quest => 
        <QuestionWidget question={quest} pa_doc={props.pa_doc} sendCompetence={props.sendCompetence}
            question_scale={props.question_scales.find(x => x.id === quest.supplementary_question_id)}/>)

    return <div className={css.assessment}>
        <WorkflowWiget workflow_states={props.workflow_states} pa={props.pa} boss={props.boss} expert={props.expert} hr={props.hr}/>
        <WfButtonsPanel backToTree={props.backToTree} goNextPa={props.goNextPa} goPrewPa={props.goPrewPa} pa_id_next={props.pa_id_next}/>
        <div className={css.title}>{props.pa_type_title}</div>
        {props.instruction && <PaTypeInstruction instruction={props.instruction}></PaTypeInstruction>}
        {competences}
        {competence_indicators}
        {questions}

        {/*Assessment page : <br/>pa.expert_person_fullname - {props.pa.expert_person_fullname}, <br/>pa.name - {props.pa.name}*/}
    </div>

}

export default Assessment;