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
          Looking for a job opportunity as a Front End Developer. I am
          persistent and very hardworking, also I am responsible and work in
          order to goal the aim and show a high result. I know how to work in
          team and try to do the tasks in time.
        </p>
      </div>
      <Knowledge title="Development skills" />
      <Project title="Projects" contetnt={projects} />
      <Experience content={experience} />
      <Education title="Education" content={education} />
    </section>
  );
}
