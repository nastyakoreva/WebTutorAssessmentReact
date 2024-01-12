import {compose} from "redux";
import {connect} from "react-redux";
import Assessment from "./Assessment";
import {setAppCurentPaAC} from "../../redux/app-reducer";

let mapStateToProps = (state) => {
    return {
        pa: state.assessment.pa,
        pa_doc: state.assessment.pa_doc,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        backToTree: () => { dispatch(setAppCurentPaAC('tree')) }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps)
) (Assessment);