import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [patrono, setPatrono] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')

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
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Patrono" 
                placeholder="Digite o seu Patrono" 
                valor={patrono}
                aoAlterado={valor => setPatrono(valor)}
                />
                <CampoTexto 
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
        </section>
    )
}

export default Formulario