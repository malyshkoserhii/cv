import { ReactComponent as Github } from '../../images/svg/github.svg';
import { ReactComponent as Link } from '../../images/svg/link.svg';
import s from './Project.module.css';

export default function Project({ title, contetnt }) {
  return (
    <section className={s.ProjectSection}>
      <h2 className={s.ProjectsTitle}>{title}</h2>
      {contetnt.map((el, idx) => (
        <div key={idx} className={s.Wrapper}>
          <div className={s.ProjectSectionContainer}>
            <div className={s.TitleContainer}>
              <h2 className={s.Title}>{el.name}</h2>
              <div className={s.LinkContainer}>
                <a
                  href={el.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className={s.Link}
                >
                  <Github />
                </a>
                <a
                  href={el.exampleLink}
                  target="_blank"
                  rel="noreferrer"
                  className={s.Link}
                >
                  <Link />
                </a>
              </div>
            </div>
            <p className={s.Technology}>{el.technology}</p>
            <p className={s.Description}>{el.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

Project.defaultProps = {
  projectName: '',
  githubLink: '',
  exampleLink: '',
};
