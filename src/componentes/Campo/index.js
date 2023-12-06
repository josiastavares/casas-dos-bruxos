import './campo.css'

const Campo = ({type = 'text', label, valor, obrigatorio, placeholder, aoAlterado}) => {

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input value={valor} onChange={evento => aoAlterado(evento.target.value)} type={type} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default Campo