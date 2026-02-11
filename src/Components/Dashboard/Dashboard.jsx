import React,{useCallback,useRef,useState,useContext} from 'react'
import './dashboard.css'
import { FaHeart,FaBell,FaPlus } from 'react-icons/fa'
import { MyContext } from '../../App'
import { QuestionCreate } from './QuestionCreate'

export const Dashboard = () => {
    let {questionCreateActive,setQuestCreateActive}=useContext(MyContext)
  return (
    <div className='dashboard'>
        <Nav names={{p1:"malik",p2:"manisha"}}/>
        {questionCreateActive?<QuestionCreate/>:""}
    </div>
  )
}

let Nav=(Props)=>{
let {p1,p2}=Props.names;
let {questionCreateActive,setQuestCreateActive}=useContext(MyContext)
let plusRef=useRef(null)
console.log(questionCreateActive)

let questionCreate = useCallback(() => {
     if (plusRef.current.classList.contains('active-plus')) 
        { plusRef.current.classList.remove('active-plus')
            setQuestCreateActive(false)
        } 
     else { 
        plusRef.current.classList.add('active-plus') 
          setQuestCreateActive(true)
    } }, []);


    return(
        <nav><span title="Create Question For Partner"><FaPlus  fontWeight="900" className='btn-question ' onClick={questionCreate} ref={plusRef}/></span>
        <span><FaBell color='red'/></span>
<div className='navnamesec'><p>Welcome {Capitalize(p1)} <FaHeart color="red" size="13px"/> {Capitalize(p2)}</p></div>
        </nav>
    )
}



let Capitalize = (n) => {
  return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
};


