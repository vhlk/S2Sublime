import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

defineSupportCode(function( {Given, When, Then}) {
    Given(/^que estou na página de "estoque"$/, async() => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('S2Sublime');
        await $("a[name='estoque']").click();
    });
    Given(/^existe o produto "([^\"]*)" com quantidade "([^\"]*)" e categoria "([^\"]*)"$/, async(nome, quantidade, categoria) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos.filter(elem => elem.getText().then(text => text === nome));
    });
    When(/^eu mudo sua quantidade para "([^\"]*)"$/, async (quantidade) => {
        await $("input[name='quantidade']").sendKeys(quantidade);
        await element(by.buttonText('Atualizar')).click();
    });
    Then(/^estou na página de "estoque"$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal("Estoque");
    });
    Given(/^existe o produto "([^\"]*)" com quantidade "([^\"]*)" e categoria "([^\"]*)"$/, async(nome, quantidade, categoria) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos.filter(elem => elem.getText().then(text => text === nome));
    });
    When(/^And eu mudo sua quantidade para "([^\"]*)"$/, async(quantidade) => {
        await $("input[name='quantidade']").sendKeys(quantidade);
        await element(by.buttonText('Atualizar')).click();
        // Implementar click no popup
    });
    Then(/^eu vejo uma mensagem de erro$/, async() => {
        // não sei como referenciar isto aqui
    });
    Given(/^que seleciono a opção de "Cadastrar produto"$/, async() => {
        await element(by.id("cadastroProdutoBt")).click();
    });
    When(/^eu informo o nome do produto "([^\"]*)" com quantidade "([^\"]*)" e categoria "([^\"]*)"$/, async(nome, qtd, categoria) => {
        await element(by.model('categoria')).sendKeys(categoria);
        await element(by.model('qtd')).sendKeys(qtd);
        await element(by.model('nome')).sendKeys(nome);
        await element(by.id("btnFinalizar")).click();
    })
    Then(/^eu vejo uma mensagem sobre este produto já estar cadastrado$/, async() => {
        // não sei como referenciar isto aqui
    })
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^que estou na página de "estoque"$/, async() => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('S2Sublime');
        await $("a[name='estoque']").click();
    });
    Given(/^existe um produto "([^\"]*)" no sistema$/, async(nome) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos.filter(elem => elem.getText().then(text => text === nome)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    When(/^eu seleciono a opção de "remover produto"$/, async () => {
        await element(by.buttonText('Deletar')).click();
    });
    Then(/^estou na página de "estoque"$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal("Estoque");
    });
    Then(/^eu vejo que o produto "([^\"]*)" não está na pagina de "([^\"]*)" $/, async(nome, pagina) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === nome));
        await prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
    
})

