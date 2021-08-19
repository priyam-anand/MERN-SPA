import React,{useContext, useEffect} from 'react'
import { useHistory } from 'react-router';
import {userContext} from '../App';

const Logout = () => {

    const {state,dispatch} = useContext(userContext);

    const history = useHistory();
    useEffect(() => {
        fetch('/logout',{
            method : "GET",
            credentials: 'include',
            headers:{
                Accept:"Application/json",
                "Content-Type":"Application/json",
            }, 
        }).then((res)=>{

            dispatch({type:"USER",payload:{val:false,id:""}});

            setTimeout(history.push('/login'), 1500);

            if(res.status !== 200)
            {
                const err=new Error(res.err);
                throw err;
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <h1>
                Logging out....
            </h1>
        </>
    )
}

export default Logout;
