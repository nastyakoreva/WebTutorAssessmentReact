//import {getAssessmentData} from "./assessment-reducer";
import {getTreeData} from "./tree-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_CURRENT_PA = 'SET_CURRENT_PA';
const SET_NEXT_BUTTON_SETTINGS = 'SET_NEXT_BUTTON_SETTINGS';
const UPDATE_PREW_PA = 'UPDATE_PREW_PA'
let initialState = {
    initialized: false,
    current_pa: null,
    prew_pa: [],
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
                current_pa: 'tree',               
            }
        case SET_CURRENT_PA:{
            if(action.updatePrew){
                return {
                    ...state,
                    prew_pa: [...state.prew_pa, state.current_pa],
                    current_pa: action.newPa,
                    //page_name: getPageName(action.newPage)
                }
            }
            return {
                ...state,
                current_pa: action.newPa,
                //page_name: getPageName(action.newPage)
            }
        }
            
        case UPDATE_PREW_PA:
             {
                
                if(state.prew_pa.length>0){
                    let newArrPrew = state.prew_pa.slice(0,state.prew_pa.length-1)
                    return{...state, prew_pa:newArrPrew} 
                }
               return{...state,prew_pa:[]} 
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

export const setAppCurentPaAC = (newPa, updatePrew) => ({type: SET_CURRENT_PA, newPa, updatePrew})
export const updateAppPrewPa = ()=>({type:UPDATE_PREW_PA})
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