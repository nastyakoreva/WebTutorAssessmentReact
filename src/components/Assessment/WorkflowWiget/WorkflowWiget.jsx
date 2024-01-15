import React from "react";
import css from './WorkflowWiget.module.css'
import UserWiget from "./UserWiget/UserWiget";

const WorkflowWiget = (props) => {
    
    let pass_flag = true;
    const states = props.workflow_states.map(s => {
        if(s.code !== 'End') {
            if(s.code === props.pa.workflow_state) {
                pass_flag = false;
            }
            return (<li className={s.code === props.pa.workflow_state ? css.curr : pass_flag && css.pass}>
                <div>{s.name}</div>
            </li>)
        }
        else return null;
    });

    return (
        <div className={css.wiget}>
            <div className={css.workflow}>
                <p>Процесс оценки</p>
                <ul>
                    {states}
                </ul>
            </div>
            <div className={css.experts}>
                <ul>
                    <li><UserWiget fullname={props.pa.person_fullname} position={props.pa.person_position_name} role='Оцениваемый' /></li>
                    {props.boss &&
                    <li><UserWiget fullname={props.boss.fullname} position={props.boss.position} avatar={props.boss.pict_url} role='Оценивающий руководитель' /></li>}
                    {props.expert &&
                    <li><UserWiget fullname={props.expert.fullname} position={props.expert.position} avatar={props.expert.pict_url} role='Согласующий руководитель' /></li>}
                    {props.hr &&
                    <li><UserWiget fullname={props.hr.fullname} position={props.hr.position} avatar={props.hr.pict_url} role='HR' /></li>}
                </ul>
            </div>
        </div>
    )
}

export default WorkflowWiget;