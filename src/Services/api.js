import axios from "axios";
//29927000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;
 