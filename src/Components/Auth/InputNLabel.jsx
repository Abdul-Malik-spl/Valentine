import React from 'react'

export default function InputNLabel(props) {
  return (
    <div className={props.containerCls}>
      <label htmlFor={props.inpId}>{props.label}</label>
      <input
        type={props.inpType}
        value={props.inpValue}
        placeholder={props.inpPlaceholder}
        id={props.inpId}
        onChange={props.onChange}
        className={props.inpCls}
      />
      {props.error && <span className='errorTxt'>{props.errormsg}</span>}
    </div>
  )
}  

/*
containerCls
inpId
label
inpType
inpValue
inpPlaceholder
onChange
inpCls
error
errormsg
*/ 