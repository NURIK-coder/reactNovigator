import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error(){
    const navigate = useNavigate();
    console.log('asd');
    useEffect(()=>{
        navigate('/home');
    })
    
    return(
        <></>
    )
}

export default Error;
