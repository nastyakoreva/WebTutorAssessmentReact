import React from "react";
import css from "./TreeItem.module.css"

const TreeItem = (props) => {
    let a = props.item.btn_active;
    return (
        <div className={css.item}>
            <div className={css.user}>
                <img className={css.avatar} src={props.item.pa.icon_url} alt="Avatar"></img>
                <div className={css.userdata}>
                    <div>{props.item.pa.name}</div>
                    <div className={css.position}>{props.item.pa.position}</div>
                </div>
            </div>
            <div onClick={()=>{props.getPa(props.item.pa.id)}}>{props.item.btn_text}</div>
                
        </div>
    )
}

export default TreeItem;