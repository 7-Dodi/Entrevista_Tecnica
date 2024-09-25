//Base de dados
const dados = [
    {estado: "SP", valor: 6783643},
    {estado: "RJ", valor: 3667866},
    {estado: "MG", valor: 2922988},
    {estado: "ES", valor: 2716548},
    {estado: "Outros", valor: 1984953},
];

//Função para calculo de faturamento total
const faturamentoTotal = () => {
    let valorTotal = 0;

    dados.forEach(element => {
        valorTotal += element.valor;
    });

    return valorTotal;
};

//Calculo de percentual
const percentualMensal = () => {
    const total = faturamentoTotal();

    dados.forEach(element => {
        const percentual = (element.valor / total) * 100;
        console.log(`Faturamento do estado ${element.estado}: ${percentual.toFixed(2)}%`);
    });
};

//Testando as funções
percentualMensal();