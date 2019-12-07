Feature: Solicitação de produto personalizado

   As a user
   I want to make a request of custom product
   So that I can choose the type, color, quantity and message to put in my product

Scenario: Product request with upload image format .png 
    Given I am logged as "Cliente"
    And I am at "Produto Personalizado" page
    and I choose "Camisa","Azul", "1x" and "Feliz dia dos pais"
    When I upload an image with file name "DiasDosPais.png"
    And I ask the system to "Finalizar" 
    Then I am at "Personalizar Produto" page
    And I see 1 product at list

Scenario: product request with image format diferent of .png or .jpg  
    Given I am logged as "Cliente"
    And I am at "Produto Personalizado" page
    And I choose "Camisa","Azul", "1x" and "Feliz dia dos pais"
    When I upload an image with file name "DiasDosPais.docx"
    And I ask the system to "Finalizar" 
    Then I am at "Personalizar Produto" page
    And I see "Arquivo não suportado"
    
Scenario: product request with uncomplete options
    Given I am logged as "Cliente"
    And I am at "Produto Personalizado" page
    And I choose "Almofadas","-", "1x" and "Feliz dia dos pais"
    When I upload an image with file name "DiasDosPais.png"
    And I ask the system to "Finalizar" 
    Then I am at "Personalizar Produto" page
    And I see "Preencha todos os campos"