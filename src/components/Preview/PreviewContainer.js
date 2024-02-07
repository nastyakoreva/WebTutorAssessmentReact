import {compose} from "redux";
import {connect} from "react-redux";
import {setAppCurentPaAC, updateAppPrewPa} from "../../redux/app-reducer";
import { getAssessmentPa, sendCompetence } from "../../redux/assessment-reducer";
import {sendWFstate} from "../../redux/preview-reducer";
//import {getPreviewData} from "../../redux/preview-reducer";
import Preview from "./Preview";

/*const pa_roadmap = ['competence_appraisal', 'position_appraisal', 'staffrating', 'development_plan']; //TODO маршрут оценки (типы pa для кнопки далее)
const getPaNextButton = (state) => {
    const cur_pa = state.tree.pas.find(p => p.id === state.app.current_pa);
    const pa_roadmap_index = pa_roadmap.indexOf(cur_pa.type);
    if(pa_roadmap_index < 0) {
        console.warn('pa с типом вне маршрута оценки! ' + cur_pa.type);
        return state.app.current_pa;
    }
    else {
        //TODO расскоментировать/поправить workflow_state, когда будет отлажен процесс перехода pa в следующий workflow_state
        const next_pa = state.tree.pas.find(p => p.person_id === cur_pa.person_id && p.expert_person_id === cur_pa.expert_person_id 
            /*&& p.workflow_state === cur_pa.workflow_state*//*  && p.type === pa_roadmap[pa_roadmap_index + 1]);
       return next_pa !== undefined ? next_pa.id : 'preview';
    }
}*/
/*
const getPaTypeName = (state) => {
    const paTypeNames = [{type: 'competence_appraisal', name: 'Оценка по компетенциям'},
                        {type: 'position_appraisal', name: 'Оценка потенциала'}, 
                        {type: 'staffrating', name: 'Оценка результативности'},
                        {type: 'development_plan', name: 'Оценка 4'}];
    const paTypeName = paTypeNames.find(x => x.type === state.tree.pas.find(p => p.id === state.app.current_pa).type);
    return paTypeName !== undefined ? paTypeName.name : '';
}*/


let mapStateToProps = (state) => {

    return {
        pa: state.assessment.pa,
        //pa_doc: state.assessment.pa_doc,
        //plan: state.assessment.plan,
        workflow_states: state.tree.workflow_states,
        boss: state.assessment.boss,
        expert: state.assessment.expert,
        hr: state.assessment.hr,
        //competence_scales: state.assessment.competence_scales,
        //indicator_scales: state.assessment.indicator_scales,
        //question_scales: state.assessment.question_scales,
        //pa_id_next: getPaNextButton(state),
        //pa_type_title: getPaTypeName(state),
        //instruction: state.assessment.instruction,
        //plan_id: state.assessment.pa_doc.assessment_plan_id
        //workflow_states: state.preview.workflow?.state,
        plan: state.preview.plan,
        plan_comments: state.assessment.plan_comments,
        arr_score: state.assessment.arr_score,
        plan_pas: state.preview.plan_pas,
        competence_scales: state.preview.competence_scales,
        indicator_scales: state.preview.indicator_scales,
        question_scales: state.preview.question_scales,
        curUserId: state.tree.assessment_user.id,
        pa_curr_expert_id: state.assessment.pa.expert_person_id

    }
}

let mapDispatchToProps = (dispatch, ownProps) => {

    return {
        backToTree: () => { dispatch(setAppCurentPaAC('tree')) },
        goPrewPa:()=>{
            let lastInPrew_pa = ownProps.prew_pa[ownProps.prew_pa.length-1];
            dispatch(updateAppPrewPa());
            dispatch(getAssessmentPa(lastInPrew_pa, false));
        },
        sendWFstate: (data) => { dispatch(sendWFstate(data)) }
        //goNextPa: (pa_id, plan_id) => { pa_id === 'preview' ? dispatch(getPreviewData(plan_id)) : dispatch(getAssessmentPa(pa_id, true))},
        //sendCompetence: (data) => { dispatch(sendCompetence(data)) }*/
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps)
) (Preview);