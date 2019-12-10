Feature: Solicitação de produto personalizado

   As a user
   I want to make a request of custom product
   So that I can choose the type, color, quantity and message to put in my product

Scenario: Product request with complete options
    Given I am logged as "user"
    And I am at "Produto Personalizado" page
    and I choose "Camisa","Azul", "1x" and "Feliz dia dos pais"
    When I ask the system to "Finalizar" 
    Then I am at "Personalizar Produto" page
    And I see 1 product at list

Scenario: product request with negative number 
    Given I am logged as "user"
    And I am at "Produto Personalizado" page
    And I choose "Camisa","Azul", "-2x" and "Feliz dia dos pais"
    When I ask the system to "Finalizar" 
    Then I am at "Personalizar Produto" page
    And I see "Informações incorretas"
    
Scenario: product request with uncomplete options
    Given I am logged as "user"
    And I am at "Produto Personalizado" page
    And I choose "Almofadas","-", "1x" and "Feliz dia dos pais"
    When I ask the system to "Finalizar" 
    Then I am at "Personalizar Produto" page
    And I see "Preencha todos os campos"