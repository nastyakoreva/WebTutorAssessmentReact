import React from 'react'
import classNames from 'classnames';
import styles from './Button.module.css'
/**
 * receives next props: 
 * variant: info, primary, secondary, danger
 * callback = function
 * @returns void
 */
export const Button = ({callback, btnClass, children}) => {
    const onClickHandler=()=>{
        callback()
    }
  const btnClasses = classNames({
    [styles.btn]: true,
    [styles.default]: btnClass==undefined,
    [styles.dark]: btnClass=='dark',
    [styles.info]: btnClass=='info',
    [styles.danger]: btnClass=='danger',
    [styles.base]: btnClass=='base',
    [styles.success]: btnClass=='success',
});
  return (
    <button className={btnClasses} onClick={onClickHandler}>{children}</button>
  )
}