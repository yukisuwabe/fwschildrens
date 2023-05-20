import React from 'react';
import backgroundImg from '../files/fws_background.jpeg';
import './index.css'
import baseballCover from '../files/baseballtitle.jpeg';
import sylviaCover from '../files/sylviaandakicover.jpeg';
import calledusCover from '../files/calleduscover.jpg';

export const Home = () => {
  return (
    <body>
      <div class='home'>
        <div style={{
          backgroundImage: 'url(' + backgroundImg + ')',
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          color: "#f5f5f5",
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'grey',
          backgroundBlendMode: 'multiply'
        }} >
          <h1 id='title'>Japanese American Incarceration in Children's Books</h1>
        </div>
        <h2 class='header'>What is the Japanese Incarceration?</h2>
        <p class='desc'>The Incarceration of Japanese Americans happened during World War II while the United States was at war with Japan. Out of fear that anyone of Japanese decent were traitors, measures were made to strip them of their rights. In 1942, President Roosevelt signed the Executive Order 9066, which sent approximately 120,000 people of Japanese decent to Internment camps which imprisoned them. Most people that were sent to the camps were US Citizens and this order forced them to get rid of almost all of their belongings and their whole life away.</p>
        <div style={{
          backgroundColor: '#D5D5D5'
        }}>
          <h2 class='header' style={{ color: 'black' }}>Why is it important?</h2>
          <p class='desc' style={{ color: 'black' }}>
            Often times in history classes, the topic of Japanese American Incarceration is overlooked and may not be taught in depth or at all. In order for the future generations to learn from the mistakes of our past it is integral for the children of the United States to know and be educated about the Incarceration, which is one of the civil rights violation that the United States has commited.
          </p>
        </div>
        <h2 class='header'>Elementary-Grade Level</h2>
        <div class='intro'>
          <img class='bookcover' src={baseballCover} alt="Baseball Saved Us Cover" />
          <div class='bookdesc'>
            <p class='desc'> Baseball Saved Us is a picture book that features a young boy who gets sent to the Incarceration camp and learns to play baseball and connects with the people around him through baseball.</p>
            <a class='desc' href='/baseballsavedus'>Link to article</a>
          </div>
        </div>
        <h2 class='header'>Middle-Grade Level</h2>
        <div class='intro'>
          <img class='bookcover' src={sylviaCover} alt="Sylvia & Aki Cover" />
          <div class='bookdesc'>
            <p class='desc'> Sylvia & Aki is a book about two girls, Sylvia and Aki, and their friendship. Sylvia is a Mexican American girl that struggles with racism and school segregation and fights for her rights. Aki is about a girl who’s family gets sent to the incarceration camps. </p>
            <a class='desc' href='/baseballsavedus'>Link to article</a>
          </div>
        </div>
        <h2 class='header'>High-Grade Level</h2>
        <div class='intro'>
          <img class='bookcover' src={calledusCover} alt="They Called Us Enemy Cover" />
          <div class='bookdesc'>
            <p class='desc'> Baseball Saved Us is a picture book that features a young boy who gets sent to the Incarceration camp and learns to play baseball and connects with the people around him through baseball.</p>
            <a class='desc' href='/baseballsavedus'>Link to article</a>
          </div>
        </div>
      </div>
    </body >
  )
}

export default Home;