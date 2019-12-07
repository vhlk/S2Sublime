import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

defineSupportCode(function( {Given, When, Then}) {
    Given(/^exists a product "([^\"]*)"$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^my "Lista de Desejos" is empty$/, async () => {
        await browser.get("http://localhost:4200/lista-desejos");
        var lista = element(by.name('Produto'));
        await expect(lista.length()).to.eventually.equal(0);
    });
    Given(/^I see the "Adicionar à Lista de Desejos" option$/, async() => {
        await browser.get("http://localhost:4200/");
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    When(/^set the quantity to "(\d*)"$/, async(quantidade) => {
        await $("input[name='qtdAdicionarLista']").sendKeys(<string> quantidade);
    });
    When(/^I select the option "Adicionar a Lista de Desejos"$/, async() => {
        await element(by.name('add_lista_desejos')).click();
    });
    Then(/^I receive a message saying the product was added to "Lista de Desejos"$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Adicionado com sucesso!");
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {        
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })
    Then(/^I can see that my "Lista de Desejos" shows "(\d*)"$/, async(quantidade) => {
        await browser.get("http://localhost:4200/lista-desejos");
        var lista = element(by.name('Produto'));
        await expect(lista.length()).to.eventually.equal(1);
    })
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^exists a product "([^\"]*)"$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I see the "Adicionar à Lista de Desejos" option$/, async() => {
        await browser.get("http://localhost:4200/");
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    Given(/^the product "([^\"]*)" is not on stock$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        var qtd : ElementArrayFinder = element.all(by.name('qtdAdicionarLista'));
        await produtos;
        var existe = produtos.filter(elem =>
            (elem.getText().then(text => (text === produto))));
        await existe;
        var vazio = qtd.filter(elem =>
            (elem.getAttribute('value').then(value => (value === "0"))));
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

    });
    When(/^I select the option "Adicionar a Lista de Desejos"$/, async() => {
        await element(by.name('add_lista_desejos')).click();
    });
    Then(/^I receive a message saying the product is not available$/, async() => {
        var mensagem = element(by.name('mensagens'));
        await expect(mensagem).to.eventually.equal("Produto nao disponivel")
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
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
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
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
        await expect(mensagem).to.eventually.equal("Verifique os dados digitados!");
    });
    Then(/^I am on "([^\"]*)" page$/, async(produto) => {
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
})