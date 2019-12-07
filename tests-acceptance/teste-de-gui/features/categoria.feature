Feature: As a usuario
        I want to buscar um produto por categoria
        So that I posso ver os produtos de tal categoria
    Scenario: Pesquisar produto por categoria
        Given Eu estou na página “pagina principal”
        And Os produtos “caneca dia das maes” e “caneca dia dos pais” estão cadastrados na categoria “canecas”
        When Eu seleciono a opção “canecas”
        Then Eu estou na categoria “canecas”
        And Eu vejo os produtos “caneca dia das maes” e “caneca dia dos pais”