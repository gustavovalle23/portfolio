import { AboutWrapper, HighlightSpan } from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi there! I'm <HighlightSpan>Gustavo Valle</HighlightSpan>, a passionate
        Back-End Developer from São Paulo, Brazil.
      </p>

      <p>
        I am the creator of Cheetah (Dart Back-end Framework) and PyChurros
        (JPA-like Database Repository)
      </p>

      <p>
        And I am also a Back End developer specialist in Rest and GraphQL API's.
        DDD and Clean Architecture enthusiast.
      </p>
      <p>
        Always looking for challenges, technology and code. Currently focused on
        creating open source backend tools and building a Micro SaaS empire
        (yes, very bold)!
      </p>

      <br />
      <p>
        Currently focused on creating open source backend tools and building a
        Micro SaaS empire (yes, very bold)!
      </p>
    </AboutWrapper>
  );
};

export default About;
