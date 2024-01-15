import React from "react";
import css from "./TreeItem.module.css"
import { Button } from "../../../common/button/Button";

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
            {/*<Button callback={()=>{props.getPa(props.item.pa.id)}}
                   btnClass={'dark'}>{props.item.btn_text} </Button>   */} 
                    { props.item.btn_active && <div className={css.button} onClick={()=>{props.getPa(props.item.pa.id)}}>{props.item.btn_text}</div> }
                    { !props.item.btn_active && <div className={css.tooltip}><div className={css.info_icon}/>{props.item.btn_text}</div> }
                            
        </div>
    )
}

export default TreeItem;