import React from "react";
import css from './ModalComment.module.css'

const ModalComment = (props) => {
    
    if(props.visible) {
        return <div className={css.modal}>
            <div className={css.dialog}>
                <div className={css.header}>
                    <div className={css.title}>{props.title}</div>
                    <span className={css.close} onClick={props.onClose}>&times;</span>
                </div>
                <div className={css.body}>
                    <textarea placeholder="Комментарий.." value={props.curComment} onChange={props.onChangeComment}/>
                </div>
                <div className={css.footer}>
                    {props.curComment !=='' && <div className={css.button} onClick={props.onSend}>Отправить</div>}
                    {props.curComment ==='' && <div className={css.buttonDisabled} title="Введите комментарий">Отправить</div>}
                </div>
            </div>
        </div>
    }
    else
        return null;

}

export default ModalComment;