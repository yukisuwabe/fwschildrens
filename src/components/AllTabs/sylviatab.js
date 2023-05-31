import React from 'react';
import '../../pages/index.css';
import sylviaCover from '../../files/sylviaandakicover.jpeg';


const SylviaTab = () => {
  return (
    <div>
      <h2 class='header'>Middle-Grade Level</h2>
      <div class='intro'>
        <img class='bookcover' src={sylviaCover} alt="Sylvia & Aki Cover" />
        <div class='bookdesc'>
          <p class='desc'> Sylvia & Aki is a book about two girls, Sylvia and Aki, and their friendship. Sylvia is a Mexican American girl that struggles with racism and school segregation and fights for her rights. Aki is about a girl who’s family gets sent to the incarceration camps. </p>
          <a class='desc' href='/sylvia&aki'>Link to article</a>
        </div>
      </div>
    </div>
  );
}

export default SylviaTab;