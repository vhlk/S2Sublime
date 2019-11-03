Feature: lista de desejos
As a client
I want to create a wishlist
So that I can create a list of products I am looking for and, also, share with my friends or family

Scenario: Adição à lista de desejos
Given exists a product “Caneca Dia dos Pais”
And I am on “Caneca Dia dos Pais” page
And I am logged as “Victor”
And my “Lista de Desejos” is empty
And I see the “Adicionar à Lista de Desejos” option
When set the quantity to “1”
And I select the option “Adicionar a Lista de Desejos”
Then I receive a message saying the product was added to “Lista de Desejos”
And I am on “Caneca Dia dos Pais” page
And I can see that my “Lista de desejos” shows “1”

