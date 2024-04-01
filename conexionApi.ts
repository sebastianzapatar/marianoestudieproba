import axios from "axios";
( async()=>{
    async function getQuote(){
        const {data}=await 
        axios.
        get('https://api.breakingbadquotes.xyz/v1/quotes');
        return data;
    }
    const quote=await getQuote();
    console.log(quote);
    }
    
)();