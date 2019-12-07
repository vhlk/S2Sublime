Feature: stash
As an admin
I want to have a storage
So that I can add products and control the amount of itens that i have.

Scenario: Editar produto em estoque com sucesso
    Given que estou na página de “estoque”
    And existe o produto “camisa do batman” com quantidade “13” e categoria "Camisa"
    When eu seleciono o produto “camisa do batman”
    And eu mudo sua quantidade para "14"
    Then estou na página de “Estoque”
    And eu vejo o produto “camisa do batman” com quantidade “14” e categoria "Camisa"

Scenario: Editar produto em estoque com dados inválidos
    Given que existe o produto “camisa do batman” com quantidade “14” e categoria "Camisa"
    And estou na página de “Estoque”
    When eu seleciono o produto “camisa do batman”
    And eu mudo seu preço para “bananas”
    Then eu estou na página de “Estoque”
    And eu vejo uma mensagem de erro.

Scenario: Cadastro de produtos sem todos os dados
    Given que estou logado como “admin”
    And estou na página de “estoque”
    And não existe um produto “camisa do robin” no sistema
    When eu seleciono a opção de “Cadastrar produto”
    And eu informo o nome do produto “camisa do robin”
    Then eu estou na página de “adicionar novo produto”
    And eu vejo uma mensagem sobre a falta de dados para cadastrar o produto
    And eu vejo que o produto “camisa do robin” não foi cadastrado

Scenario: Cadastro de um produto já cadastrado
    Given que estou logado como "admin"
    And estou na página de “estoque”
    And existe um produto “camisa do batman” no sistema
    When eu seleciono a opção de “Cadastrar produto”
    And eu informo o nome do produto “camisa do batman” com quantidade do produto “12” e categoria "Camisa"
    Then eu estou na página de “Cadastrar produto”
    And eu vejo uma mensagem sobre este produto já estar cadastrado
    And ainda existe um produto “camisa do batman” no sistema

Scenario: Remoção de produtos bem sucedida
    Given que estou logado como "admin"
    And estou na página de “estoque”
    And existe um produto “camisa do batman” no sistema
    When eu seleciono a opção de “remover produto”
    And eu vejo uma mensagem de confirmação
    Then eu estou na página de “estoque”
    And eu vejo que o produto “camisa do batman” não está na página de “estoque”

