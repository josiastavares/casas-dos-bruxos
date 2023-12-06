import './bruxo.css'
import { TiDelete } from "react-icons/ti";
import { PiMagicWand } from "react-icons/pi";
import { PiMagicWandFill } from "react-icons/pi";

const Bruxo = ({ bruxo, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(bruxo.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='bruxo'>
            <TiDelete
                size={25}
                className='deletar'
                onClick={() => aoDeletar(bruxo.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={`./imagens/${bruxo.imagem}.png`} alt={bruxo.nome} />
            </div>
            <div className='rodape'>
                <h4>{bruxo.nome}</h4>
                <h5>{bruxo.patrono}</h5>
                <div className="favoritar">
                    {bruxo.favorito
                        ? <PiMagicWandFill className='favorito' {...propsFavorito} color={corDeFundo} />
                        : <PiMagicWand className='favorito' {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}


export default Bruxo