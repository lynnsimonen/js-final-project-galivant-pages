import axios from "axios";

class Countries {
    static list (){
        let endpoint = 'https://restcountries.com/v3.1/all';
        let params = {
            // term: keyword,
            // limit: 36,
        }
        let config = {
            params: params,
        }
        return axios.get(endpoint, config)
    }
}

export{Countries};