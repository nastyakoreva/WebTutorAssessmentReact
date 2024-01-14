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
                    <li><UserWiget fullname={props.pa.person_fullname} position='Оцениваемый' /></li>
                    <li><UserWiget fullname={props.pa.expert_person_fullname} position='Оценивающий' /></li>
                    {/*<li><UserWiget fullname={props.hr.fio} position={props.hr.position} /></li>*/}
                </ul>
            </div>
        </div>
    )
}

export default WorkflowWiget;