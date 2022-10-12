export const FormatadorService ={
    valorMonetario(valor: number): string{
        return valor.toLocaleString(
            'pt-br',
            {
                maximumFractionDigits: 2,
                 style:'currency',
                 currency:'BRL'    
                }
        );
    },
    limitarTexto(texto: string, tamanhoMaximo: number): string{
        if(texto.length < tamanhoMaximo) {
            return texto;
        }
        
          return texto.slice(0,tamanhoMaximo) + '...';
    }
}