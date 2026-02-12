import React, { useState } from 'react'
import './QuestionWrapper.css'
import InputNLabel from '../Auth/InputNLabel'
export const QuestionCreate = () => {
let [currentType,setCurrentType]=useState({questionInput:"",optionsInput:"",ans:""})
let [questionList,setQuestionList]=useState([])
// let [currentOptions,setCurrentOption]=useState([])
let valueGetFromInput=(id,value)=>{
setCurrentType({...currentType,[id]:value})
}
let addquestion=()=>{
    let {questionInput,optionsInput,ans}=currentType
    console.log(questionInput,optionsInput);
    
    if(questionInput&&optionsInput&&ans){
        console.log(optionsInput.includes('-'));
        
        if(optionsInput.includes('-')&&optionsInput.split('-').every(a=>a.length>=1)&&optionsInput.split('-').length>=4){
            let options=optionsInput.split('-')
            setCurrentOption(options)
            let data={question:questionInput,options}
            console.log(data);
            
        }else{
            alert("enter atlease 2 optiones ")
        }
    }else{
        alert("please type question and answer")
    }
    
}
let getAnswerOptions=(letter,index,event)=>{
let answer={letter,index,value:event.target.value}
setCurrentType({...currentType,ans:answer})

}
let submitData=()=>{

}

  return (
    <div className='questionWrapper'>
        <div className='qustionForm'>
<p className='rule'>Maximum 10 Question</p>
<p className='rule'>Enter Options use - </p>
<div className='form-question'>
    {array.map((char,ind)=>{
        return <InputNLabel {...char} onChange={(e)=>{valueGetFromInput(char.inpId,e.target.value)}} inpValue={currentType[char.inpId]} key={ind}/>
    })}
</div>
<p style={{marginTop:"3px"}}>Answer</p>
<div className='optionBox'>
{currentType.optionsInput.includes('-')&&currentType.optionsInput.split('-').every(a=>a.length>=1)&&currentType.optionsInput?.split('-').map((a,b)=>
{
    let letter=String.fromCharCode(65+b)
return <span key={b}><label>{letter})</label><input type='radio' name='ansOption' className='radioAns' value={a} onChange={(e)=>getAnswerOptions(letter,b,e)} /></span>
})}</div>
{/* <label>A.</label><input type='radio' name='ansOption' className='radioAns'/><label>B.</label><input type='radio' name='ansOption' className='radioAns'/>
<label>C.</label><input type='radio' name='ansOption' className='radioAns'/><label>D.</label><input type='radio' name='ansOption' className='radioAns'/> */}
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
        <button className='questionAddBtn' onClick={addquestion}>Add</button>
        <button className='questionAddBtn' onClick={submitData}>Submit</button>
        </div>
        </div>
    </div>
  )
}

let array=[{containerCls:"questionInputContainer",
 inpId:"questionInput",
label:"Question",
 inpType:"text",
inpPlaceholder:"enter question     ",
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
errormsg:""},
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