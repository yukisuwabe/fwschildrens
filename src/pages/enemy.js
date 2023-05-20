import React from 'react';
import './article.css';
import question from '../files/questionnaire.jpeg';
import CalledUsCover from '../files/calleduscover.jpg';
import takeiFamily from '../files/George-Takei-family-gq.webp';

export const Enemy = () => {
  return (
    <body>
      <div style={{
        backgroundImage: 'url(' + takeiFamily + ')',
        backgroundSize: '100vw',
        height: '62.5vh',
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '-150px',
        backgroundColor: 'grey',
        backgroundBlendMode: 'multiply'
      }}>
        <img class='coverimg' src={CalledUsCover} alt="They Called Us Enemy Cover" />
        <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gq.com%2Fstory%2Fgeorge-takei-american-concentration-camps&psig=AOvVaw2ZVTwZBVlmxDcq_xHsX6iO&ust=1684526353368000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICYu-nT__4CFQAAAAAdAAAAABA-" class='imgcite'>
          Background Link
        </a>
        <h1 id='titl'>Oh My! The Power of Activism!</h1>

        <div class='article'>
          <p>
            So, your child is now a bit older. They can start to take the politics and the overall complicated realities of this world. Perfect! I have just the book for you.
            <br /> <br />
            They Called Us Enemy is a graphic novel and a memoir about George Takei, the actor from Star Trek, and his journey in the internment camps during his youth. Not only does it explore the events throughout WWII from Takei’s experience, but it also deals with heavier topics such as the discourse with the radicals in the camps, the questionnaire that heavily divided the Japanese Americans, and the renouncement of US citizenship. It goes into heavy detail about the complicated situation the Japanese Americans faced and how people faced those challenges in different ways.
            <br /> <br />
            The book’s deep analyses of the general climate of the United States at the time along with personal recounts of both his and his father’s experience, tells a patriarchal as well as informational story of Japanese incarceration that tells the children an important message about standing up for what you believe in and fighting for your own rights.
            <br /> <br />
            The book is informative throughout its story. In between the memories of Takei, he inserts in the historical occurrences of what was happening to the adults, and policies and how his environment around him changed with it. The book explained many things such as Executive Order 9066 which started the Japanese Incarceration, the presence of a block manager which his father was appointed as that for his camp, and the questionnaire that all Japanese American adults had to fill out with controversial questions that changed the fate of the whole Takei family.
            <br /> <br />
            The questionnaire especially went into depth about what was asked and how it was controversial to them. The two most controversial questions were question 27 which read, “Are you willing to serve in the armed forces of the United States on combat duty, wherever ordered?” (Varner) and question 28 read, “Will you swear unqualified allegiance to the United States of America, and faithfully defend the United States from any or all attack by foreign or domestic forces, and forswear any form of allegiance or obedience to the Japanese emperor, or any other foreign government, power or organization?” (Varner) Takei explains,
          </p>
          <blockquote>
            Question 27 wanted us to pledge our lives for a country that had upended our families and put us behind barbed-wire fences. Question 28 rested on a false premise: that we all had a racial allegiance to the emperor of Japan. To answer ‘Yes’ would be to agree that we all HAD such a loyalty to give up. Yes or no, either response would be used to justify our wrongful imprisonment - as if they’d been right to call us ‘enemy aliens’ and lock us up in the first place. (Takei, 115)
          </blockquote>
          <p>
            The Japanese Americans that were imprisoned never did anything to be suspected of their loyalty let alone be locked up. To be required to fight for a country that wrongfully imprisoned them and to abandon and go against any of their relatives and family they may have wasn’t an option for some people. Imagine you’re an American citizen with little children you have to look after and all of a sudden, the government tells you, if you don’t go to war for us you are disloyal and are an enemy alien. How unfair is that? The book does an amazing job of putting everything into perspective of how the Japanese Americans saw the events that were happening to them.
          </p>
          <img class='exampleimg' src={question} alt="Questionnaire" />
          <p>
            One of the most important messages of the book is about social activism. Decades after the incarceration camps, Takei and his father were having a conversation after their dinner when Takei’s father recounts one of the protests at the camps. Takei’s father emphasizes, “It was important to exercise our right to assemble. Send a message that we were united as a group and opposed to their actions” (Takei, 145). In another scene, Takei’s father also explains, “Our democracy is a participatory democracy. Existentially, it’s dependent on people who cherish the shining, highest ideals of democracy and actively engage in the political process” (Takei, 178). These conclusions that Takei’s father ended up with show patriarchal respect for the overall system of the United States and emphasize how important it is to exercise these amazing rights yourself and advocate for your and others’ rights.
            <br /> <br />
            Though the book is from the point of view of a young boy just like Baseball Saved Us, which is another book I covered, this book is a longer, more mature recount of the young boy’s journey. They Called Us Enemy explores the historical context and focuses more on the context while Baseball Saved Us explores the boy’s growth within the camps and has a more innocent outlook on life. Which makes this book much more appropriate for older audiences.
            < br /> <br />
            They Called Us Enemy is a book encouraging younger readers to advocate for what they believe in. To use the system that they have at hand to their advantage and learn from the harsh history that affected roughly 120,000 people. Discrimination still happens all over the world and in the United States as well. Takei’s book may inspire kids to not let this history repeat itself and stand with the people to strive for what is right. As kids get older and start to form their own opinions, encourage them to act upon it! To fight for what they believe is right and advocate for change.
          </p>
          <h3>Citation:</h3>
          <div class='citation'>
            <p>

            </p>
            <p>
              Takei, George, et al. They Called US Enemy. Top Shelf Productions, 2019.
            </p>
            <p>
              Varner, Natasha. “The ‘Loyalty Questionnaire’ of 1943 Opened a Wound That Has yet to Heal - Densho: Japanese American Incarceration and Japanese Internment.” Densho, 17 Jan. 2023, densho.org/catalyst/the-loyalty-questionnaire-of-1943-opened-a-wound-that-has-yet-to-heal/.
            </p>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Enemy;