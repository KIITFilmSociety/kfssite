import * as React from 'react'
import Navbar from '../components/Navbar1';
import {useState} from 'react';
import "../styles/eventwork.css"
function Eventwork(){


const [sheet, setSheet] = useState("")
console.log(sheet);
const handleVal=e=>{

    setSheet(e.target.value) 
   console.log(e)
   }


return(
    <div className="event-work">
    <Navbar/>

  <select onChange={handleVal} className="btn bg-danger filter">
    <option className="ng-danger" value={" "}></option>
    <option className="ng-danger" value={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTp7lE-IlA3zgKLK3J5HlhC527ZbVw6X9tZDEN8qFpxiyp9SC2G-j-XxNBp2oDXYxnX70jg8Fc924Jd/pubhtml?gid=663744370&amp;single=true&amp;widget=true&amp;headers=false"}>option 1</option>
     <option className="ng-danger" value={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTp7lE-IlA3zgKLK3J5HlhC527ZbVw6X9tZDEN8qFpxiyp9SC2G-j-XxNBp2oDXYxnX70jg8Fc924Jd/pubhtml?gid=524817967&amp;single=true&amp;widget=true&amp;headers=false"}>option 2</option>
     <option className="ng-danger" value={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTp7lE-IlA3zgKLK3J5HlhC527ZbVw6X9tZDEN8qFpxiyp9SC2G-j-XxNBp2oDXYxnX70jg8Fc924Jd/pubhtml?gid=1018719009&amp;single=true&amp;widget=true&amp;headers=false"}>option 3</option>
    </select>
<div className="sheet-window">
<iframe title=" " src={sheet}/>


</div>


</div>


)
}


export default Eventwork;