import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

defineSupportCode(function( {Given, When, Then}) {
    Given(/^exists a product "([^\"]*)"$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === produto));
        await prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        await element(by.name(<string> produto)).click();
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^my "Lista de Desejos" is empty$/, async () => {
        var lista_des = element(by.name('lista_desejos'));
        await expect(lista_des.length()).to.eventually.equal(0);
    });
    Given(/^I see the "Adicionar à Lista de Desejos" option$/, async() => {
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    When(/^set the quantity to "(\d*)"$/, async(quantidade) => {
        await $("input[name='quantidade']").sendKeys(<string> quantidade);
    });
    When(/^I select the option "Adicionar a Lista de Desejos"$/, async() => {
        await element(by.name('Adicionar')).click();
    });
    Then(/^I receive a message saying the product was added to "Lista de Desejos"$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Adicionado com sucesso!");
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {
        await expect(browser.getTitle()).to.eventually.equal(produto);
    })
    Then(/^I can see that my "Lista de Desejos" shows "(\d*)"$/, async(quantidade) => {
        var lista_des = element(by.name('lista_desejos'));
        await expect(lista_des.length()).to.eventually.equal(1);
    })
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^exists a product "([^\"]*)"$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === produto));
        await prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        await element(by.name(<string> produto)).click();
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I see the "Adicionar à Lista de Desejos" option$/, async() => {
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    Given(/^the product "([^\"]*)" is not on stock$/, async(produto) => {
        var prod = element(by.name(<string> produto));
        await expect(prod.length()).to.eventually.equal(0);
    });
    When(/^I select the option "Adicionar a Lista de Desejos"$/, async() => {
        await element(by.name('Adicionar')).click();
    });
    Then(/^I receive a message saying the product is not available$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Produto não disponível")
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        await element(by.name(<string> produto)).click();
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I see the  “Compartilhar Lista” option$/, async(elemento) => {
        var share = element(by.name('share_lista_des'));
        await share.should.not.equal(null);
    });
    When(/^I add "([^\"]*)" for name$/, async(nome) => {
        await $("input[name='lista_des_namebox']").sendKeys(<string> nome);
    });
    When(/^I add "([^\"]*)" for email$/, async(email) => {
        await $("input[name='lista_des_emailbox']").sendKeys(<string> email);
    });
    When(/^I select the “Compartilhar Lista” option$/, async() => {
        await element(by.name('share_lista_des')).click();
    });
    Then(/^I receive a message saying the “Lista de Desejos” was sent successfully$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Compartilhado com sucesso!");
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });

})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        await element(by.name(<string> produto)).click();
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I see the  “Compartilhar Lista” option$/, async(elemento) => {
        var share = element(by.name('share_lista_des'));
        await share.should.not.equal(null);
    });
    When(/^I add "([^\"]*)" for name$/, async(nome) => {
        await $("input[name='lista_des_namebox']").sendKeys(<string> nome);
    });
    When(/^I add "([^\"]*)" for email$/, async(email) => {
        await $("input[name='lista_des_emailbox']").sendKeys(<string> email);
    });
    When(/^I select the “Compartilhar Lista” option$/, async() => {
        await element(by.name('share_lista_des')).click();
    });
    Then(/^I receive a message saying the “Lista de Desejos” was not sent successfully because the email is invalid$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Não enviado, favor verificar email digitado!");
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {
        await expect(browser.getTitle()).to.eventually.equal(produto);
    });
})