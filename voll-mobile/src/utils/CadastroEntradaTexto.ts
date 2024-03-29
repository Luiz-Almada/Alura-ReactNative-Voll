const sessoes = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
        type: "text",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Insira seu endereço de email",
        type: "text",
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Insira sua senha",
        type: "password",
      },
      {
        id: 4,
        label: "Repita a senha",
        placeholder: "Insira sua senha",
        type: "password",
      }
    ],
    checkBox: [],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você:",
    entradaTexto: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Insira seu CEP",
        type: "text",
      },      
      {
        id: 2,
        label: "Endereço",
        placeholder: "Insira seu endereço",
        type: "text",
      },      {
        id: 3,
        label: "Número",
        placeholder: "Insira seu número",
        type: "text",
      },      {
        id: 4,
        label: "Complemento",
        placeholder: "Insira seu complemento",
        type: "text",
      },      {
        id: 5,
        label: "Telefone",
        placeholder: "(00) 00000-0000",
        type: "text",
      },
    ],
    checkBox: [],
  },
  {
    id: 3,
    titulo: "Para finalizar, quais são os seus planos?",
    entradaTexto: [],
    checkBox: [
      {
        id: 1,
        value: "Sulamerica",
      },
      {
        id: 2,
        value: "Unimed",
      },      
      {
        id: 3,
        value: "Bradesco",
      },      
      {
        id: 4,
        value: "Amil",
      },      
      {
        id: 5,
        value: "Boasaúde",
      },      
      {
        id: 6,
        value: "Biovida",
      },      
      {
        id: 7,
        value: "Outros",
      },      
      {
        id: 8,
        value: "Não tenho plano",
      },
    ],
  },
];

export { sessoes };