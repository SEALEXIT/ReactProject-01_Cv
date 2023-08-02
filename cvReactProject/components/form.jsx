import Reac,{ useState} from 'react'
import Namer from './Namer'
import Experience from './Experience'

function Form() {

  return (
   <div className='my-form'>
  <Namer/>
  <Experience/>
   </div>
  )
}
export default Form