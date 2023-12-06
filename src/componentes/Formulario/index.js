import Campo from '../Campo'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [patrono, setPatrono] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')
    const [nomeCasa, setNomeCasa] = useState('')
    const [corCasa, setCorCasa] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoCadastrado({
            nome,
            patrono,
            imagem,
            casa
        })
        setNome('')
        setPatrono('')
        setImagem('')
        setCasa('')
    }

    return (
        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Bruxo</h2>
                <Campo 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <Campo
                obrigatorio={true} 
                label="Patrono" 
                placeholder="Digite o seu Patrono" 
                valor={patrono}
                aoAlterado={valor => setPatrono(valor)}
                />
                <Campo 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Casa" 
                itens={props.casas}
                valor={casa}
                aoAlterado={valor => setCasa(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento => {
                evento.preventDefault()
                props.cadastrarCasa({ nome: nomeCasa, cor: corCasa })
                setNomeCasa('')
                setCorCasa('')
            })}>
                <h2>Preencha os dados para criar sua Casa Bruxo</h2>
                <Campo
                obrigatorio={true} 
                label="Nome da Casa" 
                placeholder="Digite o nome da casa" 
                valor={nomeCasa}
                aoAlterado={valor => setNomeCasa(valor)}
                />
                <Campo 
                type='color'
                obrigatorio={true} 
                label="Cor" 
                placeholder="Digite o seu Patrono" 
                valor={corCasa}
                aoAlterado={valor => setCorCasa(valor)}
                />
                <Botao>
                    Criar Casa
                </Botao>
            </form>
        </section>
    )
}

export default Formulario