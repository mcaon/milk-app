# Milk App

```
    App (MVP) desenvolvido para demonstrar Offline First e consumo de APIs REST
     utilizando localização georeferenciada do dispositivo, armazenando alguns dados
     em banco local (AsyncStorage) para quando ficar Offline.
     
     APK Mais recente gerada -> https://drive.google.com/drive/folders/1ZHDS3X1RRkWlgJ-NnhF8M-y2FDv6-B1X?usp=sharing
   
```

## Comandos Úteis

Run

```
npx react-native start
npx react-native run-android
npx react-native run-ios
```

### Principais Libs, Frameworks e Tecnologias Utilizadas

- Linguagem: javascript & typescript (https://www.typescriptlang.org/)

    tsx com React: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)

```
    "typescript": "^4.1.5"
```

- Navegação: react-navigation/native (https://reactnavigation.org/)

```
    "@react-navigation/bottom-tabs": "^5.11.8",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3"
```
- API Forecast: HG Brasil (https://hgbrasil.com//)

```
    a chave está armazenada em environment (./src/config/environment.tsx, e pode ser alterada a qualquer momento
```
- Estado da Aplicação: redux (https://redux.js.org/)

```
    "react-redux": "^7.2.2",
    "redux": "^4.0.5",
    "redux-saga": "^1.1.3",
    "reduxsauce": "^1.2.0",
```
- Offline First: redux-persist / AsyncStorage 

```
    "@react-native-async-storage/async-storage": "^1.14.1",
    "redux-persist": "^6.0.0",
```
