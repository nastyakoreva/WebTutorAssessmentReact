import React from "react";
import css from './ResultTableHeader.module.css'

export const ResultTableHeader=({isHasBoss, ...props})=>{
let headerWithoutBoss = isHasBoss?'':css.headerWithoutBoss
    return(
        <div className={`${css.headerContainer} ${headerWithoutBoss}`}>
            <div className={css.headerResultBlock}>Таблица результатов</div>
            <div className={css.headerStatusesBlock}>
                <div className={css.headerStatusesBlockItem}>
                    <p>Самооценка</p>
                    <div className={css.scoreBlock}>
                        <div>Балл</div>
                        <div>Комментарий</div>
                    </div>
                </div>
                {
                    isHasBoss && 
                    <div className={css.headerStatusesBlockItem}>
                        <p>Оценка руководителя</p>
                        <div className={css.scoreBlock}>
                            <div>Балл</div>
                            <div>Комментарий</div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}