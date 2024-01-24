import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app-reducer";
import assessmentReducer from "./assessment-reducer";
import treeReducer from "./tree-reducer";
import previewReducer from "./preview-reducer";


let reducers = combineReducers({
    app: appReducer,
    assessment: assessmentReducer,
    tree: treeReducer,
    preview: previewReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;