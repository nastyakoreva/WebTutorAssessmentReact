import React from "react";
import css from "./ResultTable.module.css";
import { ResultTableHeader } from "./ResultTableHeader/ResultTableHeader";
import { ResultTableContent } from "./ResultTableContent/ResultTableContent";

const ResultTable = ({plan, plan_pas,competence_scales,indicator_scales,question_scales}) => {

    let isHasBoss = plan.workflow_state === "Assessment" ? false : true;
    let data = [];

    const pas1 = plan_pas.find(p => p.assessment_appraise_type === 'competence_appraisal' && p.status === 'self');
    if(pas1 !== undefined) {
        const pas1Boss = plan_pas.find(p => p.assessment_appraise_type === 'competence_appraisal' && p.status === 'manager');

        for(let comp of pas1.competences.competence) {
            let comp_name = competence_scales.find(s => s.id === comp.competence_id)?.name;
            
            let item = { isTopLevel: true, name: comp_name, score: comp.mark_text, comment: comp.comment };
            if(isHasBoss) {
                let comp_boss = pas1Boss?.competences.competence.find(c => c.competence_id === comp.competence_id);
                item.bossScore = comp_boss?.mark_text;
                item.bossComment = comp_boss?.comment;
            }
            data.push(item);
        }
    }

    const pas2 = plan_pas.find(p => p.assessment_appraise_type === 'position_appraisal' && p.status === 'self');
    if(pas2 !== undefined) {
        const pas2Boss = plan_pas.find(p => p.assessment_appraise_type === 'position_appraisal' && p.status === 'manager');

        for(let comp of pas2.competences.competence) {
            let comp_name = indicator_scales.find(s => s.competence_id === comp.competence_id)?.competence_name;
            let item = { isTopLevel: true, name: comp_name, score: comp.mark_text, comment: comp.comment };
            if(isHasBoss) {
                let comp_boss = pas2Boss?.competences.competence.find(c => c.competence_id === comp.competence_id);
                item.bossScore = comp_boss?.mark_text;
                item.bossComment = comp_boss?.comment;
            }
            data.push(item);

            for(let indic of comp.indicators.indicator) {
                let indic_name = indicator_scales.find(s => s.id === indic.indicator_id)?.name;
                item = { isTopLevel: false, name: indic_name, score: indic.mark_text, comment: indic.comment };
                if(isHasBoss) {
                    let indic_boss = pas2Boss?.competences.competence.find(c => c.competence_id === comp.competence_id)?.indicators.indicator.find(i => i.indicator_id === indic.indicator_id);
                    item.bossScore = indic_boss?.mark_text;
                    item.bossComment = indic_boss?.comment;
                }
                data.push(item);
            }
        }
    }

    const pas3 = plan_pas.find(p => p.assessment_appraise_type === 'staffrating' && p.status === 'self');
    if(pas3 !== undefined) {
        const pas3Boss = plan_pas.find(p => p.assessment_appraise_type === 'staffrating' && p.status === 'manager');

        for(let quest of pas3.supplementary_questions.supplementary_question) {
            let q_scale = question_scales.find(s => s.id === quest.supplementary_question_id);
            let quest_name = quest.supplementary_question_name;
            let quest_score = q_scale?.scales.scale.find(s => s.id === quest.supplementary_question_mark)?.percent;
            
            let item = { isTopLevel: true, name: quest_name, score: quest_score, comment: '' };
            if(isHasBoss) {
                let quest_boss = pas3Boss?.supplementary_questions.supplementary_question.find(q => q.supplementary_question_id === quest.supplementary_question_id);
                item.bossScore = q_scale?.scales.scale.find(s => s.id === quest_boss.supplementary_question_mark)?.percent;
                item.bossComment = '';
            }
            data.push(item);
        }
    }

    return (
        <div className={css.tableContainer}>
           <ResultTableHeader isHasBoss={isHasBoss}/>
           <ResultTableContent isHasBoss={isHasBoss} data={data}/>
        </div>
    )
}

export default ResultTable;