import { useEffect, useState } from "react";
import apiRequest from "../apiRequest";

export default function useRequest(method, address, params) {

    const [data, setData] = useState();

    useEffect(() => {
        apiRequest(method, address, params)
            .then(response => {
                console.log(response);
                setData(response.data.data);
            })
            .catch(error => console.log(error))
    }, []);

    return data;
}