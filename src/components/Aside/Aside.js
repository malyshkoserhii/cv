/* eslint-disable jsx-a11y/img-redundant-alt */
import photo from './my-photo.png';
import { ReactComponent as Telegram } from '../../images/svg/telegram.svg';
import { ReactComponent as Gmail } from '../../images/svg/gmail.svg';
import { ReactComponent as Linkedin } from '../../images/svg/linkedin.svg';
import { ReactComponent as Telephone } from '../../images/svg/telephone.svg';
import { ReactComponent as Github } from '../../images/svg/github.svg';
import { ReactComponent as Location } from '../../images/svg/location.svg';
import { tech, soft, lang } from '../../data/data';
import List from '../List';
import LangList from '../LangList';
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
        <h1 className={s.Name}>Serhii Malyshko</h1>
      </div>
      <div className={s.ContactsWrapper}>
        <h2 className={s.ContactsTitle}>Contacts</h2>
        <ul className={s.ContactsList}>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Telephone />
            </div>
            <p className={s.Text}>+38 (096) 660-95-20</p>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Gmail />
            </div>
            <p className={s.Text}> malyshkosergiy@gmail.com </p>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Telegram />
            </div>
            <a
              className={s.Link}
              href="https://t.me/malser_dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              Telegram
            </a>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Linkedin />
            </div>
            <a
              className={s.Link}
              href="https://www.linkedin.com/in/serhii-malyshko"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Github />
            </div>
            <a
              className={s.Link}
              href="https://github.com/malyshkoserhii"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li className={s.ContactsListItem}>
            <div className={s.MarkerWrapper}>
              <Location />
            </div>
            <p className={s.Text}>Lutsk, Ukraine</p>
          </li>
        </ul>
      </div>
      <List title="Techical Skills" content={tech} />
      <List title="Soft Skills" content={soft} />
      <LangList title="Languages" content={lang} />
    </section>
  );
}
