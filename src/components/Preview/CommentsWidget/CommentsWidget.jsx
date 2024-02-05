import React from "react";
import css from "./CommentsWidget.module.css"

const CommentsWidget = (props) => {
    console.log(props);
    const comments = props.comments.map(c => [<div className={css.user}>
                <div>{c.person_fio}</div>
                <div className={css.position}>{c.person_position}</div>
            </div>,
            <div className={css.date}>{c.comment_date}</div>,
            <div className={css.content}>{c.comment}</div>])
    return (

        <div className={css.comments}> 
        <div className={css.header}><div className={css.dialogIcon}></div>Комментарий</div> 
        <div className={css.commentGrid}>
           {comments}
        </div>
        </div>
    )
}

export default CommentsWidget;