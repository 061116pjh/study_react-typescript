import axios from 'axios';
import {useState, useEffect} from 'react';

const Main = () => {
  // const getData = async () => {
  //   let response = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
  //   return response.data;
  // }
  // let res = getData();
  // res.then((data) => {
  //   console.log(data);
  // });
  // const DATA = getPokemonData;
  // console.log(getPokemonData);

  const [data, setData] = useState<Array<{name: string; url: string}[]>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const getData = async () => {
      try{
        setError(null);
        setData([]);
        setLoading(true);
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        setData(response.data.results);
      }catch(error){
        setError(error);
      }
      setLoading(false);
    }
    getData();
  }, []);

  if(loading) return <div>loading...</div>;
  if(error) return <div>error!!!</div>
  if(!data) return null;

  data.map(({url}) => {
    console.log(url);
  });
  
  // return(
  //   <ul>
  //     {data.map(item => {
  //       return <li></li>;
  //     })}
  //   </ul>
  // );
  return <></> ;
}

export default Main;