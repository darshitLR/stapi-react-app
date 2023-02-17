import React, { useCallback, useEffect, useState } from "react";
import { Axios } from "../../../axiosHelper/index";
import AnimeCard from "../../../components/common/AnimeCard";

const AnimeList = () => {
  const [state, setState] = useState([])
  console.log('state: ', state);
  const [isLoading, setLoading] = useState(true)

  const getData = useCallback(async () => {
    try {
      const res = await Axios.Get('/anime?populate=*')
      if (res) {
        setState(res.data)
      }
    } catch (error) {
      // error handling
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])


  if (isLoading) {
    return <h1 className="fs-4xl">Please check something wrong !!!</h1>
  }

  return (
    <div>
      {state && state.map(val => {
        console.log('val.id: ', val.id);
        return (<AnimeCard key={val.id} anime={val.attributes} position={val.id%2===0 && "true"}/>)
      })}
    </div>
  );
};

export default AnimeList;
