import React from 'react'
import {ResultTableContentItem} from './ResultTableContentItem/ResultTableContentItem'
import css from './ResultTableContent.module.css'
export const ResultTableContent = (props) => {
  let selfData=props.selfCompetence_appraisalArray
  return (
    <div className={css.resultTableContentContainer}>
        <ResultTableContentItem isCriterionMain={true} criterion={'Соответствие должности'} isHasBoss={props.isHasBoss} score={2} comment={'hf'} bossScore={8} bossComment={'jdfjdf'} />
        <ResultTableContentItem isCriterionMain={false} criterion={'Соответствие должности'} isHasBoss={props.isHasBoss} score={2} comment={'hf'} bossScore={8} bossComment={'jdfjdf'} />
        <ResultTableContentItem isCriterionMain={true} criterion={'Потенциал'} isHasBoss={props.isHasBoss} score={2} comment={'hf'} bossScore={8} bossComment={'jdfjdf'} />
        
        <ResultTableContentItem isCriterionMain={true} criterion={'Результативность'} isHasBoss={props.isHasBoss} score={2} comment={'hf'} bossScore={8} bossComment={'jdfjdf'} />
    </div>
  )
}
