import s from './Education.module.css';

const Education = ({ title, content }) => (
  <section className={s.EducationSection}>
    <div className={s.EducationWrapper}>
      <h2 className={s.Title}>{title}</h2>
      {content.map((el, idx) => (
        <div key={idx} className={s.DescriptionWrapper}>
          <p className={s.University}>{el.university}</p>
          <p className={s.Location}>{el.location}</p>
          <p className={s.Faculty}>{el.faculty}</p>
          <p className={s.Degree}>{el.degree}</p>
          <p className={s.Period}>{el.period}</p>
        </div>
      ))}
    </div>
  </section>
);

Education.defaultProps = {
  title: '',
  content: [],
};

export default Education;
