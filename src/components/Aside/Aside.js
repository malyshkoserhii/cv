/* eslint-disable jsx-a11y/img-redundant-alt */
import photo from './SM.png';
import { ReactComponent as Telegram } from './svg/telegram.svg';
import { ReactComponent as Gmail } from './svg/gmail.svg';
import { ReactComponent as Linkedin } from './svg/linkedin.svg';
import { ReactComponent as Telephone } from './svg/telephone.svg';
import { ReactComponent as Github } from './svg/github.svg';
import { ReactComponent as Location } from './svg/location.svg';
import { tech } from '../data/data';
import List from '../List/List';
import s from './Aside.module.css';

export default function Aside() {
  return (
    <section className={s.Aside}>
      <div className={s.ImageWrapper}>
        <img
          src={photo}
          alt="Serhii Malyshko"
          className={s.Image}
          width={240}
        />
      </div>
      <div className={s.Title}>
        <h2 className={s.Position}>Front End Developer</h2>
        <h1 className={s.Name}> Serhii Malyshko</h1>
      </div>
      <div className={s.Contacts}>
        <ul className={s.ContactsList}>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Telephone />
            </div>
            <p>+38 (096) 660-95-20</p>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Gmail />
            </div>
            <p> malyshkosergiy@gmail.com </p>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Telegram />
            </div>
            <a
              className={s.link}
              href="https://t.me/mr_john_reese"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Linkedin />
            </div>
            <a
              className={s.link}
              href="https://www.linkedin.com/in/serhii-malyshko-5a7958199"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Github />
            </div>
            <a
              className={s.link}
              href="https://github.com/malyshkoserhii"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Location />
            </div>
            <p>Lutsk, Ukraine</p>
          </li>
        </ul>
      </div>
      <List title="Techical Skills" content={tech} />
    </section>
  );
}
