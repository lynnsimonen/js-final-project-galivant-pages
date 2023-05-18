import axios from "axios";

class RestCountries {
    static listCountryFlags (){
        let endpoint = 'https://restcountries.com/v3.1/all?fields=name,flags';
        let params = {
        }
        let config = {
            params: params,
        }
        return axios.get(endpoint, config)
    }
    static listCountryNames (){
        let endpoint = 'https://restcountries.com/v3.1/all?fields=name';
        let params = {
        }
        let config = {
            params: params,
        }
        return axios.get(endpoint, config)
    }

    static listCountryFields (){
        let endpoint = 'https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,language,' +
            'area,translations,borders,population,timezones,flags,coatOfArms';
        let params = {

        }
        let config = {
            params: params,
        }
        return axios.get(endpoint, config)
    }

    static countryFlag (){
       let endpoint = 'https://restcountries.com/v3.1/all?fields=name,flags';
        let params = {

        }
        let config = {
            params: params,
        }
        return axios.get(endpoint, config)
    }

    static listAll (){
        //let country = this.trip.travelCountry
        let endpoint = 'https://restcountries.com/v3.1/all';
        let search = endpoint
        let params = {
            //term: country,
        }
        let config = {
            params: params,
        }
        return axios.get(search, config)
    }
}

export{RestCountries};