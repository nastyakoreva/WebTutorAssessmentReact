import {compose} from "redux";
import {connect} from "react-redux";
import Assessment from "./Assessment";
import {setAppCurentPaAC} from "../../redux/app-reducer";

let mapStateToProps = (state) => {
    return {
        pa: state.assessment.pa,
        pa_doc: state.assessment.pa_doc,
        plan: state.assessment.plan,
        workflow_states: state.tree.workflow_states,
        boss: state.assessment.boss,
        expert: state.assessment.expert,
        hr: state.assessment.hr,
        competence_scales: state.assessment.competence_scales
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