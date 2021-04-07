import { ReactComponent as Github } from '../../images/svg/github.svg';
import { ReactComponent as Link } from '../../images/svg/link.svg';
import s from './Project.module.css';

export default function Project({
  projectName,
  githubLink,
  exampleLink,
  technology,
  description,
}) {
  return (
    <section className={s.ProjectSection}>
      <div className={s.ProjectSectionContainer}>
        <div className={s.TitleContainer}>
          <h2 className={s.Title}>{projectName}</h2>
          <div className={s.LinkContainer}>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className={s.Link}
            >
              <Github />
            </a>
            <a
              href={exampleLink}
              target="_blank"
              rel="noreferrer"
              className={s.Link}
            >
              <Link />
            </a>
          </div>
        </div>
        <p className={s.Technology}>{technology}</p>
        <p className={s.Description}>{description}</p>
      </div>
    </section>
  );
}

Project.defaultProps = {
  projectName: '',
  githubLink: '',
  exampleLink: '',
};
