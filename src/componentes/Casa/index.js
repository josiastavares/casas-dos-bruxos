import Bruxo from '../Bruxo'
import './casa.css'
import hexToRgba from 'hex-to-rgba';

const Casa = ({casa, bruxos, aoDeletar, aoFavoritar, mudarCor}) => {
    return (
        bruxos.length > 0 && <section className='casa' style={{ backgroundColor: hexToRgba(casa.cor, '0.5') }}>
            <input value={casa.cor} onChange={evento => mudarCor(evento.target.value, casa.id)} className='input-cor' type='color' />
            <h3 style={{ borderColor: casa.cor }}>{casa.nome}</h3>
            <div className='bruxos'>
                {bruxos.map((bruxo, indice) => {
                    return (
                        <Bruxo
                            corDeFundo={casa.cor}
                            key={indice}
                            bruxo={bruxo}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Casa