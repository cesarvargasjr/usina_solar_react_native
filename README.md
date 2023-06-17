## Projeto consumindo API com informações do desempenho de uma Usina Solar

### Objetivo do desenvolvimento:

Tem-se por objetivo desenvolver uma aplicação usando React Native, tanto para usuários de smartphones Android quanto IOS, com o intuito de proporcionar um layout agradável, uma ótima experiência para o usuário e performance. Consumindo a API ([Acessar API](https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation)) que possui dados de desempenho de uma Usina Solar.

##

### Funcionalidades desenvolvidas:

- Na screen principal tem-se o desempenho da usina solar referente ao dia atual, divididos em três blocos. No primeiro bloco o percentual de eficência comparando a expectativa versus realidade através de um gráfico circular. No segundo bloco exibe-se o total de três itens relevantes de forma separada no dia em questão, sendo eles: total de carbono evitado, árvores salvas e Kwh. Já no terceiro bloco um gráfico do desempenho da usina a cada hora do dia, para auxiliar na visualização de sua performance com o passar das horas, este gráfico pode ser alternado em dois tipos, em barras ou linha;
- O sistema conta também com uma segunda screen para visualização do histórico da usina solar, sendo possível verificar o desempenho da usina através de um filtro com as seguintes opções: último mês, últimos seis meses e últimos anos. Ao alternar entre esses filtros os dados da screen são atualizados e exibidos e um gráfico que pode ser alternado entre barras ou linha e também o desempenho total dos mesmos itens da screen principal (total de carbono evitado, árvores salvas e Kwh) porém referentes ao período selecionado;

##

### Tecnologias utilizadas no desenvolvimento:

- React Native
- Typescript
- JavaScript
- HTML
- CSS (Styled Components)
- Axios

##

### Para executar o projeto:

Clonar o repositório

```bash
$ git clone https://github.com/cesarvargasjr/usina_solar_react_native.git
```

Acessar a pasta do projeto via terminal

```bash
$ cd usina_solar_react_native
```

Instale as dependências

```bash
$ npm i
```

Execute a aplicação

```bash
$ expo start
```

- Instale o EXPO em seu emulador.

- Após realizar os itens acima, em seu terminal digite "A" para executar a aplicação em um emulador Android ou "I" para emulador IOS.

##

### QR Code para acessar o build da aplicação:

Este projeto é compatível com as plataformas Android e IOS, no entanto, neste momento somente smartphones Android conseguirão navegar no aplicativo através deste QR Code. Caso queira acessar a aplicação em um smartphone IOS será necessário fazer o clone deste repositório e executar o projeto localmente conforme os passos indicados na seção anterior.

<p align="center">

</p>

##

### Screenshot da aplicação:

<p align="center">

</p>
