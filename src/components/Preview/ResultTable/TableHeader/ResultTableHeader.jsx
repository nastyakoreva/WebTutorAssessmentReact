import React from "react";
import css from './ResultTableHeader.module.css'

export const ResultTableHeader=(props)=>{
    return(
        <div className={css.headerContainer}>
            <div className={css.headerResultBlock}>Таблица результатов</div>
            <div className={css.headerStatusesBlock}>
                <div className={css.headerStatusesBlockItem}>
                    <p>Самооценка</p>
                    <div className={css.scoreBlock}>
                        <div>Балл</div>
                        <div>Комментарий</div>
                    </div>
                </div>
                <div className={css.headerStatusesBlockItem}>
                    <p>Оценка руководителя</p>
                    <div className={css.scoreBlock}>
                        <div>Балл</div>
                        <div>Комментарий</div>
                    </div>
                </div>
            </div>
        </div>
    )
}