import axios from "axios"
import {Link} from 'react-router-dom'

function Register(){
    const form = document.forms[0]
    const username = form.username;
    const password = form.password;
    const firstName = form.firstName;
    function register(e){
        e.preventDefault()
        const data = {
            username: username.value,
            firstName: firstName.value,
            password: password.value
        }
        
        axios.post('http://127.0.0.1:8000/users/register/', data, {
            method:'POST',
            headers:{
                'Content-Type': 'application-json'
            }
        })
    }
    return(
        
        <>
        <form action="" id="register_form" onSubmit={register}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="">First name</label>
            <input type="text" name="firstName" id="firstName" />
            <label htmlFor=""></label>
            <input type="password" name="password" id="password" />
            <input type="button" value="Register" />
        </form>
        <Link to='/login'>Click, if you  have account</Link>

        </>
    )
}
export default Register;