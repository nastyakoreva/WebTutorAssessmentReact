import React from "react";
import css from "./TreeFilter.module.css"

const TreeFilter = (props) => {
    return (
        <div className={css.filter}>
            <div className={css.search_icon}></div>
            <input type="text" placeholder="Поиск"/>
        </div>
    )
}

export default TreeFilter;