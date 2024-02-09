import React from "react";
import css from './UserWiget.module.css';

const UserWiget = (props) => {
    return (
        <div className={css.UserWiget}>
            <img className={css.avatar} src={props.avatar ?? '/download_file.html?file_id=6962198780573603416'} alt=''></img>
            <div className={css.userdata}>
                <div>{props.fullname}</div>
                <div className={css.position}>{props.position}</div>
                <div className={css.position}>{props.role}</div>
            </div>
        </div>
    )
}

export default UserWiget;