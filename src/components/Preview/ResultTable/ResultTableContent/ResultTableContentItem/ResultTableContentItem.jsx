import React from 'react'
import css from './ResultTableContentItem.module.css'
export const ResultTableContentItem = (props) => {
  let contentItemWithoutBoss = props.isHasBoss?'':css.contentItemWithoutBoss
  let isCriterionMain = props.isCriterionMain?css.criterionWithoutTab:''
  let score=props.score?props.score:''
  let comment=props.comment?props.comment:''
  let bossScore=props.bossScore?props.bossScore:''
  let bossComment=props.bossComment?props.bossComment:''
  return (
    <div className={`${css.itemContainer} ${contentItemWithoutBoss}`}>
        <div className={`${css.itemIndicatorBlock}  ${isCriterionMain}`}>{props.criterion}</div>
        <div className={css.itemStatusesBlock}>
          <div>{score}</div>
          <div>{comment}</div>
        </div>
        {
          props.isHasBoss &&
        <div className={css.itemStatusesBlock}>
          <div>{bossScore}</div>
          <div>{bossComment}</div>
        </div>
        }
        
    </div>
  )
}

