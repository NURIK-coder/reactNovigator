import axios from "axios"
import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'

function Login(){
   const navigate = useNavigate();
    function login(e){ 
    const form = e.target;
    const username = form.username;
    const password = form.password;
        const data = {
            username: username.value,
            password: password.value                                                                                         
        }
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/users/login/', data

         ).then((response)=>{
            localStorage.setItem('token', response.data.access);
            navigate('/home');
        }).catch((err)=>{
            console.log(err);
        })
    };
    return(
        
        <>
        <form action="" id="login_form" onSubmit={login} className="flex flex-col text-center w-[300px] bg-[yellow] gap-5 p-5 rounded-[20px] border-[3px] border-solid border-[green]">
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <input className="border rounded-[10px] border-solid border-[black]" type="text" name="username" id="username" />
            <label htmlFor=""></label>
            <input className="border rounded-[10px] border-solid border-[black]" type="password" name="password" id="password" />

            <button>Login</button>

        </form>
        <Link to='/register'>Click, if you don't have account</Link>

        </>
    )
}
export default Login;