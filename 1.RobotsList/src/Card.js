import React, {  } from 'react';

const Card = ({name, email}) => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3">
            <h1>Robots List</h1>
            <img src={`https://robohash.org/${name}?200x200`} alt='its a profil pic' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;