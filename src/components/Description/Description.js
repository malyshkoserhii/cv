import Project from '../Project';
import Experience from '../Experience';
import Education from '../Education';
import { projects, experience, education } from '../../data/data';
import s from './Description.module.css';

export default function Description() {
  return (
    <section className={s.Description}>
      <div className={s.Title}>
        <h2 className={s.Position}>Front End Developer</h2>
        <h1 className={s.Name}>Serhii Malyshko</h1>
      </div>
      <h2 className={s.ProjectsTitle}>Projects</h2>
      {projects.map((project, idx) => (
        <Project
          key={idx}
          projectName={project.name}
          githubLink={project.github}
          exampleLink={project.example}
          technology={project.technology}
          description={project.description}
        />
      ))}

      <Experience content={experience} />

      <Education title="Education" content={education} />
    </section>
  );
}
