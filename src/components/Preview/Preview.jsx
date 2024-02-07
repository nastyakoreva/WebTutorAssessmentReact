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
            <WfButtonsPanel backToTree={props.backToTree} goPrewPa={props.goPrewPa} plan={props.plan} curUserId={props.curUserId} 
                hr={props.hr} sendWFstate={props.sendWFstate} pa_curr_expert_id={props.pa_curr_expert_id}/>
            
            <NumParamsPanel score={props}/>

            {props.plan_comments.length > 0 &&
                <CommentsWidget comments={props.plan_comments}/>}
            
            <ResultTable plan={props.plan} plan_pas={props.plan_pas} competence_scales={props.competence_scales} 
                indicator_scales={props.indicator_scales} question_scales={props.question_scales}/>
        </div>
    )
}

export default Preview;