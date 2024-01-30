import React from "react";
import css from "./CommentsWidget.module.css"

const CommentsWidget = (props) => {
    console.log(props);
    const comments = props.comments.map(c=><div className={css.comment}> {c.comment_date} {c.comment}</div>)
    return (

        <div className={css.comments}>
           {comments}
        </div>
    )
}

export default CommentsWidget;