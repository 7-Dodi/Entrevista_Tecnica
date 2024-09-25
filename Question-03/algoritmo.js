//Importações
const dados = require('./dados.json');

//Função para calcular o menor valor de faturamento do mês
const menorFaturamento = () => {
    let menorFaturamento = dados[0];

    dados.forEach(element => {
        if (element.valor > 0 && element.valor < menorFaturamento.valor) {
            menorFaturamento = element;
        }
    });

    console.log(`O menor faturemento foi ${menorFaturamento.valor} no dia ${menorFaturamento.dia}`);
};

//Função para calcular o maior valor de faturamento do mês
const maiorFaturamento = () => {
    let maiorFaturamento = dados[0];
    
    dados.forEach(element => {
        if (element.valor > 0 && element.valor > maiorFaturamento.valor) {
            maiorFaturamento = element;
        }
    });

    console.log(`O maior faturamento foi ${maiorFaturamento.valor} no dia ${maiorFaturamento.dia}`);
};

//Função para calcular os dias em que o valor de faturamento foi maior que a média do mês
//Inicialmento, função para calcular a média do mês
const mediaFaturamento = () => {
    let soma = 0;
    let diasComFaturamento = 0;

    dados.forEach(element => {
        if (element.valor > 0) {
            soma += element.valor;
            diasComFaturamento++;
        }
    });

    return soma / diasComFaturamento;
};

const diasComFaturamentoSuperio = () => {
    let media = mediaFaturamento();
    let dias = 0;

    dados.forEach(element => {
        if (element.valor > media) {
            dias = dias + 1;
        }
    });

    console.log(`${dias} foi quantidade de dias do mês em que o valor foi superior a media mensal`);
};

//Testanto a funções
menorFaturamento();
maiorFaturamento();
diasComFaturamentoSuperior();