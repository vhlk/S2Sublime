Feature: lista de desejos
As a client
I want to create a wishlist
So that I can create a list of products I am looking for and, also, share with my friends or family

Scenario: Adicao a lista de Desejos
Given exists a product "Caneca Dia dos Pais"
And I am on "Caneca Dia dos Pais" page
And I am logged as "Victor"
And my "Lista de Desejos" is empty
And I see the "add_lista_desejos" option
When set the quantity to "1"
And I select the option "add_lista_desejos"
Then I receive a message saying the product was added to "Lista de Desejos"
And I am on "Caneca Dia dos Pais" page
And I can see that my "Lista de desejos" shows "1"

Scenario: Adicao a lista de desejos de um produto fora de estoque
Given exists a product "Caneca Dia dos Pais"
And I am on "Caneca Dia dos Pais" page
And I am logged as "Victor"
And I see the "add_lista_desejos" option
And the product "Caneca Dia dos Pais" is not on stock
When I select the option "add_lista_desejos"
Then I receive a message saying the product is not available
And I am on "Caneca Dia dos Pais" page

Scenario: Compartilhar Lista de Desejos
Given I am logged as "Victor"
And I am on the "Lista de desejos" page
And I see "share_lista_des" option
When I add "Victor Hugo" for name
And I add "vhlk@cin.ufpe.br" for email
And I select the "share_lista_des" option
Then I receive a message saying the "Lista de Desejos" was sent successfully para "Victor Hugo"
And I am on the "Lista de Desejos" page

Scenario: Compartilhar Lista de Desejos com dados pessoais invalidos
Given I am logged as "Victor"
And I am on the "Lista de desejos" page
And I see "share_lista_des" option
When I add "Victor Hugo" for name
And I add "vhlk" for email
And I select the "share_lista_des" option
Then I receive a message saying the "Lista de Desejos" was not sent successfully because the email is invalid
And I am on the "Lista de Desejos" page
