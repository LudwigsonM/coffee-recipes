import { useEffect, useState } from "react"
import { unstable_renderSubtreeIntoContainer } from "react-dom"
import { useNavigate } from "react-router-dom"

export default function ContactForm (){
    let navigate = useNavigate
    const [formData, setFormData] = useState({})


    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('') 
    const [terms, setTerms] = useState(false)
    const [validForm, setValidForm] = useState(false)
    //

    const contactFormInfo = {
        firstName: firstName,
        lastName: lastName,
        terms: terms,
    }

useEffect(() => {
    if(contactFormInfo.firstName && contactFormInfo.lastName && contactFormInfo.terms){
    setValidForm(true)
}
},[firstName,lastName,terms])



const sendData = (e) => {
    e.preventDefault()
    console.log('button pressed', contactFormInfo)
}

    return <>
    <form method="post">
        <label>First Name: 
        <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        onChange={event => setFormData({...formData, firstName: event.target.value} )} />
        </label>

        <br /> 
        <label>Last Name: 
        <input 
        type="text" 
        name="lastName" 
        onChange={event => setFormData({...formData,lastName:event.target.value}) }
        />
        </label>
        
        <br /> 
        <label>Address: 
        <input type="text" name="address" />
        </label>
        
        <br /> 
        <label>Zip: 
        <input type="string" name="zip" maxLength={5} />
        </label>
        
        <br /> 
        <label>State: 
        <select name="state">
            <option value=""></option>
            <option value="fl">FL</option>
            <option value="il">IL</option>
            <option value="ny">NY</option>
            <option value="nj">NJ</option>
        </select>
        </label>
        <br />
        
        <label>Date:
        <input type="date" name="" />
        <br />
        <label>
            Terms and conditions 
        <input type="checkbox" onChange={(event) => setTerms(event.target.checked)}/>
        </label> 
        <br />

        <label>
            <textarea name="message" cols="30" rows="10" />       
        </label>
        <br />
        <button onClick={(e) => sendData(e)} disabled={!validForm}>Submit</button>
        </label>
    </form>
    </>
}