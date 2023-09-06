import axios from "axios";

    const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
    const options = {
        url: BASE_URL,
        params: {
            maxResults: '50',        },
        headers: {
          'X-RapidAPI-Key': '8bed49808cmsh94f655036ea141bp182abcjsn7579b721b198',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }


    export  const fetchFromApi = async(url)=>{
      try{
        const {data}  = await axios.get(`${BASE_URL}/${url}`, options) ;

        return data;
      }catch(err){
        return err;
      }
           
    }

