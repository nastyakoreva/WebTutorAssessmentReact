import React from "react";
import css from "./TreeItem.module.css"

const TreeItem = (props) => {
    let pict_url = props.item.pa.icon_url ? props.item.pa.icon_url : '/download_file.html?file_id=6962198780573603416';

    const onClickHandler = () => {
        if(props.item.to === 'preview') {
            props.getPa(props.item.pa.id);
            props.getPreview(props.item.pa.plan_id);
        }
        else {
            props.getPa(props.item.pa.id);
        }
    }

    return (
        <div className={css.item}>
            <div className={css.user}>
                <div className={css.avatar} style={{backgroundImage: 'url('+ pict_url +')'}}>
                </div>
                <div className={css.userdata}>
                    <div>{props.item.pa.name}</div>
                    <div className={css.position}>{props.item.pa.position}</div>
                </div>
            </div>
            { props.item.btn_active && <div className={css.button} onClick={onClickHandler}>{props.item.btn_text}</div> }
            { !props.item.btn_active && <div className={css.tooltip}><div className={css.info_icon}/>{props.item.btn_text}</div> }
        </div>
    )
}

export default TreeItem;