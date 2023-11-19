
import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Casa from './componentes/Casa';
import Rodape from './componentes/Rodape';

function App() {

  const casas = [
    {
      nome: 'Grifinória',
      corPrimaria: '#AE0001',
      corSecundaria: '#D0D0D050'
    },
    {
      nome: 'Sonserina',
      corPrimaria: '#2A623D',
      corSecundaria: '#AAAAAA50'
    },
    {
      nome: 'Corvinal',
      corPrimaria: '#222F5B',
      corSecundaria: '#5D5D5D50'
    },
    {
      nome: 'Lufa-Lufa',
      corPrimaria: '#ECB939',
      corSecundaria: '#3F3E3E50'
    }
]

  const [bruxos, setBruxos] = useState([])

  const aoAdicionado = (bruxo) => {
    console.log(bruxo)
    setBruxos([...bruxos, bruxo])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario casas={casas.map(casa => casa.nome)} aoCadastrado={bruxo => aoAdicionado(bruxo)}/>
      {casas.map(casa => <Casa 
      key={casa.nome} 
      nome={casa.nome} 
      corPrimaria={casa.corPrimaria} 
      corSecundaria={casa.corSecundaria}
      bruxos={bruxos.filter(bruxo => bruxo.casa === casa.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
