import React from 'react';
import '../../pages/index.css';
import calledusCover from '../../files/calleduscover.jpg';


const EnemyTab = () => {
  return (
    <div>
      <h2 class='header'>High-Grade Level</h2>
      <div class='intro'>
        <img class='bookcover' src={calledusCover} alt="They Called Us Enemy Cover" />
        <div class='bookdesc'>
          <p class='desc'> They Called Us Enemy is a graphic novel of George Takei’s story of how he went through the incarceration camps at a young age and how their family and the people around them dealt through the events. </p>
          <a class='desc' href='/theycalledusenemy'>Link to article</a>
        </div>
      </div>
    </div>
  );
}

export default EnemyTab;