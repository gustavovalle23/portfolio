import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Distributed Software Architecture",
    desc: "PUC Minas | 2023 - 2024",
  },
  {
    title: "Database Design and Programming with SQL",
    desc: "Oracle | 2020 - 2022",
  },
  {
    title: "Systems Analysis and Development",
    desc: "Fatec | 2019 - 2022",
  },
];

export default Education;
