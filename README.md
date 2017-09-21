# Projeto de Cadastro de Cliente utilizando Angular 2

**IDE**
* Visual Studio Code
* Node JS
* Angular CLI

## Estrutura de implementação:

	src/app:
		app-routing: módulo responsável pelas rotas da aplicação
		cliente: componente do cliente para a index e para o formulário
		dashboard: componente do dashboard
		footer: componente do rodapé
    		header: componente do cabeçalho   
		
		shared:
			model: modelos retornados pela API e utilizados pelos componentes
			service: serviços responsáveis por realizar as resquisições as API
			pipe: pipes criadas para transformar objetos. Ex: máscara do telefone e do cnpj e cpf
      
      
## Para rodar a aplicação

  Instalar o [node js](https://nodejs.org/en/)
  
  Instalar o [npm](https://www.npmjs.com/)
  
  Após isso instalar o angular cli
  
  npm install -g angular-cli
  
  Deixar rodando o [Back-End](https://github.com/wellingtonalvesdasilva/projeto-cadastro-cliente-em-asp-net-web-api) nesse endereço
  http://localhost:12856
  
  Após isso rodar a aplicação(apontar para o diretorio onde foi clonado)
  
  ng serve
  
  
