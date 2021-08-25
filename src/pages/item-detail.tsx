

import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const ItemDetailComponent = () => {
    const [detailsData, setDetailsData] = useState<any>({});
    const params = useParams<any>();

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/item/' + params.id   +'.json?print=pretty').then((detailsData) => {
            setDetailsData(detailsData.data);
        })
    }, [params]);

    return <div>
            <p>Details About Ids</p>
            {detailsData &&
            <>
                <div>By : {detailsData.by}</div>
                <div>Id : {detailsData.id}</div>
                <div>Score : {detailsData.score}</div>
                <div>Time : {detailsData.time}</div>
                <div>Time : {detailsData.time}</div>
                <div>Title : {detailsData.title}</div>
            </>
            }
        </div>
}

export default ItemDetailComponent;