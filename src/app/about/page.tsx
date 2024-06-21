import {Metadata} from "next";
import s from './about.module.scss'
export const metadata: Metadata = {
  title: 'About | Next App'
}

const About = () => {
  return (
    <div className={s.wrapper}>
      <h4>Использовал:</h4>
      <ul>
        <li>MUI</li>
        <li>MUI-icons</li>
        <li>NEXT</li>
        <li>REACT</li>
        <li>TS</li>
        <li>SASS</li>
      </ul>
      <h4>Функционал:</h4>
      <ul>
        <li>Выводит по 10 постов</li>
        <li>Выполнена примитивная пагинация</li>
        <li>При клике на пост открывает его</li>
        <li>Так же добавлена возможность просмотра коментариев</li>
      </ul>
    </div>
  )
}
export default About