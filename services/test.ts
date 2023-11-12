import axios from "axios";

export const fetchAPI = () => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { query: '{ characters{info{count} results{id name gender image}}}' }
      )
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.data.characters.results)
    });
  }




const test = async () =>{
    try{
        const response = await axios.post("https://rickandmortyapi.com/graphql",
        {
            query:GRAPH_QUERY            
        }
        ,
        {
            headers:{
            'Content-Type' : 'application/json',
            },
            method:'POST',
        },);

        return response.data;
    }catch(error){
        console.log("!!!Error")
        console.log(error)
    }
}

const GRAPH_QUERY = `
query {
    characters(page:2, filter :{name:"rick"}){
        info{
            count
        }
        results{
            name
        }
    }
}
`;

export default test;