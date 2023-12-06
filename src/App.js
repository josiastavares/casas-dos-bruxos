import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Casa from './componentes/Casa';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [casas, setCasas] = useState([
    {
      id: uuidv4(),
      nome: 'Grifinória',
      cor: '#AE0001',
    },
    {
      id: uuidv4(),
      nome: 'Sonserina',
      cor: '#2A623D',
    },
    {
      id: uuidv4(),
      nome: 'Corvinal',
      cor: '#222F5B',
    },
    {
      id: uuidv4(),
      nome: 'Lufa-Lufa',
      cor: '#ECB939',
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Harry Potter',
      patrono: 'Cervo',
      imagem: 'Harry Potter',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Hermione Granger',
      patrono: 'Lontra',
      imagem: 'Hermione Granger',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Ron Weasley',
      patrono: 'Jack Russel Terrier',
      imagem: 'Ron Weasley',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Neville Longbottom',
      patrono: 'Não Corpóreo',
      imagem: 'Neville Longbottom',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Draco Malfoy',
      patrono: 'Incerto',
      imagem: 'Draco Malfoy',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Severo Snape',
      patrono: 'Corça',
      imagem: 'Severo Snape',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Lord Voldemort',
      patrono: 'Não Tem',
      imagem: 'Lord Voldemort',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Lucius Malfoy',
      patrono: 'Não Tem',
      imagem: 'Lucius Malfoy',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Luna Lovegood',
      patrono: 'Lebre',
      imagem: 'Luna Lovegood',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Filio Flitwick',
      patrono: 'Incerto',
      imagem: 'Flitwick',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Cho Chang',
      patrono: 'Cisne',
      imagem: 'Cho Chang',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Murta que geme',
      patrono: 'Incerto',
      imagem: 'Murta que geme',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Cedrico Diggory',
      patrono: 'Incerto',
      imagem: 'Cedrico Diggory',
      casa: casas[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Nymphadora Tonks',
      patrono: 'Coelho/Lobo',
      imagem: 'Nymphadora Tonks',
      casa: casas[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Pomona Sprout',
      patrono: 'Não Corpóreo',
      imagem: 'Pomona Sprout',
      casa: casas[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Ana Abbott',
      patrono: 'Não Corpóreo',
      imagem: 'Ana Abbott',
      casa: casas[3].nome
    }
  ]

  const [bruxos, setBruxos] = useState(inicial)

  function deletarBruxo(id) {
    setBruxos(bruxos.filter(bruxo => bruxo.id !== id))
  }

  function mudarCor(cor, id) {
    setCasas(casas.map(casa => {
      if (casa.id === id) {
        casa.cor = cor;
      }
      return casa;
    }))
  }

  const cadastrarCasa = (novaCasa) => {
    setCasas([...casas, { ...novaCasa, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setBruxos(bruxos.map(bruxo => {
      if (bruxo.id === id) bruxo.favorito = !bruxo.favorito;
      return bruxo
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        casas={casas.map(casa => casa.nome)}
        aoCadastrado={bruxo => { setBruxos([...bruxos, bruxo]) }}
        cadastrarCasa={cadastrarCasa}
      />
      {casas.map(casa =>
        <Casa
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCor}
          key={casa.id}
          casa={casa}
          bruxos={bruxos.filter(bruxo => bruxo.casa === casa.nome)}
          aoDeletar={deletarBruxo}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
