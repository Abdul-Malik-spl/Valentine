import React, { useState,useCallback } from 'react'
import './QuestionWrapper.css'
import InputNLabel from '../Auth/InputNLabel'
export const QuestionCreate = () => {
let [currentType,setCurrentType]=useState({questionInput:"",optionsInput:"",ans:""})
let [questionList,setQuestionList]=useState([])
let [error,setError]=useState(false)
let [errmsg,setErrmsg]=useState("")
// let [currentOptions,setCurrentOption]=useState([])



let valueGetFromInput=(id,value)=>{
if (id === "optionsInput") { 
    if(value.split("-").length - 1==4){
        return errorShow("only four options only enter")
    }
 }
  
setCurrentType({...currentType,[id]:value})
}

let addquestion=()=>{
    let {questionInput,optionsInput,ans}=currentType
    console.log(questionInput,optionsInput);
    
    if(questionInput&&optionsInput&&ans){
        console.log(optionsInput.includes('-'));
        
        if(optionsInput.includes('-')&&optionsInput.split('-').every(a=>a.length>=1)&&optionsInput.split('-').length<=4){
            let options=optionsInput.split('-')
            // setCurrentOption(options)
            let data={question:questionInput,options,ans}
            if(questionList.length<=10){
 setQuestionList([...questionList,data])
 setCurrentType({questionInput:"",optionsInput:"",ans:""})
            } else{
              
                  errorShow("Only Allowed 10 Questions")
            }
        }else{
          
              errorShow("Atleast give two options")
        }
    }else{
        errorShow("Please Enter All Filelds")
    }
    
}
let getAnswerOptions=(letter,index,event)=>{
let answer={letter,index,value:event.target.value}
setCurrentType({...currentType,ans:answer})

}

let errorShow=useCallback((msg)=>{
setError(true)
setErrmsg(msg)
},[])

let submitData=()=>{
    console.log(questionList);
    
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
      {questionList.length>0&&<section id='questionsShow'>
<h5 className='title'>Questions</h5>
        </section>}
        {error&&<ErrorComponent msg={errmsg} setError={setError} setErrmsg={setErrmsg}/>}
    </div>
  )
}

let array=[{containerCls:"questionInputContainer",
 inpId:"questionInput",
label:"Question",
 inpType:"text",
inpPlaceholder:"enter question",
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

function ErrorComponent({msg,setError,setErrmsg}){

    return <div className='errorPage'>
<div className='errorBox'>
<h4 style={{textAlign:"center"}}>{msg}</h4>
<button onClick={()=>{setError(false);setErrmsg("")}}>close</button>
</div>
    </div>
}

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