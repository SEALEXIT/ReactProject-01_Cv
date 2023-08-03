import React, {useEffect, useState} from 'react'
import GeneralDisplay from './GeneralDisplay'

export default function General() {

     const [name, setName] = useState(() => '')
     const [career, setCareer] = useState(() => '')
     const [email, setEmail] = useState(() => '')
     const [contact, setContact] = useState(() => '')
     const [marital, setMarital] = useState(() => '')
     const [data, showData] = useState(() => '')

    const handleName = event => setName(prevName => {
        prevName = event.target.value
        return prevName
    })
    const handleCareer = event => setCareer(prevCareer => {
        prevCareer = event.target.value
        return prevCareer
    })

    const handleEmail = event => setEmail(prevemail => {
        prevemail = event.target.value
        return prevemail
    })
    const handleContact = event => setContact(prevContact => {
        prevContact = event.target.value
        return prevContact
    })
    const handleMarital = event => setMarital(prevMarital => {
        prevMarital = event.target.value
        return prevMarital
    })
    const handleClick = () => showData(prevdata => {
        let generalData = {name: name, career: career, email: email, contact: contact, marital: marital}
        prevdata = generalData
        return prevdata
    })
   
    
  return (
    <div id='generalData'>
     <form action="" id='form-general'>
   
     <span className="heading"><i class="fa fa-user-plus" />
     <h2 className='geninf'>General Information</h2> </span>

   <span className="info"><label className = 'label' htmlFor="cvname">Enter Name</label>
   <input className='input'  onChange = {handleName} type="text" id='cvname' required /> </span> 

<span className="info"><label  className = 'label' htmlFor="career">Career</label>
<input className='input' onChange={handleCareer} type="text" name="career" id="career" required/></span> 

<span className="info"> <label className = 'label' htmlFor="cvemail">Email Adress</label>
<input className='input' onChange={handleEmail} type="email" name="cvemail" required id="cvemail" /></span> 

<span className="info"> <label className = 'label' htmlFor="contact">Contact</label>
<input className='input' onChange={handleContact} type="number" required name="contact" id="contact" /></span> 

<span className="info"><label className = 'label' htmlFor="social-status">Marital Status</label>
<input className='input' onChange={handleMarital} type="text" id='social-status' />
</span> 

<input  className = 'btn-submit' onClick={handleClick} type="button" value="Submit" />

</form>

<GeneralDisplay userData = {data}/>
    </div>
  
  )
}
