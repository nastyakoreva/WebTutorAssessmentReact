import React, {useState} from "react";
import css from "./Tree.module.css";
import TreeFilter from './TreeFilter/TreeFilter';
import TreeInstruction from './TreeInstruction/TreeInstruction';
import TreeCategory from "./TreeCategory/TreeCategory";

const Tree = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const [treeFilterTitle, setTreeFilterTitle] = useState('')
    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    console.log(props);
    //const categories = props.pas_tree.sort.map(cat => <TreeCategory category_title={cat.title} pas={props.pas_tree[cat.name]} getPa={props.getPa} treeFilterTitle={treeFilterTitle}/>);
    const categories = props.pas_tree.sort.map(cat => 
        <TreeCategory category_title={cat.title} pas={props.pas_tree[cat.name]} treeFilterTitle={treeFilterTitle}
            getPa={props.getPa} getPreview={props.getPreview}/>);
    return (
        <div className={css.tree}>
            <div className={css.control_panel}>
                <TreeFilter callback={(title)=>setTreeFilterTitle(title)}/>
                <div className={css.instruction_link} onClick={toggle}>Инструкция</div>

            </div>
            {isOpen && <TreeInstruction content={props.instructionContent}/>}

            {categories}
        </div>
    )
}

export default Tree;