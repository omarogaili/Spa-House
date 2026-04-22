import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export default function inloggning(){
    const [data, setdata] = useState();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


        const singIn= async (e: React.FormEvent) =>{
            e.preventDefault();
            const response = await fetch('http://localhost:8080/api/signIn', {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    username : userName,
                    password : password
                }),
                credentials : "include"
            }
        )
        if(!response.ok){
            throw new Error (`HTTP error! Status: ${response.status}`)
        }
        const result = await response.text();
        console.log(result);
        }

    return(
        <>
        <form onSubmit={singIn}>
        <input value={userName} onChange={e => {setUserName(e.target.value)}} placeholder="username"></input>
        <input value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Password"></input>
        <button type="submit">Log in</button>
        </form>
        </>
    )
}