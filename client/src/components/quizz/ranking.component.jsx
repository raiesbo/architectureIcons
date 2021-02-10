import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/store.component";

import "./ranking.styles.css";

export default function Ranking() {

    const [state] = useContext(Context);
    const [ranking, setRanking] = useState([])

    useEffect(() => {

        fetch(`${state.url}champion`)
            .then(res => res.json())
            .then(data => setRanking(data))
            .catch(err => console.log(err))

    }, [state.url])


    const sortedRanking = ranking
        .sort((a, b) => b.score - a.score)
        .map((item, id) => {

            return (
                <tr>
                    <td>{id + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.score}</td>
                </tr>
            )
        })


    return (

        <div className="ranking-container">

            <h3 className="section-title">Top scores:</h3>

            <table>
                <tr>
                    <th>Rank</th>
                    <th>User</th>
                    <th>Score</th>
                </tr>
                {
                    sortedRanking.splice(0, 10)
                }
            </table>

        </div>
        
    )
}