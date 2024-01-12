import {assessmentAPI} from "../api/api";
import {setAppCurentPaAC} from "./app-reducer";

const SET_ASSESSMENT_PA = 'SET_ASSESSMENT_PA';
const SET_ASSESSMENT_ANSWER = 'SET_ASSESSMENT_ANSWER';

let initialState = {
    pa: null,
    pa_doc: null,
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
                //error: action.data.error,
                //sid: action.data.sid
            }
        /*case SET_ASSESSMENT_ANSWER:
            return {
                ...state,
                pas: state.pas.map((pa) => {
                    for(let answer of action.data.answer) {
                        if(pa.id===answer.pa && pa.question===answer.question) {
                            pa.mark.value = answer.value;
                        }
                        if(pa.id===answer.pa && pa.question2 !== undefined 
                                && pa.question2.question===answer.question) {
                            pa.question2.mark.value = answer.value;
                        }
                    }
                    return pa;
                })
            }*/
        default:
            return state;
    }
}

const setAssessmentPa = (data) => ({ type: SET_ASSESSMENT_PA, data });
//const setAssessmentAnswer = (data) => ({ type: SET_ASSESSMENT_ANSWER, data });

export const getAssessmentPa = (pa_id) => (dispatch) => {
    assessmentAPI.getPaData(pa_id).then(response => {
        console.log(response);
        dispatch(setAssessmentPa(response.data))
    }).then( () => { dispatch(setAppCurentPaAC(pa_id)) } ) 
}

export const sendAnswer = (answer) => (dispatch) => {
    //debugger;
    console.log(answer);
    const answerMessage = {
        mode: "put",
        answer: {
            pa: answer.name,
            question: answer.attributes['question'].value,
            value: answer.value
        }
    }
    assessmentAPI.sendAnswer(answerMessage).then(response => {
        console.log(answerMessage);
        if(response.data.status === 1) {
            //dispatch(setAssessmentAnswer(response.data));
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
            /*assessmentAPI.getAssessmentData2().then(response => {
                dispatch(setAssessmentData(response));
            })*/
        }
        return error;
    })
}

export default assessmentReducer;