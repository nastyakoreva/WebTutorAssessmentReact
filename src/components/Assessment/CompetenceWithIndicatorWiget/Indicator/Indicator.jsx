import React from "react";
import css from './Indicator.module.css'

const Indicator = (props) => {
    
    const indicator_scale = props.indicator_scales.find(x => x.competence_id === props.competence_id && x.id === props.id);
    const indicator_name = indicator_scale.name;
    const scales = indicator_scale.scales.scale.map(s => <label className={css.item} key={s.id}>
    <input type={"radio"} value={s.id} name={props.pa_doc.id} comp_id={props.competence_id} indicator_id={props.id} 
        mark_text={s.name} mark_value={s.percent} checked={s.id === props.mark} mark_type="indicator_mark"
        onChange={(e) => {props.sendCompetence(e.currentTarget)}}/>
        <i title={s.name}></i><div className={css.competence_desc}>{'name: ' + s.name}<br/>{'desc: ' + s.desc}</div>
    </label>);

    return <div className={css.indicator}>
        <div className={css.name}>{indicator_name}</div>
        <form className={css.scale_container}>
            {scales}
        </form>
    </div>

}

export default Indicator;