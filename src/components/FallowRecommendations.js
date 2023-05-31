import axios from "axios";
import { useEffect, useState } from "react";
import './FallowRecommendations.css';

const FallowRecommedations = (props) => {
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
    };

    const fallow = (id) => {
        axios.post("https://akademia108.pl/api/social-app/follows/follow", {
            leader_id: id
        }).then((req)=> {
            console.log(req);
            // props.setPosts(req.) 
        })
        .catch ((error) => {
            console.error(error);
        });
    };
    

    useEffect(() => {
        getRecommedations();
    }, []);

    return (        
        <div className={props.user && `${`recommedationsPanel`}`}>                    
                {recommedations.map((recommedation) => {
                    return (                       
                            <div className="recommedationsList" key={recommedation.id}>
                                {props.user && (<div className="avatar">
                                    <img src={recommedation.avatar_url} alt={recommedation.username}></img>
                                </div>)}
                                {props.user && (<div className="author">{recommedation.username}</div>)}
                                {props.user && (<button className="btn" key={recommedation.id} onClick={() => fallow(recommedation.id)} >Follow</button>)}
                            </div>                                                                                                                                    
                    );                 
                })}                
        </div>
    );
};

export default FallowRecommedations