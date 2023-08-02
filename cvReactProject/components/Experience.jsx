import React,{useState} from 'react'


 function Experience() {
    const [company, setCompany] = useState(() => "")
    const [role, setRole] = useState(() => '')
    const [visible, changeVisibility] = useState(true)
   
   const handleCompany = (event) => setCompany(prevCompany => {
    return prevCompany = event.target.value
   })
let textelement;
    const handleRole = event => setRole(prevRole => {
            textelement = event.target.value
            console.log(` at text ${textelement}`)
            prevRole = event.target.value
        return prevRole
    })
    const showComapanyEditor = (event) => changeVisibility(prevVisioblity => {
        console.log(event.target.value)
       
        return prevVisioblity = !prevVisioblity
    })
  const handleUpdateRole = event => {
    console.log(` at button ${textelement}`)
  }
  return (
    <div className='experience'>
    <h2 className='practical-h2'>Practical Experience</h2>
    <div className="company">
         <p id = 'display-company'>{company}</p> 
         <p className='dates'>Entry Date</p>
        <input type="date" name="date" id="date-start" />
        <p className='dated'> Expiry date</p>
       <input type="date" name="date" id="date-end" />
    </div>
   
    <input type = 'button'className = 'btn-company' onClick={showComapanyEditor} value = 'Update Company'/>
    {visible ? (<input className = 'compx' onChange={handleCompany} id = 'company-name'  type="text" placeholder='Company X' />) : null}
    
   
    <h3 className='roles-duties'>Roles and Duties played  @{company}</h3>
    
    <ol>
        <li className='role1'>{role}</li>
    </ol>
    <input id ='roles' type="text" onChange={handleRole} placeholder='1. managed 1, 2 and 3 at comapny x ...' />
    
   
    <input className='btn-role'  onClick = {handleUpdateRole} type="button" value="Add Role" />
    

   
    
   
    </div>
  )
}
export default Experience
