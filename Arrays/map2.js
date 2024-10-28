const carrinho =[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Cardeno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco":7.50}'
]
//retorna um array apenas com os preços
const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado);
