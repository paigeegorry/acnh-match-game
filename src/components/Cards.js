import React from 'react';

export default function Cards({ loading, villagers }) {
  return (
    <>
      {loading && 'Loading...'}
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'wrap', justifyContent: 'center'}}>
        {villagers && villagers.map(villager => (
            <Card image={villager.icon_uri} />
        ))}
      </div>
    </>
  )
}

function Card({ image }) {
  return (
    <img src={image}  />
  )
}
