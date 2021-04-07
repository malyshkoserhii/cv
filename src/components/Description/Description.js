import s from './Description.module.css';

export default function Description() {
  return (
    <section className={s.Description}>
      <div className={s.Title}>
        <h2 className={s.Position}>Front End Developer</h2>
        <h1 className={s.Name}>Serhii Malyshko</h1>
      </div>
    </section>
  );
}
