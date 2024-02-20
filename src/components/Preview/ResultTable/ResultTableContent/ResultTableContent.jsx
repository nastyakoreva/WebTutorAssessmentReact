import React from 'react'
import {ResultTableContentItem} from './ResultTableContentItem/ResultTableContentItem'
import css from './ResultTableContent.module.css'

export const ResultTableContent = (props) => {
  
  const items = props.data.map(x => <ResultTableContentItem isTopLevel={x.isTopLevel} name={x.name} isHasBoss={props.isHasBoss} score={x.score} comment={x.comment} bossScore={x.bossScore} bossComment={x.bossComment} />)
  return (
    <div className={css.resultTableContentContainer}>
        {items}
    </div>
  )
}
