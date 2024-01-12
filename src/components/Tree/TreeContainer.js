import {compose} from "redux";
import {connect} from "react-redux";
import Tree from "./Tree";
import {getAssessmentPa} from "../../redux/assessment-reducer"

let mapStateToProps = (state) => {
    console.log('state');
    console.log(state);
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
    
    state.tree.pas.forEach(element => {
        if(state.tree.assessment_user.id === element.person_id) {
            console.log(element.person_id.toString());
            switch(element.workflow_state) {
                case 'Assessment':
                    pas_tree['self'].push({ pa: element, btn_active: true, btn_text: 'Начать самооценку'});
                    break;
                case 'Manager':
                    pas_tree['self'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценки руководителя'});
                    break;
                case 'Approval':
                    pas_tree['self'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценки вышестоящего руководителя'});
                    break;
                case 'Comitet':
                    pas_tree['self'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценочного собеседования'});
                    break;
                case 'End':
                    pas_tree['self'].push({ pa: element, btn_active: true, btn_text: 'Оценка завершена'});
                    break;
                default:
                    pas_tree['self'].push({ pa: element, btn_active: false, btn_text: 'Этап оценки не определен'});
                    break;
            }
        }
        else {
            switch(element.workflow_state) {
                case 'Assessment':
                    pas_tree['apprise'].push({ pa: element, btn_active: false, btn_text: 'Дождитесь заполнения оценочных форм Оцениваемым'});
                    break;
                case 'Manager':
                    pas_tree['apprise'].push({ pa: element, btn_active: true, btn_text: 'Начать'});
                    break;
                case 'Approval':
                    pas_tree['approve'].push({ pa: element, btn_active: true, btn_text: 'Посмотреть'});
                    break;
                case 'Comitet':
                    pas_tree['comitet'].push({ pa: element, btn_active: false, btn_text: 'Ожидание оценочного собеседования'});
                    break;
                case 'End':
                    pas_tree['apprise'].push({ pa: element, btn_active: true, btn_text: 'Оценка завершена'});
                    break;
                default:
                    pas_tree['apprise'].push({ pa: element, btn_active: false, btn_text: 'Этап оценки не определен'});
                    break;
            }
        }
    });
    //'Моя оценка', 'Оценка сотрудников', 'Согласование оценки сотрудников','Провидение кадрового комитета'

    return {
        //pas: state.assessment.pas.filter(x => x.type === 'competence_appraisal')
        //    .sort((a, b) => a.name.localeCompare(b.name)),
        //current_next_page_enabled: state.app.next_page_enabled,
        //current_next_page_title: state.app.next_page_title,
        instructionContent: state.tree.instructionContent,
        pas_tree: pas_tree,
        assessment_user: state.tree.assessment_user
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getPa: (pa_id) => dispatch(getAssessmentPa(pa_id))
    //    setNextButtonSettings: (val) => {
    //        dispatch(setNextButtonSettingsAC(val));
    //    },
    //    sendAnswer: (answer) => dispatch(sendAnswer(answer))
    }
}

export default compose ( 
    connect(mapStateToProps, mapDispatchToProps /*{sendAnswer}*/)
) (Tree);