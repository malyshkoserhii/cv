import s from './List.module.css';

export default function List({ title, content }) {
  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>{title}</h2>
      <ul className={s.List}>
        {content.map((el, idx) => (
          <li key={idx} className={s.ListItem}>
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

List.defaultProps = {
  content: [],
};
