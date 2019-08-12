import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${id}`} alt='robots' />
            <div>
                <h2>{name} Hello</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
