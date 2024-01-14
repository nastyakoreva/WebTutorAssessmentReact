import React from "react";
import css from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={css.header}>
            {props.assessment_user !== null &&
            <div className={css.content}>
                <div className={css.logo_suek} onClick={()=>{window.location.href='/'}}></div>
                <div className={css.assessment_name}>
                    {props.assessment_name}. период оценки: {props.assessment_date_start} - {props.assessment_date_end}</div>
                <img className={css.assessment_user} src={props.assessment_user.pict_url} title={props.assessment_user.fullname}
                    onClick={()=>{window.location.href='/cabinet'}}/>
            </div>}
        </div>
    )
}

export default Header;