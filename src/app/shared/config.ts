let isProd:boolean = false;
let api_base_url = 'http://localhost:8080/bbd-stock-api/'

if(isProd){
    api_base_url = 'some prod api url';
}
export const API_BASE = api_base_url;
