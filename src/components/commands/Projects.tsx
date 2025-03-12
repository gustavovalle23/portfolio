import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "@Churro/core",
    desc: "A framework designed for building web applications with a domain-oriented paradigm.",
    url: "https://github.com/churros-py/churros",
  },
  {
    id: 2,
    title: "Churros PPA (Python Persistence API)",
    desc: "A tool that simplifies creating a data access layer for Python persistence APIs.",
    url: "https://github.com/churros-py/churros-data-ppa",
  },
  {
    id: 3,
    title: "Cheetah",
    desc: "A backend framework written in Dart, aiming for performance and simplicity.",
    url: "https://github.com/cheetah-projects/cheetah",
  },
  {
    id: 4,
    title: "Founder",
    company: "Valle Tech LLC",
    period: "Jan 2025 - Present",
    location: "Delaware, United States",
    desc: [
      "Built and launched Micro SaaS products from scratch. ",
      "Led business strategy, market analysis, and international expansion.",
      "Managed product lifecycle and business operations.",
      "Utilized cloud computing and modern tech to optimize performance.",
    ],
    url: "https://devcrafter.framer.website",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Momo Medical",
    period: "Aug 2023 - Present",
    location: "Delft, Netherlands",
    desc: [
      "Maintaining and improving web/mobile applications. ",
      "Migrated monolithic backend to microservices. ",
      "Introduced automated testing pyramid policy. ",
      "Participated in product planning and refinement. ",
    ],
    url: "https://momomedical.com",
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Mercafacil",
    period: "Apr 2022 - Aug 2023",
    location: "Curitiba, Brazil",
    desc: [
      "Led monolith-to-microservice migration. ",
      "Mentored team on automated testing and architecture. ",
      "Integrated GraphQL with REST APIs. ",
      "Collaborated on product feature planning. ",
    ],
    url: "https://www.mercafacil.com",
  },
  {
    id: 7,
    title: "Software Engineer",
    company: "Take and Go App",
    period: "2020 - 2022",
    location: "Ribeirão Preto, Brazil",
    desc: [
      "Led IoT, Web, and Infrastructure teams. ",
      "Planned and executed functionalities with the CTO.",
    ],
    url: "https://takeandgoapp.com",
  },
];

export default Projects;
