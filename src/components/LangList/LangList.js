import s from './LangList.module.css';

export default function LangList({ title, content }) {
  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>{title}</h2>
      <ul className={s.List}>
        {content.map((el, idx) => (
          <li key={idx} className={s.ListItem}>
            <span>{el.language}</span> - <span>{el.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

LangList.defaultProps = {
  content: [],
};
