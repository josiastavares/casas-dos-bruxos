import './bruxo.css'

const Bruxo = ({nome, imagem, patrono, corDeFundo}) => {

    const localImagem = `./imagens/${imagem}.png`

    return (
        <div className='bruxo'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={localImagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{patrono}</h5>
            </div>
        </div>
    )
}


export default Bruxo