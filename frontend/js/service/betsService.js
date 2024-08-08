import {athlete} from  "../mockBets.js";
//let index = 1; if we have pages
async function fetchData() {
    const api = "http://localhost:8080/hackaton/api/athlete";
    
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok || body.Response === "False") {
      throw new Error(body.Error);
    }
    console.log("end of fetch")
    console.log(body);
    
    return body;
  }
  
  async function getSports() {
    return await fetchData();
  }

  async function getSport(index) {
    try{
       const bet = await fetchData();
        console.log(bet[index]);
       return bet[index];
    }catch{
      console.error("error fetching episode", error);
      throw error;
    }
   
  }
  //if we have pages
  function incrementIndex() {
    index++;
  };
  
  export default {getSports, getSport};