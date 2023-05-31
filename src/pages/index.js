import React from 'react';
import backgroundImg from '../files/fws_background.jpeg';
import './index.css'
import Tabs from '../components/TabComponent/tabs';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Footer from '../components/footer';

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
        <ScrollAnimation animateIn='animate__fadeIn'>
          <h2 class='header'>What is the Japanese Incarceration?</h2>
          <p class='desc'>The Incarceration of Japanese Americans happened during World War II while the United States was at war with Japan. Out of fear that anyone of Japanese decent were traitors, measures were made to strip them of their rights. In 1942, President Roosevelt signed the Executive Order 9066, which sent approximately 120,000 people of Japanese decent to Internment camps which imprisoned them. Most people that were sent to the camps were US Citizens and this order forced them to get rid of almost all of their belongings and their whole life away.</p>
        </ScrollAnimation>
        <div style={{
          backgroundColor: '#D5D5D5'
        }}>
          <ScrollAnimation animateIn='animate__fadeIn'>
            <h2 class='header' style={{ color: 'black' }}>Why is it important?</h2>
            <p class='desc' style={{ color: 'black' }}>
              Often times in history classes, the topic of Japanese American Incarceration is overlooked and may not be taught in depth or at all. In order for the future generations to learn from the mistakes of our past it is integral for the children of the United States to know and be educated about the Incarceration, which is one of the civil rights violation that the United States has commited.
            </p>
          </ScrollAnimation>
        </div>
        <Tabs />
        <Footer />
      </div>

    </body >
  )
}

export default Home;