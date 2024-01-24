import {assessmentAPI} from "../api/api";
import {setAppCurentPaAC} from "./app-reducer";

const SET_PREVIEW = 'SET_PREVIEW';
const SET_ASSESSMENT_COMPETENCE = 'SET_ASSESSMENT_COMPETENCE';

let initialState = {
    plan: null,
    //workflow: null,
    plan_pas: null,
    competence_scales: [],
    indicator_scales: [],
    question_scales: []
}

const previewReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_PREVIEW:
            return {
                ...state,
                plan: action.data.plan,
                //workflow: action.data.workflow,
                plan_pas: action.data.plan_pas,
                competence_scales: action.data.competence_scales,
                indicator_scales: action.data.indicator_scales,
                question_scales: action.data.question_scales
            }
        default:
            return state;
    }
}

const setPreview = (data) => ({ type: SET_PREVIEW, data });
//const setAssessmentCompetence = (data) => ({ type: SET_ASSESSMENT_COMPETENCE, data });

export const getPreviewData = (plan_id) => (dispatch) => {
    assessmentAPI.getPreviewData(plan_id).then(response => {
        console.log(response);
        dispatch(setPreview(response.data))
    }).then( () => { dispatch(setAppCurentPaAC('preview', true)) } ) 
}
/*
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
}*/

export default previewReducer;