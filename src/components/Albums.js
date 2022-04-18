import React from 'react';
import useFetch from "../hooks/useFetch";
import {albumsUrl} from "../API/Api";
import Photos from "./Photos";

function Albums() {
    const [data, loading, error] = useFetch(albumsUrl);
    if (loading) return <h1>Loading...</h1>
    if(error) console.log(error)

    return (
        <div>
            <h2>TITLES OF ALBUMS</h2>
            {data?.map(
                item =>
                    <Photos key={item.id} userId={item.userId} title={item.title}/>
     )}
        </div>
    );
}

export default Albums;
