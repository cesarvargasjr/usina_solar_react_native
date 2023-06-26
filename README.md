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

### Demonstração da aplicação:

<p align="center">

<img width="350" alt="image" src="https://github.com/cesarvargasjr/usina_solar_react_native/assets/72532360/9b456317-97e0-4173-acd5-50545aa78a43">

<img width="354" alt="image" src="https://github.com/cesarvargasjr/usina_solar_react_native/assets/72532360/df4a2e20-6081-4fd6-a5b6-0b6211ccc71a">

<img width="353" alt="image" src="https://github.com/cesarvargasjr/usina_solar_react_native/assets/72532360/e697cbc1-5f03-4494-97c6-6ebd930fecad">

<img width="353" alt="image" src="https://github.com/cesarvargasjr/usina_solar_react_native/assets/72532360/d5bc9ac7-0641-4f7e-8407-b7140416379e">

<img width="353" alt="image" src="https://github.com/cesarvargasjr/usina_solar_react_native/assets/72532360/d7d57370-3cf0-4ee6-ad3f-b4b2ee00cb2a">

<img width="356" alt="image" src="https://github.com/cesarvargasjr/usina_solar_react_native/assets/72532360/493f4654-3e70-4ce1-a290-630d9a8a08e7">

</p>
