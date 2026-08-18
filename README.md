# Comandos para o projeto
## Baixar node_modules: ``npm i``

## Para o executar o webpack: 
``npx build:frontend`` (renomeado) \
`npx webpack -w` (original) \
(deve aparecer `'successfully'` e o webpack vai "olhar" o código escrito em tempo real)

## Para compilar o backend para a pasta dist: 
``npx build:backend`` (renamed)\
``npx tsc`` (original)

**Os comandos devem ser executados na pasta raiz.**\
**Modificar arquivo `package.json` para alterar dependências e arquivo `.ts` executado como main.**