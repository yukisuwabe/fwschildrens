import React from 'react';
import '../../pages/index.css';
import baseballCover from '../../files/baseballtitle.jpeg';

const BaseballTab = () => {
  return (
    <div>
      <h2 class='header'>Elementary-Grade Level</h2>
      <div class='intro'>
        <img class='bookcover' src={baseballCover} alt="Baseball Saved Us Cover" />
        <div class='bookdesc'>
          <p class='desc'> Baseball Saved Us is a picture book that features a young boy who gets sent to the Incarceration camp and learns to play baseball and connects with the people around him through baseball.</p>
          <a class='desc' href='/baseballsavedus'>Link to article</a>
        </div>
      </div>
    </div>
  );
}

export default BaseballTab;