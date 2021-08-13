import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import Card from '../components/oldcard'
import roles from './Roles'
import Navbar from '../components/Navbar1';
import '../styles/members.css'
import findCodd from '../helper/helper';

function Members () {
  const [persons, setPersons] = useState([])
  const [co1, setCo1] = useState([])
  const [co2, setCo2] = useState([])
  const [search, setSearch] = useState('')
const co="Coordinator";
const assi="Director"


const fireSer=(val,arr) => {
  
    firebase
          .firestore()
          .collection('UserInfo')
          .where('Position', '==', `${val}`)
          .get()
          .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
      console.log(doc.data())
      const person = {
        FullName: doc.data().FullName,
        Position: doc.data().Position,
        Description: doc.data().Description,
        Instagram: doc.data().Instagram,
        Linkedin: doc.data().Linkedin,
        Email: doc.data().Email,
        DP: doc.data().DP
      }
      arr.push(person)
    })
    console.log(val);
    
    setPersons(arr)
  })
  }

let details=[];
let coord=[];
let assistCoord=[];
findCodd(co,coord);

findCodd(assi,assistCoord);

console.log(coord)
  useEffect(
	()=>{

fireSer(search,details);
setCo1(coord);
setCo2(assistCoord);
  }
    ,
		[search]
	)
  const handleVal=e=>{

    setSearch(e.target.value) 
   console.log(e)
   }
  return (
    <div className="members">
      <Navbar/>
      
          
             <div className="filter"> 
              <select onChange={handleVal} className="btn bg-danger">
                  {roles.map((role,index)=>(

                    <option className="bg-success" key={index}  value={role.text}>{role.text}</option>
                  ))
                  }
              </select>
              </div>
              <div class="container">

        
        <div>
        <div className="filter">
          {co1.map((val, key) => {
            return (
              <div key={key}  className="coord">
                <Card
                  name={val.FullName}
                  job={val.Position}
                  about={val.Description}
                  iglink={val.Instagram}
                  lilink={val.Linkedin}
                  email={val.Email}
                  image={val.DP}
								/>

              </div>
              
            )
          })}
          </div>
          </div>
            <div>
         
          {co2.map((val, key) => {
            return (
              <div key={key}  className="assi-coord">
                <Card
                  name={val.FullName}
                  job={val.Position}
                  about={val.Description}
                  iglink={val.Instagram}
                  lilink={val.Linkedin}
                  email={val.Email}
                  image={val.DP}
								/>

              </div>
              
            )
          })}
          </div>
          <div  className="row ">
      {persons.map((val, key) => {
            return (
              <div key={key} id='persons' className="">
                <Card
                  name={val.FullName}
                  job={val.Position}
                  about={val.Description}
                  iglink={val.Instagram}
                  lilink={val.Linkedin}
                  email={val.Email}
                  image={val.DP}
								/>

              </div>
              
            )
          })}
          </div>
        </div>
        </div>
      
   
  )
}

export default Members;
