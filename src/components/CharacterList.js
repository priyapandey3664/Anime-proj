import React from 'react';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
  return (
    <div className='character-list'>
      {characters.map((character) => (
        <div key={character.mal_id} className='character-item'>
          <img src={character.images.jpg.image_url} alt={character.name} />
          <div className='character-info'>
            <p>{character.name}</p>
            <div className='character-likes'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                width="16px"
                height="16px"
                className='heart-icon'
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              {character.favorites}
              <div className='separator'></div>
            </div>
            
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
            className='arrow-icon'
          >
            <path d="M12 2l8 8-8 8-1.41-1.41L16.17 12H2v-2h14.17L10.59 3.41 12 2z"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
