import axios from "axios";
import { useEffect, useState } from "react";
import './FallowRecommendations.css';

const FallowRecommedations = () => {
    const [recommedations, setRecommedations] = useState([]);

    const getRecommedations = () => {
        axios.post("https://akademia108.pl/api/social-app/follows/recommendations")
        .then((req) => {
            console.log(req.data);
            setRecommedations(req.data);
            console.log(recommedations);
        })
        .catch ((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getRecommedations();
    }, []);

    return (
        <div className="recommedationsList">            
                {recommedations.map((recommedation) => {
                    return (
                        <div className="recommedations">
                            <div className="avatar">
                                <img src={recommedation.avatar_url} alt={recommedation.username}></img>
                            </div>
                            <div className="author">{recommedation.username}</div>
                            <button className="btn">Follow</button>
                        </div>                        
                    )
                })}                          
        </div>
    );
};

export default FallowRecommedations