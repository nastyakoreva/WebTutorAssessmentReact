import React from "react";
import css from "./Preview.module.css"
import WorkflowWiget from "../WorkflowWiget/WorkflowWiget";
import WfButtonsPanel from "../WfButtonsPanel/WfButtonsPanel";
import ResultTable from "./ResultTable/ResultTable";

const Preview = (props) => {
    console.log(props);
    
    return (
        <div className={css.preview}>
            <WorkflowWiget workflow_states={props.workflow_states} pa={props.pa} boss={props.boss} expert={props.expert} hr={props.hr}/>
            <WfButtonsPanel backToTree={props.backToTree} goPrewPa={props.goPrewPa}/>
            <ResultTable plan={props.plan} plan_pas={props.plan_pas} competence_scales={props.competence_scales} 
                indicator_scales={props.indicator_scales} question_scales={props.question_scales}/>
        </div>
    )
}

export default Preview;