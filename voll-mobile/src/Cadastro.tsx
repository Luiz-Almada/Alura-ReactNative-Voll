import { VStack, Image, Box, Checkbox, ScrollView, Text } from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { sessoes } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSessao, setNumSessao] = useState(0);

  function avancarSessao() {
    if (numSessao < sessoes.length - 1) {
      setNumSessao(numSessao + 1);
    }
  }

  function voltarSessao() {
    if (numSessao > 0) {
      setNumSessao(numSessao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf='center'/>
      <Titulo>{sessoes[numSessao].titulo}</Titulo>
      <Box>
        {sessoes[numSessao].entradaTexto.map((entrada) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            />
          );
          // type={entrada.type.toString()} />
        })}
      </Box>

      <Box>
        <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={2}>
          {sessoes[numSessao].checkBox.length > 0 && 'Selecione o plano:'}
        </Text>
        {sessoes[numSessao].checkBox.map((checkbox) => {
          return (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          );
        })}
      </Box>

      {numSessao > 0 && (
        <Botao onPress={() => voltarSessao()} bg="gray.400">
          Voltar
        </Botao>
      )}
      <Botao onPress={() => avancarSessao()} mt={4} mb={20}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
