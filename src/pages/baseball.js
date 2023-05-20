import React from 'react';
import './article.css';
import baseballimg from '../files/baseballsaved.jpeg';
import baseballTitle from '../files/baseballtitle.jpeg';
import baseballBackground from '../files/baseballreal.jpeg';

export const Baseball = () => {
  return (
    <body>
      <div style={{
        backgroundImage: 'url(' + baseballBackground + ')',
        backgroundSize: '100vw',
        height: '62.5vh',
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '-350px',
        backgroundColor: 'grey',
        backgroundBlendMode: 'multiply'
      }}>
        <img class='coverimg' src={baseballTitle} alt="Baseball Saved Us Cover" />
        <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2014%2F06%2F21%2Fupshot%2Ffor-incarcerated-japanese-americans-baseball-was-wearing-the-american-flag.html&psig=AOvVaw339Zy1czjn5RDKsOXzyAXg&ust=1684527831802000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiDxKrZ__4CFQAAAAAdAAAAABAD" class='imgcite'>
          Background Link
        </a>
        <h1 id='titl'>Baseball Saved Us: Catchball between Cultures</h1>
        <div class='article'>
          <p>Introducing your young child to the harsh realities of the world may
            not be the first thing you want to do. I get it. Some books, I agree,
            are not appropriate for young children. They may have vulgar language,
            deal heavily with politics and other harder, complicated topics, etc.
            But not all books are like that; especially the book I’m about to
            introduce you to right now. <br /><br />

            Baseball Saved Us is a picture book surrounding a young Japanese
            American boy that gets sent to the internment camp. One thing about this
            young boy is that he likes to play baseball. Through all his hardships
            in the camps and even outside the camps, baseball always saved him,
            hence the name. <br /><br />

            Baseball is a popular sport in both the US and Japan. By centering the
            book on Baseball, Baseball Saved Us creates a connection with both the
            Japanese and American cultures. This connection to both cultures creates
            a bridge between the two ethnicities on opposite sides and creates a
            great introduction to the internment camps for both kids from either
            culture as well as give the parents a starting point to ease the kids
            into the history of the interment camps. <br /> <br />
          </p>
          <img src={baseballBackground} alt="People Watching Baseball In Camps" />
          <p>
            Although Baseball Saved Us does shed its light on the camps and the life
            surrounding them, at its core, it is not about that. The protagonist,
            although likes to play baseball, is not good at it. Because of that, he
            believes that the guard on the watchpost, thinks that the protagonist
            is no good with baseball. Then, in the last inning with everything
            depending on him, he feels that everyone wanted a better player to
            come on base. Through the pressure, he channels his anger towards the
            guard always staring at him and hits amazingly. With this experience
            he ends up playing amazingly in a very similar situation after the
            camp. Except now, he was being yelled racial slurs while preparing to
            bat. He faced all the hatred he got and turned it into a celebratory
            moment with his teammates. The last picture in the book of the
            American children hugging the protagonist shows how baseball united
            him with his teammates. This story is about a young boy learning to
            overcome his fear through baseball and connect with others through his
            hobby. Something any children can learn from and relate to.<br /><br />
          </p>
          <img class='exampleimg' src={baseballimg} alt="The Boys Cheering" />
          <p>
            However, that does not mean that this book shy away from showing some
            brutal circumstances the protagonist faces. It shows the harsh living
            conditions the Japanese American people had to face, racism, and the
            emotional tension. The protagonist in the camps describes, “It was so
            hot in the daytime and so cold at night. Dust storms came and got sand
            in everything, and nobody could see a thing. […] We had to use the
            bathroom with everyone else, instead of one at a time like at home” (Mochizuki, 5).
            This provides a great starting point for you, the adult, to have a
            conversation with the kid. How did they get there? Why did they have to
            live in such harsh condition?<br /> <br />

            The author does not also hide the racism the Japanese American people
            faced after being released from the camps either. The protagnist,
            after going back to his home, faced intense racism from his peers.
            No one sat with him during lunch and were yelled slurs during his
            baseball games. The only thing keeping him happy was his baseball team.
            <br /> <br />

            Through its small depiction of the suffering of the Japanese Americans
            the children can understand the unfairness and discrimination they faced.
            But this book also lightens these darker material with hope by using
            baseball as the connection between two cultures. <br /> <br />

            Baseball has been a staple of American culture for a long time. Around
            World War II, baseball was the most popular game in the United States.
            President Roosevelt himself endorsed baseball as a recreation during
            WWII saying, “I honestly feel that it would be best for the country to
            keep baseball going” (Roosevelt). Baseball is still a big part of the American
            culture with recent polls indicating 31% of Americans adults as a MLB
            fan, which was 2nd place after the NFL. Baseball, has been a part of
            the culture of the American people for a long time. <br /> <br />

            Baseball, which may be a surprise to some, is also a big part of the
            Japanese culture. However, it gets pretty apparent with modern
            Japanese MLB players such as Yu Darvish and Shohei Ohtani. Since its
            introduction in 1872 and the creation of a professional league in
            1936, baseball is sometimes referred to as Japan’s national sport.
            Every year, Japan has a national high school baseball tournament,
            Koushien, and garners a huge audience. In 2022, about 43.2% of the
            TV in the country tuned in at one point during the finals (仙台育).
            Baseball
            leagues are prominent all the way from elementary school kids to
            professional and is, to this day the most popular sport in Japan.
            <br /> <br />
            So going back to the book, using this connection of baseball in the book bridges the two cultures strongly. A way for them to just be kids and become friends through complicated politics and hatred. This optimistic view on oppression and racism gives a great lesson to kids that no matter how hard it may seem, you can connect with other people from different backgrounds.
            <br /><br />
            Through the cultural connection and relatability, the book is a great way to introduce your kids to a historical event that is likely not explored in depth. Questions like why a kid like a protagonist, who is most likely just like the children that are going to read this book, had to endure the discrimination, can be discussed through this book and hopefully help the children learn just how harmful prejudice and fear could be. This book isn’t to teach kids about the internment camps, but it’s to create conversations between you and your children. So when you do get your kids to read this book, remember to have this important talk with them and how we can all change for the better.             <br /> <br />
          </p>
          <h3>Citation:</h3>
          <div class='citation'>
            <p>
              Mochizuki, Ken, and Dom Lee. Baseball Saved Us. Scholastic, 1996.
            </p>
            <p>
              Roosevelt, Franklin. "Letter from President Franklin D. Roosevelt
              to Kenesaw Landis Regarding Baseball", 1942. National Archives
              Catalog. https://catalog.archives.gov/id/6997537?objectPage=2. Accessed May 18.
            </p>
            <p>
              仙台育英、瞬間最高視聴率４３・２％　高校野球決勝／甲子園 [Sendai Ikuei, Peak Viewing Rate 43.2% for High School Baseball Finals/Koushien] サンスポ, 18 May 2023, www.sanspo.com/article/20220823-747DBQN3GBNRHO4W27YZ355FY4/.
            </p>
          </div>

        </div>
      </div>
    </body>
  )
}

export default Baseball;