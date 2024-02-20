import React from "react";
import css from "./Preview.module.css"
import WorkflowWiget from "../WorkflowWiget/WorkflowWiget";
import WfButtonsPanel from "../WfButtonsPanel/WfButtonsPanel";
import ResultTable from "./ResultTable/ResultTable";
import CommentsWidget from "./CommentsWidget/CommentsWidget";
import NumParamsPanel from "./NumParamsPanel/NumParamsPanel";

const Preview = (props) => {
    console.log(props);
    
    return (
        <div className={css.preview}>
            <WorkflowWiget workflow_states={props.workflow_states} pa={props.pa} boss={props.boss} expert={props.expert} hr={props.hr}/>
            
            {props.mode === 'pre_preview' && 
            <WfButtonsPanel backToTree={props.backToTree} goNextPa={props.goNextPa} goPrewPa={props.goPrewPa} pa_id_next={props.pa_id_next} 
            plan_id={props.plan_id} next_enabled={props.next_enabled} next_title = {props.next_title}/>}
            
            {props.mode === 'preview' && 
            <WfButtonsPanel backToTree={props.backToTree} goPrewPa={props.goPrewPa} plan={props.plan} curUserId={props.curUserId} 
                hr={props.hr} sendWFstate={props.sendWFstate} pa_curr_expert_id={props.pa_curr_expert_id}/>}
            
            <NumParamsPanel score={props.arr_score}/>

            {props.plan_comments.length > 0 &&
                <CommentsWidget comments={props.plan_comments} plan_comments_instruction={props.plan_comments_instruction}/>}
            
            <ResultTable plan={props.plan} plan_pas={props.plan_pas} competence_scales={props.competence_scales} 
                indicator_scales={props.indicator_scales} question_scales={props.question_scales}/>
        </div>
    )
}

export default Preview;