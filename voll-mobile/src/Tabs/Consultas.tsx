import { VStack, Divider, ScrollView } from 'native-base';

import { CardConsulta } from '../componentes/CardConsulta';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';

export default function Consultas() {
  return(
    <ScrollView p={5}>
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>

      <CardConsulta 
        nome='Dr. Luiz Almada'
        foto='https://github.com/Luiz-Almada.png'
        especialidade='Cardiologista'
        data='16/02/2024'
        // foiAtendido
        foiAgendado
      />

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas passadas</Titulo>

      <CardConsulta 
        nome='Dr. Luiz Almada'
        foto='https://github.com/Luiz-Almada.png'
        especialidade='Cardiologista'
        data='16/02/2024'
        foiAtendido
      />      

    <CardConsulta 
        nome='Dr. Luiz Almada'
        foto='https://github.com/Luiz-Almada.png'
        especialidade='Cardiologista'
        data='16/02/2024'
        foiAtendido
      />  

    <CardConsulta 
        nome='Dr. Luiz Almada'
        foto='https://github.com/Luiz-Almada.png'
        especialidade='Cardiologista'
        data='16/02/2024'
        foiAtendido
      />        
    </ScrollView>
  )
}