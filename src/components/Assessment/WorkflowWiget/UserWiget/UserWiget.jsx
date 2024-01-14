import React from "react";
import css from './UserWiget.module.css';


const UserWiget = (props) => {
    return (
        <div className={css.UserWiget}>
            {/*<img className={css.avatar} src={props.avatar} alt="Avatar"></img>*/}
            <div className={css.userdata}>
                <div>{props.fullname}</div>
                <div className={css.position}>{props.position}</div>
            </div>
        </div>
    )
}

export default UserWiget;