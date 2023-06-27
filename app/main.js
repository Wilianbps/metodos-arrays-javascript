let livros = [];
const endpointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
  const res = await fetch(endpointDaApi);
  livros = await res.json();
  /* Essa função que possui o metodo map, retorna um objeto, 
  e então guardo esse objeto na variavel livrosComDesconto */
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
