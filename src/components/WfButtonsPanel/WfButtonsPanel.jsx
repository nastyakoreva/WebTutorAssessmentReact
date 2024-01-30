import React from "react";
import css from './WfButtonsPanel.module.css';
import ModalComment from '../ModalComment/ModalComment';

const WfButtonsPanel = (props) => {
    console.log(props)
    const WFbuttonsEnable = props.plan && props.pa_curr_expert_id === props.curUserId;
    const BackBtnEnabled = true;//props.plan.workflow_state !== 'Approval' && props.plan.workflow_state !== 'Comitet';
    const backClickHandler = () => {
        props.goPrewPa();
    }
    const nextClickHandler = () => {
        props.goNextPa(props.pa_id_next, props.plan_id);
    }
    const WFsetManagerHandler = () => {
        props.sendWFstate({plan_id: props.plan.id, workflow_state: 'Manager', comment: wf_comment});
    }
    const WFsetApprovalHandler = () => {
        props.sendWFstate({plan_id: props.plan.id, workflow_state: 'Approval', comment: ''});
    }
    const WFsetComitetHandler = () => {
        props.sendWFstate({plan_id: props.plan.id, workflow_state: 'Comitet', comment: ''});
    }
    const WFsetEndHandler = () => {
        props.sendWFstate({plan_id: props.plan.id, workflow_state: 'End', comment: ''});
    }

    const [visibleModal, setModal] = React.useState(false);
    const onCloseModal = () => setModal(false);
    const [wf_comment, setWFcomment] = React.useState('');
    const onChangeWFcomment = (e) => setWFcomment(e.target.value);

    return <div className={css.wfButtonsPanel}>
        {/*!props.plan && <div className={css.wfButton} onClick={backClickHandler}>Назад</div>*/}
        {BackBtnEnabled &&
            <div className={css.wfButton} onClick={backClickHandler}>Назад</div>}

        {WFbuttonsEnable && props.plan.workflow_state === 'Approval' 
            && <div className={css.wfButton} onClick={() => setModal(true)/*WFsetManagerHandler*/}>Вернуть на доработку</div>}

        <div className={css.grow}></div>
        <div className={css.wfButton} onClick={props.backToTree}>Сохранить и выйти</div>
        {props.pa_id_next && <div className={css.wfButton} onClick={nextClickHandler}>Далее</div>}

        {WFbuttonsEnable && props.plan.workflow_state === 'Assessment' 
            && <div className={css.wfButton} onClick={WFsetManagerHandler}>Завершить заполнение</div>}

        {WFbuttonsEnable && props.plan.workflow_state === 'Manager'
            && <div className={css.wfButton} onClick={WFsetApprovalHandler}>Отправить результат</div>}

        {/*props.plan && props.plan.custom_experts.includes(props.curUserId) > -1 &&*/
        WFbuttonsEnable && props.plan.workflow_state === 'Approval' 
            && <div className={css.wfButton} onClick={WFsetComitetHandler}>Согласовать</div>}

        {/*props.plan && props.hr && props.curUserId === props.hr.hr_id &&*/ WFbuttonsEnable && props.plan.workflow_state === 'Comitet' 
            && <div className={css.wfButton} onClick={ () => { alert('печать') } }>Печать</div>}
        {/*props.plan && props.hr && props.curUserId === props.hr.hr_id*/WFbuttonsEnable && props.plan.workflow_state === 'Comitet' 
            && <div className={css.wfButton} onClick={WFsetEndHandler}>Завершить оценку</div>}

        <ModalComment visible={visibleModal} onClose={onCloseModal} onChangeComment={onChangeWFcomment} curComment={wf_comment}
            title="Укажие причину возврата оценки на доработку" onSend={WFsetManagerHandler}/>
    </div>

}

export default WfButtonsPanel;