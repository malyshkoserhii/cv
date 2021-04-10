import s from './Knowlege.module.css';

const Knowledge = ({ title }) => (
  <section className={s.KnowledgeSection}>
    <div className={s.KnowledgeWrapper}>
      <h2 className={s.Title}>{title}</h2>
      <p className={s.Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        maxime vero, porro placeat veniam sunt dolores? Accusantium, velit! Iste
        quo fuga rerum magni mollitia quam rem quaerat velit officia nostrum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        maxime vero, porro placeat veniam sunt dolores? Accusantium, velit! Iste
        quo fuga rerum magni mollitia quam rem quaerat velit officia nostrum.
      </p>
    </div>
  </section>
);

Knowledge.defaultProps = {
  title: '',
};

export default Knowledge;
