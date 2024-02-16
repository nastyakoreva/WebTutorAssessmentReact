import React from "react";
import css from './WorkflowWiget.module.css'
import UserWiget from "./UserWiget/UserWiget";

const WorkflowWiget = (props) => {
    
    let pass_flag = true;
    const states = props.workflow_states.map(s => {
        if(s.code !== 'End') {
            if(!props.boss && s.code === 'Manager' || !props.expert && s.code === 'Approval' || !props.hr && s.code === 'Comitet') return <div/>;
            if(s.code === props.pa.workflow_state) {
                pass_flag = false;
            }
            return (<div className={css.wfState}>
                <div className={`${css.wfDefault} ${s.code === props.pa.workflow_state ? css.curr : pass_flag && css.pass}`}></div>
                <div>{s.name}</div>
            </div>)
        }
        else return null;
    });

    return (
        <div className={css.wiget}>
            <p>Процесс оценки</p>
            <div className={css.grid}>
                {[states]}

                <div className={css.expert}>
                    <UserWiget fullname={props.pa.person_fullname} position={props.pa.person_position_name} role='Оцениваемый' />
                </div>
                {props.boss ?
                <div className={css.expert}>
                    <UserWiget fullname={props.boss.fullname} position={props.boss.position} avatar={props.boss.pict_url} role='Оценивающий руководитель' />
                </div> : <div className={css.expertNull}/>}
                {props.expert ?
                <div className={css.expert}>
                    <UserWiget fullname={props.expert.fullname} position={props.expert.position} avatar={props.expert.pict_url} role='Согласующий руководитель' />
                </div> : <div className={css.expertNull}/>}
                {props.hr ? 
                <div className={css.expert}>
                    <UserWiget fullname={props.hr.fullname} position={props.hr.position} avatar={props.hr.pict_url} role='HR' />
                </div> : <div className={css.expertNull}/>}
            </div>
        </div>
    )
}

export default WorkflowWiget;