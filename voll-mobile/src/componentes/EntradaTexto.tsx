import { ITextProps, FormControl, Input } from "native-base";
import { ReactNode } from 'react';

interface EntradaTextoProps extends ITextProps {
  argLabel: ReactNode,
  argPlaceholder: string,
  argType: "text"|"password"
}

export function EntradaTexto({ children, argLabel, argPlaceholder, argType, ...rest }: EntradaTextoProps) {
  return (
    <FormControl mt={3}>
    <FormControl.Label>{ argLabel }</FormControl.Label>
    <Input 
      type={ argType }
      placeholder={ argPlaceholder }
      size='lg'
      w='100%'
      borderRadius='lg'
      bgColor='gray.100'
      shadow={3}
      />
  </FormControl>
  );
}
