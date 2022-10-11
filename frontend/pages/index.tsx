import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {

const professores: Professor[] =[
  {
        id: 1,
        nome: "Gabriel Pio DEV",
        foto: "https://github.com/GabrielPioDEV.png",
        descricao: "Jovem Aprendiz no ramo de Programação",
        valor_hora:800

  }, 
  {
    id: 2,
    nome: "professor2",
    foto: "https://github.com/lucas.png",
    descricao: "descricao do professor2",
    valor_hora:200

},{
  id: 3,
  nome: "professor3",
  foto: "https://github.com/lucas.png",
  descricao: "descricao do professor3",
  valor_hora:300

} ,{
        id: 4,
        nome: "professor4",
        foto: "https://github.com/lucas.png",
        descricao: "descricao do professor4",
        valor_hora:400

  }   
]  
  return (
    <Box sx={ {backgroundColor: 'secondary.main'}}>
      <Lista professores={professores} ></Lista>
    </Box>
  )   
}

export default Home
