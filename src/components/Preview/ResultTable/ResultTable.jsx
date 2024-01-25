import React from "react";
import css from "./ResultTable.module.css"
import { ResultTableHeader } from "./TableHeader/ResultTableHeader";

const ResultTable = (props) => {
    console.log(props);
//props plan={props.plan} plan_pas={props.plan_pas} competence_scales={props.competence_scales} 
//indicator_scales={props.indicator_scales} question_scales={props.question_scales}


    return (
        <div className={css.tableContainer}>
           <ResultTableHeader/>
        </div>
    )
}

export default ResultTable;