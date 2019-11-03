import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

defineSupportCode(function( {Given, When, Then, And}) {
    Given(/^exists a product "([^\"]*)"$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === produto));
        await prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    And(/^I am on "([^\"]*)" page$/, async(produto) => {
        await element(by.name(produto)).click();
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
    And(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    And(/^my "Lista de Desejos" is empty$/, async () => {
        var lista_des = element(by.name('lista_desejos'));
        await expect(lista_des.length()).to.eventually.equal(0);
    });
    And(/^I see the "Adicionar à Lista de Desejos" option$/, async() => {
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    When(/^set the quantity to "(\d*)"$/, async(quantidade) => {
        await $("input[name='quantidade']").sendKeys(<string> quantidade);
    });
    And(/^I select the option "Adicionar a Lista de Desejos"$/, async() => {
        await element(by.name('Adicionar')).click();
    });
    Then(/^I receive a message saying the product was added to "Lista de Desejos"$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Adicionado com sucesso!");
    });
    And(/^I am on "([^\"]*)" page$/, async(produto) => {
        await expect(browser.getTitle()).to.eventually.equal(produto);
    })
    And(/^I can see that my "Lista de Desejos" shows "(\d*)"$/, async(quantidade) => {
        var lista_des = element(by.name('lista_desejos'));
        await expect(lista_des.length()).to.eventually.equal(1);
    })
})

defineSupportCode(function( {Given, When, Then, And}) {
    Given(/^exists a product "([^\"]*)"$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === produto));
        await prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    And(/^I am on "([^\"]*)" page$/, async(produto) => {
        await element(by.name(produto)).click();
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
    And(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    And(/^I see the "Adicionar à Lista de Desejos" option$/, async() => {
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    And(/^the product "([^\"]*)" is not on stock$/, async(produto) => {
        var prod = element(by.name(produto));
        await expect(prod.length()).to.eventually.equal(0);
    });
    When(/^I select the option "Adicionar a Lista de Desejos"$/, async() => {
        await element(by.name('Adicionar')).click();
    });
    Then(/^I receive a message saying the product is not available$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Produto não disponível")
    });
    And(/^I am on "([^\"]*)" page$/, async(produto) => {
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
})