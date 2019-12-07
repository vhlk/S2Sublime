Feature: As a usuario
        I want to buscar um produto na barra de pesquisa
        So that I posso ver os produtos que procuro
    Scenario: Pesquisar na barra de pesquisa produto cadastrado
        Given Os produtos "caneca dia das maes" e "camisa dia das maes" estão cadastrados
        Given Eu estou na pagina principal
        When Eu coloco na barra de pesquisa "mae"
        Then Eu vejo os produtos "caneca dia das maes" e "camisa dia das maes"
    Scenario: Pesquisar na barra de pesquisa produto não cadastrado
        Given Eu estou na pagina principal
        Given Não há produtos com "batata frita" como substring cadastrados
        When Eu coloco na barra de pesquisa "batata frita"
        Then Eu vejo que não há resultado para minha pesquisa "batata frita"