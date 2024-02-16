import {
  VStack,
  Text,
  ScrollView,
  Avatar,
  Divider,
} from "native-base";

import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar
          size="xl"
          source={{ uri:"https://github.com/Luiz-Almada.png"}}
          mt={5}
        />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>
          Luiz Almada Balbino
        </Titulo>
        <Text>01/01/1980</Text>
        <Text>Brasília-DF</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>
          Histórico médico
        </Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
