import s from './Experience.module.css';

const Experience = ({ content }) => {
  return (
    <section className={s.SectionExperience}>
      {content.map((el) => (
        <>
          <h2 className={s.Title}>{el.titleExp}</h2>
          <p className={s.Description}>{el.experience}</p>
          <h3 className={s.ResponsibilitiesTitle}>{el.titleResp}</h3>
          <p className={s.Description}>{el.responsibilities}</p>
        </>
      ))}
    </section>
  );
};

Experience.defaultProps = {
  content: [],
};

export default Experience;
