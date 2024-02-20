import {compose} from "redux";
import {connect} from "react-redux";
import Tree from "./Tree";
import {getAssessmentPa} from "../../redux/assessment-reducer"
import {getPreviewData} from "../../redux/preview-reducer"

let mapStateToProps = (state) => {
    
    const pa_cats = [
        {name: 'self', title: 'Моя оценка'}, 
        {name: 'apprise', title: 'Оценка сотрудников'}, 
        {name: 'approve', title: 'Согласование оценки сотрудников'}, 
        {name: 'comitet', title: 'Проведение кадрового комитета'}
    ];
    let pas_tree = {};
    pa_cats.forEach(cat => {
        pas_tree[cat.name] = [];
    });
    pas_tree.sort = pa_cats;
    
    state.tree.pas.sort((a, b) => a.name.localeCompare(b.name)).forEach(element => {
        if(state.tree.assessment_user.id === element.expert_person_id && element.type === "competence_appraisal") {
            switch(element.workflow_state) {
                case 'Assessment':
                    if(element.status === "self")
                        pas_tree['self'].push({ pa: element, btn_active: true, btn_text: 'Начать самооценку', to: 'pa'});
                    else
                        pas_tree['apprise'].push({ pa: element, btn_active: false, btn_text: 'Дождитесь заполнения оценочных форм Оцениваемым', to: 'pa'});
                    break;
                case 'Manager':
                    if(element.status === "manager")
                        pas_tree['apprise'].push({ pa: element, btn_active: true, btn_text: 'Начать', to: 'pa'});
                    else
                        pas_tree['apprise'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценки руководителя', to: 'pa'});
                    break;
                case 'Approval':
                    if(element.status === "expert")
                        pas_tree['approve'].push({ pa: element, btn_active: true, btn_text: 'Посмотреть', to: 'preview'});
                    else
                        pas_tree['approve'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценки вышестоящего руководителя', to: 'preview'});
                    break;
                case 'Comitet':
                    if(element.status === "interview")
                        pas_tree['comitet'].push({ pa: element, btn_active: true, btn_text: 'Начать', to: 'preview'});
                    else
                        pas_tree['comitet'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценочного собеседования', to: 'preview'});
                    break;
                case 'End':
                    pas_tree['apprise'].push({ pa: element, btn_active: true, btn_text: 'Оценка завершена', to: 'preview'});
                    break;
                default:
                    pas_tree['apprise'].push({ pa: element, btn_active: false, btn_text: 'Этап оценки не определен', to: 'pa'});
                    break;
            }
        }
    });

    return {
        instructionContent: state.tree.instructionContent,
        pas_tree: pas_tree,
        assessment_user: state.tree.assessment_user,
        pas: state.tree.pas
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getPa: (pa_id) => dispatch(getAssessmentPa(pa_id, true)),
        getPreview: (plan_id) => dispatch(getPreviewData(plan_id))
    //    setNextButtonSettings: (val) => {
    //        dispatch(setNextButtonSettingsAC(val));
    //    },
    //    sendAnswer: (answer) => dispatch(sendAnswer(answer))
    }
}

export default compose ( 
    connect(mapStateToProps, mapDispatchToProps /*{sendAnswer}*/)
) (Tree);