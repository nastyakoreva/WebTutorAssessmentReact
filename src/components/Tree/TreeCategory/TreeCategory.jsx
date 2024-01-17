import React, {memo, useState} from "react";
import css from "./TreeCategory.module.css"
import TreeItem from "./../TreeItem/TreeItem"

const TreeCategory = memo((props) => {

    const [isOpen, setIsOpen] = useState(true);
    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }
    
    let filteredPAS = props.pas.filter(item=> item.pa.name.toLowerCase().includes(props.treeFilterTitle) || 
                                              item.pa.position.toLowerCase().includes(props.treeFilterTitle))

    const items = filteredPAS.map(item => <TreeItem item={item} getPa={props.getPa}/>);
    return (
        <div className={css.category}>
            <div className={css.header}>
                <div className={css.expand_icon} onClick={toggle} expanded={isOpen && "true"}/>
                <div>
                    {props.category_title}
                </div>
            </div>
            {isOpen && items}
        </div>
    )
})

export default TreeCategory;