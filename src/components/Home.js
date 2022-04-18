import React from 'react';
import Users from "./Users";
import useFetch from "../hooks/useFetch";
import {usersUrl} from "../API/Api";

function Home() {
    const [data] = useFetch(usersUrl)
    return (
        <div>
            <ul>
                {data?.map(item => (
                    <Users key={item.id}  id1={item.id} name={item.name} />
                ))}
            </ul>
        </div>
    );
}

export default Home;