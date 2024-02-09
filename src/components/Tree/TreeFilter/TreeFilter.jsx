import React, { useEffect, useState } from "react";
import css from "./TreeFilter.module.css"
import { useDebounce } from "../../../hooks/useDebounce";

const TreeFilter = (props) => {

    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 250);

    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    useEffect(() => {
        props.callback(debouncedValue.toLowerCase())
    }, [debouncedValue])

    return (
        <div className={css.filter}>
            <div className={css.search_icon}/>
            <input type="text" placeholder="Поиск" onChange={onChangeHandler} value={value}/>
        </div>
    )
}

export default TreeFilter;