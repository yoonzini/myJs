import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Chahel"/>
            <Welcome name="Edit"/>

            <HitData/>

        </div>
    )
}

function HitData() {
    const [data, setData] = useState({ hits: [] });

    useEffect(async () => {
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );

        setData(result.data);
    });

    return(
        <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}

ReactDOM.render (
    <App/>, document.getElementById("root")
);