//import {getAssessmentData} from "./assessment-reducer";
import {getTreeData} from "./tree-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_CURRENT_PA = 'SET_CURRENT_PA';
const SET_NEXT_BUTTON_SETTINGS = 'SET_NEXT_BUTTON_SETTINGS';

let initialState = {
    initialized: false,
    current_pa: null,
    //page_name: "Экспертная оценка квалификации",
    //next_page_enabled: true,
    //next_page_title: ''
}

const appReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            //console.log('init success');
            return {
                ...state,
                initialized: true,
                current_pa: 'tree'
            }
        case SET_CURRENT_PA:
            return {
                ...state,
                current_pa: action.newPa,
                //page_name: getPageName(action.newPage)
            }
        case SET_NEXT_BUTTON_SETTINGS:
            return {
                ...state,
                next_page_enabled: action.nextButtonSettings.next_page_enabled,
                next_page_title: action.nextButtonSettings.next_page_title
            }
        default:
            return state;
    }
}

const getPageName = pageNum => {
    switch (pageNum) {
        case 1:
            return "Экспертная оценка квалификации";
        case 2:
            return "Оценка потенциала";
        case 3:
            return "Оценка результативности";
        case 4:
            return "Превью";
        default:
            return "";
    }
}


export const setAppCurentPaAC = (newPa) => ({type: SET_CURRENT_PA, newPa})

export const setNextButtonSettingsAC = (nextButtonSettings) => ({type: SET_NEXT_BUTTON_SETTINGS, nextButtonSettings})

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = (appr_id) => (dispatch) => {
    let treeData = dispatch(getTreeData(appr_id));
    //let treeData = dispatch(getInstructionData());
    Promise.all([/*assesmentData, */treeData]).then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;