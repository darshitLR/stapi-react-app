import React from "react";
import { useLoaderData } from "react-router-dom";
import { http } from "../../../axiosHelper/instance";
import AnimeCard from "../../../components/common/AnimeCard";

const AnimeList = () => {
  const state = useLoaderData()

  return (
    <div>
      {state && state.map(val => {

        return (<AnimeCard key={val?.id} anime={val.attributes} position={val?.id % 2 === 0 && "true"} />)
      })}
    </div>
  );
};

export default AnimeList;


export const AnimeListLoader = async ({ request, params }) => {

  try {
    const res = await http.get('/anime?populate=*')

    if (res) {
      return (res?.data?.data)
    }
  } catch (error) {
    console.log('error: ', error.message);
  return ("Not Found", { status: 404 });  }
}