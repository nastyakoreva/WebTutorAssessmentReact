import React from "react";

const Assessment = (props) => {
    return <div>
        <button onClick={props.backToTree}>Назад к дереву</button>
        <br></br>
        Assessment page : <br/>pa.expert_person_fullname - {props.pa.expert_person_fullname}, <br/>pa.name - {props.pa.name}
    </div>

}

export default Assessment;