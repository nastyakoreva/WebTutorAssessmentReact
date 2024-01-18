import {compose} from "redux";
import {connect} from "react-redux";
import Assessment from "./Assessment";
import {setAppCurentPaAC} from "../../redux/app-reducer";
import { getAssessmentPa, sendCompetence } from "../../redux/assessment-reducer";

const pa_roadmap = ['competence_appraisal', 'position_appraisal', 'development_plan']; //TODO маршрут оценки (типы pa для кнопки далее)
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
            /*&& p.workflow_state === cur_pa.workflow_state*/ && p.type === pa_roadmap[pa_roadmap_index + 1]);
        return next_pa !== undefined ? next_pa.id : 'preview';
    }
}

const getPaTypeName = (state) => {
    const paTypeNames = [{type: 'competence_appraisal', name: 'Оценка по компетенциям'},
                        {type: 'position_appraisal', name: 'Оценка потенциала'}, 
                        {type: 'development_plan', name: 'Оценка 3'}];
    const paTypeName = paTypeNames.find(x => x.type === state.tree.pas.find(p => p.id === state.app.current_pa).type);
    return paTypeName !== undefined ? paTypeName.name : '';
}


let mapStateToProps = (state) => {
    return {
        pa: state.assessment.pa,
        pa_doc: state.assessment.pa_doc,
        plan: state.assessment.plan,
        workflow_states: state.tree.workflow_states,
        boss: state.assessment.boss,
        expert: state.assessment.expert,
        hr: state.assessment.hr,
        competence_scales: state.assessment.competence_scales,
        indicator_scales: state.assessment.indicator_scales,
        pa_id_next: getPaNextButton(state),
        pa_type_title: getPaTypeName(state),
        instruction: state.assessment.instruction
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        backToTree: () => { dispatch(setAppCurentPaAC('tree')) },
        goNextPa: (pa_id) => { pa_id === 'preview' ? dispatch(setAppCurentPaAC(pa_id)) : dispatch(getAssessmentPa(pa_id))},
        sendCompetence: (data) => { dispatch(sendCompetence(data)) }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps)
) (Assessment);