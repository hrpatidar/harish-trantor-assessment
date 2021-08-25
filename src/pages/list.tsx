import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const ListComponent = () => {
    const [ids, setIds] = useState([]);
    const history = useHistory();
    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((listIds) => {
            console.log(listIds);
            setIds(listIds.data);
        })
    }, [])

    const onIdClick = (item: string) => {
        history.push("/details/" + item);
    }

    const readyDomForIds = () => {
        return ids.map((item, key) => {
            return <div className="idsPad" key={key} onClick={() => onIdClick(item)}>{item}</div>
        })
    }
    return <div>
        <p>List of Ids</p>
        {readyDomForIds()}
        </div>
}

export default ListComponent;