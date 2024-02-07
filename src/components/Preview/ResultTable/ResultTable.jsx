import React, { useCallback } from "react";
import css from "./ResultTable.module.css"
import { ResultTableHeader } from "./TableHeader/ResultTableHeader";
import {ResultTableContent} from "./ResultTableContent/ResultTableContent"
import {getCompetenceAppraisal} from "../../../helpers/getTableContentData"
const ResultTable = ({plan, plan_pas,competence_scales,indicator_scales,question_scales,...props}) => {
    let isHasBoss = plan.workflow_state === "Assessment"?true:true
    let competenceAppraisal = useCallback(()=>{
        // getCompetenceAppraisal(plan, plan_pas,competence_scales,indicator_scales,question_scales)
    },[plan, plan_pas,competence_scales,indicator_scales,question_scales]) 
    return (
        <div className={css.tableContainer}>
           <ResultTableHeader isHasBoss={isHasBoss}/>
           <ResultTableContent isHasBoss={isHasBoss}/>
        </div>
    )
}

export default ResultTable;
/* TODO отрисовать таблицу результатов согласно макету, компонента ResultTable
const paTypeNames = [{type: 'competence_appraisal', name: 'Оценка по компетенциям'},
                        {type: 'position_appraisal', name: 'Оценка потенциала'}, 
                        {type: 'staffrating', name: 'Оценка результативности'},
                        {type: 'development_plan', name: 'Оценка 4'}];
    const paTypeName = paTypeNames.find(x => x.type === state.tree.pas.find(p => p.id === state.app.current_pa).type);
    return paTypeName !== undefined ? paTypeName.name : '';
    
3 "Соответствие должности", "Потенциал", "Результативность" - вычисляются из типа оценки (props.plan_pas.assessment_appraise_type),
функцию вычисления можно скопировать из AssessmentContainer.getPaTypeName,
либо вынести и использовать в нескольких местах, по усмотрению.
Поле "балл" для этих строк считается как среднее арифметическое баллов PA этого типа оценки (props.plan_pas.filter(assessment_appraise_type)) 

4 значения строки (название, балл, коммент) берем из:
4.1 если plan_pas.assessment_appraise_type == 'competence_appraisal', данные для таблицы в plan_pas.competences
балл в mark_value, коммент в comment
название ищем в competence_scales по competence_scales.id == plan_pas.competences.competence_id

4.2 если plan_pas.assessment_appraise_type == 'position_appraisal', данные для таблицы в plan_pas.competences.indicators
балл в mark_value, коммент в comment
название ищем в indicator_scales по indicator_scales.id == plan_pas.competences.indicator_id

4.3 если plan_pas.assessment_appraise_type == 'staffrating', данные для таблицы в plan_pas.supplementary_questions
название в supplementary_question_name
балл - по ид вопроса и значению mark ищем в question_scales.scale, берем поле percent
коммент всегда ""

*/