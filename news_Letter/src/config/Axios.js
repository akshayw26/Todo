import axios from "axios";


const apiUrl = axios.create ({

    baseURL:"",
    timeout:5000,

})

export default apiUrl;