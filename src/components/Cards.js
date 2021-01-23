import React, { useEffect, useRef, useState } from 'react';

export default function Cards({ loading, villagers }) {
  let clicked = {
    firstClick: '',
    secondClick: ''
  }
  const [matchChoice, setMatchChoice] = useState(clicked);
  const [choiceCount, setChoiceCount] = useState(1)
  const [isMatch, setIsMatch] = useState(false);
  const villagersList = useRef(villagers);
 console.log("villagersList ", villagersList);
  
  const handleClick = (id) => {
    setChoiceCount(choiceCount + 1);
    if(choiceCount % 2 !== 0) {
      setMatchChoice({...matchChoice, firstClick: id});
    } else {
      setMatchChoice({...matchChoice, secondClick: id});
    }    
  }

  useEffect(() => {
    const ids = Object.values(matchChoice);
    setIsMatch(ids[0] === ids[1]);
  }, [matchChoice])

  useEffect(() => {
    //TODO: come up with better way to remove villagers rather than looping thru list
    if(isMatch) villagersList.current = villagersList.current.filter(villager => villager.id !== matchChoice.firstClick && villager.id !== matchChoice.secondClick)
  }, [isMatch, matchChoice])


  return (
    <>
      {loading && 'Loading...'}
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'wrap', justifyContent: 'center'}}>
        {villagersList && villagersList.current.map((villager, idx) => (
          <button onClick={() => handleClick(villager.id)} key={idx}>
            <Card image={villager.icon_uri} name={villager.name['name-USen']} id={villager.id} key={idx} />
          </button>
        ))}
      </div>
    </>
  )
}

function Card({ image, name, id }) {
  return (
    <span>
      <img src={image} alt={name} value={id} />
    </span>
  )
}
