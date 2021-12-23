import React, { useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const { push } = useHistory();
    useEffect(()=>{
        axiosWithAuth().get()
            .then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                localStorage.removeItem('username');
                window.location.pathname = '/login';
                console.log(res)
            })
            .catch(err => console.error(err))
    },[])
        
        return(<div></div>);
}



export default Logout;



/*left the post link blank since that would be the base url*/