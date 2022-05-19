Primeira etapa:

receber matrix flexivel 

Segunda etapa: 

criar loop em forma de escada 

Terceira etapa: 

get divider for equation (ex: D1 = x2,1 / x1,1)

quarta etapa:

fazer soma da fila com o divisor (ex: x2,1 -x1,1 * D1)

quinta etapa: 

repata durante a escada 

sexta etapa:

resolver vetores de tras para frente

(
    ex: 
    [2, 4 | 6]
    [0, 3 | 6]
    ->
    x2 = 6/3, x2 = 2

    x1 = (2 + 8 = 6) -> x1 = (2 = 6-8) -> x1 = (2 = -2) x1 = -2/2, x1 = -1   
)


quando criar novo pivo, passa pelo o matriz procurando 0 caso achar procura linha embaixo com numero difernte de zero e troca os dois vetores,


criar matriz identidade q troca junto com o array normal 