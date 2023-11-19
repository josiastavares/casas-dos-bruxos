import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/eduardodossantostavares/" target="_blank" rel="noreferrer">
                        <img src="/imagens/linkedin.png" alt="logo linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/josiastavares" target="_blank" rel="noreferrer">
                        <img src="/imagens/github.png" alt="logo github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dudu_.kkk/" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt=" logo instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/Logo hogwarts.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Eduardo Tavares.
            </p>
        </section>
    </footer>)
}

export default Rodape