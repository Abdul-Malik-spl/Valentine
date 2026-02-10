import React from 'react'

export default function InputNLabel(props) {
  return (
    <div className={props.contsinerCls}>
      <label htmlFor={props.inpId}>{props.label}</label>
        <input type={props.inpType} value={props.inpValue}placeholder={props.inpPlacholder} id={props.inpId} onBlur={props.getFun} className={props.inpCls}/>
    </div> 
  )
}

/*
inpId,label,inpType,inpValue,inpPlacholder,getFun,contsinerCls,inpCls
*/ 