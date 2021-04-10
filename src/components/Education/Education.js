import s from './Education.module.css';

const Education = ({ title, content }) => (
  <section className={s.EducationSection}>
    <h2 className={s.Title}>{title}</h2>
    {content.map((el) => (
      <>
        <p className={s.University}>{el.university}</p>
        <p className={s.Level}>{el.level}</p>
        <p className={s.Period}>{el.period}</p>
      </>
    ))}
  </section>
);

Education.defaultProps = {
  title: '',
  content: [],
};

export default Education;
