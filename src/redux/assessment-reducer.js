import {assessmentAPI} from "../api/api";
import {setAppCurentPaAC} from "./app-reducer";

const SET_ASSESSMENT_PA = 'SET_ASSESSMENT_PA';
const SET_ASSESSMENT_COMPETENCE = 'SET_ASSESSMENT_COMPETENCE';

let initialState = {
    pa: null,
    pa_doc: null,
    plan: null,
    plan_doc: null,
    boss: null,
    expert: null,
    hr: null,
    competence_scales: [],
    indicator_scales: [],
    question_scales: [],
    instruction: null,
    error: null,
    //assessment_user: null,
    sid: null
}

const assessmentReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_ASSESSMENT_PA:
            return {
                ...state,
                pa: action.data.pa,
                pa_doc: action.data.pa_doc,
                plan: action.data.plan,
                plan_doc: action.data.plan_doc,
                boss: action.data.boss,
                expert: action.data.expert,
                hr: action.data.hr,
                competence_scales: action.data.competence_scales,
                indicator_scales: action.data.indicator_scales,
                question_scales: action.data.question_scales,
                instruction: action.data.instruction
                //error: action.data.error,
                //sid: action.data.sid
            }
        case SET_ASSESSMENT_COMPETENCE:
            return {
                ...state,
                pa_doc: {
                    ...state.pa_doc,
                    competences: {
                        ...state.pa_doc.competences,
                        competence: state.pa_doc.competences.competence?.map((comp) => {
                            for(let wt_answer of action.data.wt_answer) {
                                if(comp.competence_id === wt_answer.comp_id) {
                                    if(wt_answer.mark !== undefined) {
                                        comp.mark = wt_answer.mark;
                                    }
                                    if(wt_answer.comment !== undefined) {
                                        comp.comment = wt_answer.comment;
                                    }
                                    if(wt_answer.indicator !== undefined && wt_answer.indicator !== null) {
                                        for(let indic of comp.indicators.indicator) {
                                            if(indic.indicator_id === wt_answer.indicator.id) {
                                                indic.mark = wt_answer.indicator.mark;
                                                indic.mark_text = wt_answer.indicator.mark_text;
                                                indic.mark_value = wt_answer.indicator.mark_value;
                                            }
                                        }
                                    }
                                }
                            }
                            return comp;
                        }),
                        ...state.pa_doc.supplementary_questions,
                        supplementary_questions: state.pa_doc.supplementary_questions.supplementary_question?.map((quest) => {
                            for(let wt_answer of action.data.wt_answer) {
                                if(quest.supplementary_question_id === wt_answer.quest_id) {
                                    quest.supplementary_question_mark = wt_answer.quest_mark;
                                }
                            }
                            return quest;
                        })
                    }
                }


/*
                pas: state.pas.map((pa) => {
                    for(let answer of action.data.wt_answer) {
                        if(pa.id===answer.pa_id && pa.question===answer.question) {
                            pa.mark.value = answer.value;
                        }
                        if(pa.id===answer.pa && pa.question2 !== undefined 
                                && pa.question2.question===answer.question) {
                            pa.question2.mark.value = answer.value;
                        }
                    }
                    return pa;
                })*/
            }
        default:
            return state;
    }
}

const setAssessmentPa = (data) => ({ type: SET_ASSESSMENT_PA, data });
const setAssessmentCompetence = (data) => ({ type: SET_ASSESSMENT_COMPETENCE, data });

export const getAssessmentPa = (pa_id, updatePrew) => (dispatch) => {
    assessmentAPI.getPaData(pa_id).then(response => {
        console.log(response);
        dispatch(setAssessmentPa(response.data))
    }).then( () => { dispatch(setAppCurentPaAC(pa_id, updatePrew)) } ) 
}

export const sendCompetence = (data) => (dispatch) => {
    //debugger;
    console.log(data);
    console.log(data.attributes['role'].value);
    let outputMessage = {};
    if(data.attributes['role'].value === 'mark') {
        outputMessage = {
            mode: "put",
            competence_mark: {
                pa_id: data.name,
                comp_id: data.attributes['comp_id'].value,
                value: data.value,
                mark_text: data.title
            }
        }
    }
    if(data.attributes['role'].value === 'comment') {
        outputMessage = {
            mode: "put",
            competence_comment: {
                pa_id: data.name,
                comp_id: data.attributes['comp_id'].value,
                comment: data.value,
            }
        }
    }
    if(data.attributes['role'].value === 'indicator_mark') {
        outputMessage = {
            mode: "put",
            competence_indicator: {
                pa_id: data.name,
                comp_id: data.attributes['comp_id'].value,
                indic_id: data.attributes['indicator_id'].value,
                mark: data.value,
                mark_text: data.attributes['mark_text'].value,
                mark_value: data.attributes['mark_value']?.value,
            }
        }
    }
    if(data.attributes['role'].value === 'question') {
        outputMessage = {
            mode: "put",
            question: {
                pa_id: data.name,
                question_id: data.attributes['question_id'].value,
                question_mark: data.value,
            }
        }
    }
    assessmentAPI.sendCompetence(outputMessage).then(response => {
        console.log(outputMessage);
        if(response.data.status === 1) {
            dispatch(setAssessmentCompetence(response.data));
        }
        else if(response.data.status === 0) {
            alert(response.data.comment);
        }
    }, error => {
        if (error.response.status === 401) {
            alert("Необходима авторизация, обновите страницу");
        }
        if (error.response.status === 500) {
            alert("Ошибка");
        }
        return error;
    })
}

export default assessmentReducer;