import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

defineSupportCode(function( {Given, When, Then}) {
    Given(/^que estou na pagina de "([^\"]*)"$/, async(page) => {
        await browser.get("http://localhost:4200/"+page);
    });
    Given(/^existe o produto "([^\"]*)" com quantidade "([^\"]*)"$/, async(nome, quantidade) => {
        await browser.get("http://localhost:4200/cadastro-de-produto");
        await $("input[name='namebox']").sendKeys(<string> nome);
        await $("input[name='qtdbox']").sendKeys(<string> quantidade);
        await element(by.buttonText('Cadastrar')).click();
    });
        
    When(/^eu mudo a quantidade do produto "([^\"]*)" para "([^\"]*)"$/, async (prod,quantidade) => {
        await $("input[name='qtdProduto']").sendKeys(<string> quantidade);
        await element(by.buttonText('Atualizar')).click();
    });
      
    Then(/^eu vejo o produto "([^\"]*)" com quantidade "(\d*)"$/, async(nome, quantidade) => {
        var Prods : ElementArrayFinder = element.all(by.name('estoqueList'));
        Prods.filter(elem => elem.produto==nome&&elem.quantidade==quantidade).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Then(/^eu vejo uma mensagem de erro$/, async() => {
        // nao sei como referenciar isto aqui
    });
    Given(/^que seleciono a opçao de "Cadastrar produto"$/, async() => {
        await element(by.id("cadastroProdutoBt")).click();
    });
    When(/^eu informo o nome do produto "([^\"]*)" com quantidade "([^\"]*)" e categoria "([^\"]*)"$/, async(nome, qtd, categoria) => {
        await element(by.model('categoria')).sendKeys(<string> categoria);
        await element(by.model('qtd')).sendKeys(<string> qtd);
        await element(by.model('nome')).sendKeys(<string> nome);
        await element(by.id("btnFinalizar")).click();
    })
    Then(/^eu vejo uma mensagem sobre "([^\"]*)" ja estar cadastrado$/, async(nome) => {
        // nao sei como referenciar isto aqui, entao irei conferir se ainda ha apenas um produto no sistema
    })
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^existe um produto "([^\"]*)" no sistema$/, async(nome) => {
        await browser.get("http://localhost:4200/cadastro-de-produto");
        await $("input[name='namebox']").sendKeys(<string> nome);
        await $("input[name='qtdbox']").sendKeys(2);
        await element(by.buttonText('Cadastrar')).click();
    });
    When(/^eu seleciono a opçao de "remover produto"$/, async () => {
        await element(by.buttonText('Deletar')).click();
    });
    Then(/^eu estou na pagina de "estoque"$/, async () => {
        await browser.get("http://localhost:4200/estoque");
        await expect(browser.getTitle()).to.eventually.equal("Estoque");
    });
    Then(/^eu vejo que o produto "([^\"]*)" nao esta na pagina de estoque$/, async(nome) => {
        var Prods : ElementArrayFinder = element.all(by.name('estoqueList'));
        Prods.filter(elem => elem.produto==nome).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
    
})

