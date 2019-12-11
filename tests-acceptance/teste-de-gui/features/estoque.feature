Feature: stash
    As an admin
    I want to have a storage
    So that I can add products and control the amount of itens that i have.
    
    Scenario: Remoçao de produtos bem sucedida
        Given que estou na pagina de "estoque"
        Given existe um produto "camisa do batman" no sistema
        When eu seleciono a opçao de "remover produto"
        Then eu estou na pagina de "estoque"
        Then eu vejo uma mensagem de confirmaçao
        Then eu vejo que o produto "camisa do batman" nao esta na pagina de estoque

    Scenario: Editar produto em estoque com sucesso
        Given que estou na pagina de "estoque"
        Given existe o produto "camisa do batman" com quantidade "13"
        When eu mudo a quantidade do produto "camisa do batman" para "14"
        Then eu vejo o produto "camisa do batman" com quantidade "14"


    Scenario: Cadastro de produtos sem todos os dado
        Given que estou na pagina de "estoque"
        Given nao existe um produto "camisa do robin" no sistema
        When eu seleciono a opçao de "Cadastrar produto"
        When eu informo o nome do produto "camisa do robin"
        Then eu estou na pagina de "adicionar novo produto"
        Then eu vejo uma mensagem sobre a falta de dados para cadastrar o produto
        Then eu vejo que o produto "camisa do robin" nao foi cadastrado

    Scenario: Editar produto em estoque com dados invalidos
        Given que existe o produto "camisa do batman" com quantidade "14"
        Given que estou na pagina de "Estoque"
        When eu mudo a quantidade do produto "camisa do batman" para "bananas"
        Then eu estou na pagina de "Estoque"
        Then eu vejo uma mensagem de erro.

    Scenario: Cadastro de um produto ja cadastrado
        Given que estou na pagina de "estoque"
        Given existe um produto "camisa do batman" no sistema
        When eu seleciono a opçao de "Cadastrar produto"
        When eu informo o nome do produto "camisa do batman" com quantidade do produto "12"
        Then eu estou na pagina de "Cadastrar produto"
        Then eu vejo uma mensagem sobre "camisa do batman" ja estar cadastrado
        Then ainda existe um produto "camisa do batman" no sistema
