# curso_nodejs
Códigos de nodejs realizados durante o curso

Primeiro instalar o nvm 

[Link sobre a instalação](https://github.com/nvm-sh/nvm#install--update-script)

Antes precisamos se existe o arquivo bash_profile com o comando:`ls -a | grep “bash_profile`

Caso não tenha o arquivo criado, realize a criação com o comando:  `touch ~/.bash_profile`

Feito isso execute o comando: `curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh"https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

Esse comando faz com que seja baixado o repositório do nvm. Após a conclusão feche o terminal e abra novamente.

Para testar se deu tudo certo execute a linha de comando: `command -v nvm`

Validado o funcionamento basta instalar o node: `nvm install node`

Obs.: Você pode instalar várias versões do node, basta dar o comando `nvm install` e o número da versão. 



Iniciando o npm: `npm init -y`

Ao executar o comando é criado um arquivo json chamando package, com as seguintes informações: 
```
{ 

  "name": "node-examples", 

  "version": "1.0.0", 

  "description": "", 

  "main": "main.js", 

  "scripts": { 

    "test": "echo \"Error: no test specified\" && exit 1" 

  }, 

  "keywords": [], 

  "author": "", 

  "license": "ISC" 

} 
```
 
Instalando o yargs para pegar melhor os argumentos, até agora estamos utilizando o process.argv[] 

Comando para instalar: `npm install yargs --save`

*Obs.: Normalmente não enviamos a pasta que fica os arquivos baixados do npm, no arquivo package-lock.json e package.json constam todas as dependências. Sendo assim você pode mandar o comando npm i que automaticamente será instalado todos os pacotes. (É bem parecido com o requerimento utilizado no python para instalar todas as bibliotecas).*

Para passar um argumento usando o yargs é preciso passar de uma maneira diferente:  

Chama o node o arquivo e passa `--argumento=valor`: 

No curso o professor está utilizando o atom, pois, possui um plugin para facilitar a utilização do Typescript. Sendo assim mudei de ferramenta, eu estava utilizando o Vscode. 

Para instalar o plugin basta ir em Install package e procurar por atom-typescript. 

Depois disso basta instalar o typescript do npm: `npm install typescript --g`

 
Iniciando o compilador Typescript: `tsc –init`

É criado o arquivo **tsconfig.json**, após isso precisa apagar boa parte do código gerado dentro do arquivo e deixar dessa maneira: 

*Obs.: foi alterado o “target”: “es5”, para “target”: “es5”*

> Preciso documentar como realizar a instalação do docker e como baixar o container do mongo 

Iniciando o mongo: `sudo docker start mongodb`


Instalando o mongoose (Eu precisei usar o sudo para poder instalar): `sudo npm i mongoose -P`

Instalando a dependência para o typescript: `sudo npm i @types/mongoose@4.7.32 -D –E`


Instalando o restify errors : `sudo npm i restify-errors@5.0.0 -P –E`

Instalando o types restify-errors : `sudo npm i @types/restify-errors@4.3.2 -D -E`

Instalando o bcrypt: `sudo npm i bcrypt@1.0.3 -P –E`

Instalando o types bcrypt: `sudo npm i @types/bcrypt@1.0.0 -D –E`

***Após a implementação da criptografia deu problema na execução, depois de muito tentar eu apaguei todos os modulos e instalei novamente `“npm install”`, ele pega todos os pacotes do package.json e faz a instalação automaticamente. Mesmo assim deu erro então usei o comando npm rebuild bcrypt --build-from-source e voltou a funcionar.***