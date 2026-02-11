import React from 'react'
import './QuestionWrapper.css'
import InputNLabel from '../Auth/InputNLabel'
export const QuestionCreate = () => {

  return (
    <div className='questionWrapper'>
        <div className='qustionForm'>
<p className='rule'>Maximum 10 Question</p>
<p className='rule'>Enter Options use - </p>
<div className='form-question'>
    {array.map((char,ind)=>{
        return <InputNLabel {...char}/>
    })}
</div>
    <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}><button className='questionAddBtn'>Add</button></div>

        </div>
    </div>
  )
}

let array=[{containerCls:"questionInputContainer",
 inpId:"questionInput",
label:"Question",
 inpType:"text",
inpPlaceholder:"",
inpCls:"optioninpcls",
error:"",
errormsg:""},
{containerCls:"questionInputContainer",
 inpId:"optionsInput",
label:"Options",
 inpType:"text",
inpPlaceholder:"op1-op2-op3-op3",
inpCls:"optioninpcls",
error:"",
errormsg:""}
]

// containerCls
// inpId
// label
// inpType
// inpValue
// inpPlaceholder
// onChange
// inpCls
// error
// errormsg