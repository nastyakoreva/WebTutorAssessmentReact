import {assessmentAPI} from "../api/api";

const SET_TREE_DATA = 'SET_TREE_DATA';

let initialState = {
    instructionContent: "",
    pas: [],
    assessment_user: null,
    workflow_states: []
}

const treeReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case SET_TREE_DATA:
            return {
                ...state,
                pas: action.data.pas,
                assessment_name: action.data.assessment_name,
                assessment_date_start: action.data.assessment_date_start,
                assessment_date_end: action.data.assessment_date_end,
                assessment_user: action.data.assessment_user,
                instructionContent: action.data.instruction,
                workflow_states: action.data.workflow_states
            }
        default:
            return state;
    }
}

const setTreeData = (data) => ({ type: SET_TREE_DATA, data });

export const getTreeData = (appr_id) => (dispatch) => {
    assessmentAPI.getTreeData(appr_id).then(response => {
        // console.log(response);
        dispatch(setTreeData(response.data));
    })
}

/*export const getPaData = (id) => (dispatch) => {
    assessmentAPI.getPaData(id).then(response => {
        console.log(response);
        dispatch(setPaData(response.data));
    })
}*/

export default treeReducer;