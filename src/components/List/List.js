import s from './List.module.css';

export default function List({ title, content }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {content.map((el, idx) => (
          <li key={idx} className={s.item}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

List.defaultProps = {
  content: [],
};
