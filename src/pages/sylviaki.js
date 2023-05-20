import React from 'react';
import './article.css';
import backgroundImg from '../files/sylviaandaki.001.jpeg';
import sylviakiCover from '../files/sylviaandakicover.jpeg';
import japaneseDisc from '../files/japanesedisc.jpeg';
import mexicanDisc from '../files/mexicandisc.jpeg';

export const Sylviaki = () => {
  return (
    <body>
      <div style={{
        backgroundImage: 'url(' + backgroundImg + ')',
        backgroundSize: '100vw',
        height: '62.5vh',
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '-150px',
        backgroundColor: 'grey',
        backgroundBlendMode: 'multiply'
      }}>
        <img class='coverimg' src={sylviakiCover} alt="Sylvia & Aki Cover" />
        <h1 id='titl'>Sylvia & Aki</h1>

        <div class='article'>
          <p>
            Ideally, when different groups of people face different kinds of discrimination, we want to support each other and uplift one another. However, that isn’t always the case. Some people might feel defensive and use the hurt that they received from the discrimination and direct it toward other people that face discrimination by doing things like minimizing their experience, comparing their discrimination to others, etc. To combat this, people need to develop empathy and support each other.
            <br /> <br />
            Sylvia & Aki is a story about two girls, Sylvia and Aki. Sylvia is a Mexican American girl who wants to attend Westminster School but is forced to go to Hoover School because of her Mexican heritage. Aki is a Japanese American girl that gets separated from her dad when she was forced to go to the internment camps. You might ask, “What is the connection?” but Sylvia ends up living in Aki’s old horse where she finds Aki’s doll, and from there, their friendship is portrayed beautifully.
            <br /> <br />
            From Sylvia and Aki’s story, the reader gets to see discrimination in different forms. Although their experiences may differ, through their friendship the reader can develop empathy for different groups of people who may be facing discrimination in different forms.
            <br /> <br />
            In the book, we can see the contrast between exactly what these girls have and don’t have compared to each other. Sylvia is free in Southern California, free to go wherever she pleases, but is not able to enroll in Westminster School because of her race. Aki was able to go to Westminster School when she lived in Westminster but is now trapped in the internment camps and separated from her father.
            <br /> <br />
            The book clearly highlights the differences in the situation between these two characters. After Sylvia was first denied from enrolling into Westminster School, she thinks to herself, “And if a Japanese girl like Aki was allowed to go to Westminster School, why can’t I? “ (Conkling, 17) She highlights the unfairness of the situation as well as highlight a privilege that Aki had as an Asian girl that Sylvia didn’t have.
            <br /> < br />
            Contrastingly, we can see how Sylvia may also have some things that Aki doesn’t have. Throughout the journey of Sylvia’s fight against the school system, her father was a big contribution. Her father was the one that collected the signatures for the letter, got the lawyers, and decided to legally fight. However, Aki did not even get to see her father for most of the story. She was separated from her family in many parts of the book. When Seiko, Aki’s big brother had to go away to work and earn some money for her family, she described her feelings, “But she had been truly amazed to learn what her heart could bear when it had no choice but to keep on beating” (Conkling, 89).  She had gotten so used to being separated from her family that she became desensitized to the pain of such events.
            <br /> <br />
            Despite their differences though, Sylvia develops empathy for Aki. When Sylvia was going to the courthouse with her father, she saw a discriminatory sign against Mexicans and was dee[ply hurt by it. While thinking about those signs, she starts to think about the discriminatory signs against the Japanese people and wonders, “How did Aki feel when she saw those signs and read those posters? [...] Did Aki feel as hurt as I do now?” (Conkling, 66). Sylvia starts empathizing with how Aki felt. Instead of thinking about Aki’s privileges and undermining her experience, she wanted to think from her position.
          </p>
          <img class='exampleimg' src={japaneseDisc} alt="Discriminatory signs against Japanese" />
          <img class='exampleimg' src={mexicanDisc} alt="Discriminatory signs against Mexicans" />
          <div class='caption' >
            <p style={{ display: 'inline-block' }}>Discriminatory signs against Japanese and Mexican People </p>
            <a href="https://i.stack.imgur.com/iaTUR.jpg"> Link 1 </a>
            <a href="https://unidosus.org/wp-content/uploads/2013/04/NoDogsOrMexicans.jpg"> Link 2 </a>
          </div>

          <p>
            Recently, with the internet and social media becoming popular more than ever, it is so easy to talk to other people from other backgrounds. That also means that negativity and hate can be delivered to others easier than ever too. This is going to be our life from now on, so it’s important to teach your children about empathy when interacting with others. Sylvia & Aki is a great book to tell your kids more about how different people can become friends with each other and uplift each other through tough times.
          </p>
          <h3>Citation:</h3>
          <div class='citation'>
            <p>
              Conkling, Winifred. Sylvia & Aki. Yearling, 2013.
            </p>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Sylviaki;