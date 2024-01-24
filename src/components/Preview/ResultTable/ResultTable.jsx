import React from "react";
import css from "./ResultTable.module.css"


const ResultTable = (props) => {
    console.log(props);
//props plan={props.plan} plan_pas={props.plan_pas} competence_scales={props.competence_scales} 
//indicator_scales={props.indicator_scales} question_scales={props.question_scales}


    return (
        <div className={css.tableContainer}>
            table
        </div>
    )
}

export default ResultTable;