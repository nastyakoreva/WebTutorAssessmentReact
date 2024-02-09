import React from "react";
import WorkflowWiget from "../WorkflowWiget/WorkflowWiget";
import css from './Assessment.module.css'
import WfButtonsPanel from "../WfButtonsPanel/WfButtonsPanel";
import CompetenceWidget from "./CompetenceWidget/CompetenceWidget";
import PaTypeInstruction from "./PaTypeInstruction/PaTypeInstruction";
import CompetenceWithIndicatorWiget from "./CompetenceWithIndicatorWiget/CompetenceWithIndicatorWiget";
import QuestionWidget from "./QuestionWidget/QuestionWidget";

const Assessment = (props) => {

    let haveCommentsErr = false;

    const competences = props.pa_doc.competences.competence !== undefined &&
    props.pa_doc.competences.competence.filter(c => c.indicators.indicator === undefined).map(comp => {
            if (!haveCommentsErr) {
                haveCommentsErr = (comp.mark_text === '0' || comp.mark_text === '1') && comp.comment === '';
            }
            let self_score = props.self_scores.competences != null 
                ? props.self_scores.competences.competence.find(s => s.competence_id === comp.competence_id) : null;
        return <CompetenceWidget competence={comp} pa_doc={props.pa_doc} sendCompetence={props.sendCompetence}
            competence_scale={props.competence_scales.find(x => x.id === comp.competence_id)} self_score={self_score}/>})
    
    
    const competence_indicators = props.pa_doc.competences.competence !== undefined &&
        props.pa_doc.competences.competence.filter(c => c.indicators.indicator !== undefined).map(x => {
            let self_score = props.self_scores.competences != null
                ? props.self_scores.competences.competence.find(s => s.competence_id === x.competence_id) : null;
        return <CompetenceWithIndicatorWiget competence_id={x.competence_id} indicators={x.indicators.indicator} pa_doc={props.pa_doc}
            indicator_scales={props.indicator_scales} sendCompetence={props.sendCompetence} self_score={self_score}/>});

    
    const questions = props.pa_doc.supplementary_questions.supplementary_question?.map(quest => {
        let self_score = props.self_scores.supplementary_questions != null 
        ? props.self_scores.supplementary_questions.supplementary_question.find(q => q.supplementary_question_id === quest.supplementary_question_id) : null;
        return <QuestionWidget question={quest} pa_doc={props.pa_doc} sendCompetence={props.sendCompetence}
            question_scale={props.question_scales.find(x => x.id === quest.supplementary_question_id)} self_score={self_score}/>});
    
    
    let haveCompetenceNull = false;
    if(props.pa_doc.competences.competence !== undefined) {
        haveCompetenceNull = props.pa_doc.competences.competence.find(c => c.indicators.indicator === undefined 
            && (c.mark === '' || c.mark === 'N')) !== undefined;
    }
    if(props.next_title !== 'Указаны не все оценки' && haveCompetenceNull) {
        props.setNextButtonSettings({next_enabled: false, next_title: 'Указаны не все оценки'});
    }
    if(props.next_title !== 'Указаны не все оценки' && props.next_title !== 'Указаны не все комментарии' && haveCommentsErr) {
        props.setNextButtonSettings({next_enabled: false, next_title: 'Указаны не все комментарии'});
    }
    if(!props.next_enabled && !haveCompetenceNull && !haveCommentsErr) {
        props.setNextButtonSettings({next_enabled: true, next_title: ''});
    }
    console.log('haveCompetenceNull ' + haveCompetenceNull);
    console.log('haveCommentsErr ' + haveCommentsErr);

    return <div className={css.assessment}>
        <WorkflowWiget workflow_states={props.workflow_states} pa={props.pa} boss={props.boss} expert={props.expert} hr={props.hr}/>
        <WfButtonsPanel backToTree={props.backToTree} goNextPa={props.goNextPa} goPrewPa={props.goPrewPa} pa_id_next={props.pa_id_next} 
            plan_id={props.plan_id} next_enabled={props.next_enabled} next_title = {props.next_title}/>
        <div className={css.title}>{props.pa_type_title}</div>
        {props.instruction && <PaTypeInstruction instruction={props.instruction}></PaTypeInstruction>}
        {competences}
        {competence_indicators}
        {questions}

        {/*Assessment page : <br/>pa.expert_person_fullname - {props.pa.expert_person_fullname}, <br/>pa.name - {props.pa.name}*/}
    </div>

}

export default Assessment;