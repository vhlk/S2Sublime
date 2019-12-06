Feature: As a usuario
        I want to buscar um produto na barra de pesquisa
        So that I posso ver os produtos que procuro
    Scenario: Pesquisar na barra de pesquisa produto cadastrado
        Given Eu estou na página “pagina principal”
        And Os produtos “caneca dia das maes” e “camisa dia das maes” estão cadastrados
        When Eu coloco na barra de pesquisa “mae”
        Then Eu vejo os produtos “caneca dia das maes” e “camisa dia das maes”
    Scenario: Pesquisar na barra de pesquisa produto não cadastrado
        Given Eu estou na página “pagina principal”
        And Não há produtos com “batata frita” como substring cadastrados
        When Eu coloco na barra de pesquisa “batata frita”
        Then Eu vejo um aviso que não há resultados para “batata frita”