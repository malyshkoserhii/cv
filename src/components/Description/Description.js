import Knowledge from '../Knowledge';
import Project from '../Project';
import Experience from '../Experience';
import Education from '../Education';
import { projects, experience, education } from '../../data/data';
import s from './Description.module.css';

export default function Description() {
  return (
    <section className={s.Description}>
      <div className={s.TitleWrapper}>
        <h2 className={s.Position}>Front End Developer</h2>
        <h2 className={s.Name}>Serhii Malyshko</h2>
      </div>
      <div className={s.AboutWrapper}>
        <p className={s.About}>
          Looking for a job opportunity as a Front End Developer. I am a
          persistent and responsible person, who knows how to work in team, also
          I am ready to work hard in order to goal the aim and show high
          results. I am used to resolving tasks with a different level of
          complexity.
        </p>
      </div>
      <Knowledge title="Development skills" />
      <Project title="Projects" contetnt={projects} />
      <Experience content={experience} />
      <Education title="Education" content={education} />
    </section>
  );
}
