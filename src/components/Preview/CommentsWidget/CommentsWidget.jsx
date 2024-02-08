import React from "react";
import css from "./CommentsWidget.module.css"

const CommentsWidget = (props) => {
    //console.log(props);
    const comments = props.comments.map(c => [<div className={css.date}>{c.comment_date}</div>,
            <div className={css.user}>
                <div>{c.person_fio}</div>
                <div className={css.position}>{c.person_position}</div>
            </div>,
            <div className={css.content}>
                <div className={css.wfState}>{c.workflow_state + ':'}</div>
                <div>{c.comment}</div>
            </div>])

    function createMarkup() {
        return {__html: props.plan_comments_instruction.trim()};
    }
    
    return (
        [props.plan_comments_instruction !== null &&
        <div className={css.instruction}>
            <div className={css.info_icon}/>
            <div dangerouslySetInnerHTML={createMarkup()}/>
        </div>,
        <div className={css.comments}> 
            <div className={css.header}><div className={css.dialogIcon}></div>Комментарий</div> 
            <div className={css.commentGrid}>
            {comments}
            </div>
        </div>]
    )
}

export default CommentsWidget;