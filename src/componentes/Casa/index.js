import Bruxo from '../Bruxo'
import './casa.css'

const Casa = (props) =>{
    return(
        (props.bruxos.length > 0) ? <section className='casa' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='bruxos'>
            {props.bruxos.map(bruxo => <Bruxo corDeFundo={props.corPrimaria} key={bruxo.nome} nome={bruxo.nome} patrono={bruxo.patrono} imagem={bruxo.imagem}/>)}
            </div>
        </section>
        :''
    ) 
}

export default Casa