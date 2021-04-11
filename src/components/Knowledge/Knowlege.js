import s from './Knowlege.module.css';

const Knowledge = ({ title }) => (
  <section className={s.KnowledgeSection}>
    <div className={s.KnowledgeWrapper}>
      <h2 className={s.Title}>{title}</h2>
      <p className={s.Description}>
        Confident knowledge of HTML and CSS, also knowledge of the preprocessor
        SASS. I understand basic principles of adaptive and responsive layout,
        work with Flexbox and use BEM methodology.
      </p>
      <p className={s.Description}>
        My main development language is JavaScript. Understanding of interaction
        with the DOM, understanding the REST, AJAX and CRUD interaction with
        databases, using of the Fetch API and basic understanding the event loop
        cycle.
      </p>
      <p className={s.Description}>
        Knowledge of React framework for creating applications and basic
        understanding of Redux library for managing application state.
        Understanding routing and using of React Router. Understanding SPA and
        MPA application models. Working with local storage. Also I've got
        familiar with the most popular React Hooks, and can use Ant Design. I
        have basic knowledge of Webpack bundler and Typescript.
      </p>
      <p className={s.Description}>
        Understanding of backend. Basic knowledge of Node.js, Express, MongoDB
        and Mongoose. I can use Helmet, Joi, Passport. I know how to work with
        Git and GitHub.
      </p>
      <p className={s.Description}>
        For coding I use Visual Studio Code and Chrome DevTools, also I can work
        with Postman, Netlify, Heroku.
      </p>
      <p className={s.Description}>
        As a developer I use Photoshop. Understanding Agile methodology and
        Scrum. For task and time management I use Trello.
      </p>
    </div>
  </section>
);

Knowledge.defaultProps = {
  title: '',
};

export default Knowledge;
