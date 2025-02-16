import s from './styles.module.scss'

const Footer = () => {
    return (
        <footer
            className={s.footer}
        >
            2018-{new Date().getFullYear()}, Общество с ограниченной ответственностью «Брайт Софт Системс»
            <br />
            224006, г. Брест, ул. Ясеневая, д. 5/1
            <br />
            Телефон: +375 162 937306
        </footer>
    )
}

export default Footer