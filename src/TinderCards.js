import React,{ useEffect,useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import axios from './axios'

const TinderCards = () => {
    const [people,setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('/tinder/cards');
            setPeople(result.data);
        }

        fetchData();
    },[])
    // Empty brackets means when page loads, useEffect runs once
    // When we add a variable name in empty brackets, whenever variable changes, it will call whatever code inside useEffect code

    const swiped = (direction,nameToDelete) => {
        console.log('Removing ' + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }

    return (
        <div className="tinderCards">
            <div className="card_container">
                {
                    people.map((person) => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={["up","down"]}
                            onSwipe={(dir) => swiped(dir,person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})` }}
                                className='card'
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
}

export default TinderCards