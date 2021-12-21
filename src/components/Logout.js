import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {        
    axiosWithAuth().post('http-link')
        .then(res => {
            localStorage.removeItem('token');
            window.location.pathname = '/login'
        })
        .catch(err => console.log(err))
        return(<div></div>);
}



export default Logout;



/*left the post link blank since that would be the base url*/