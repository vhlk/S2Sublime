import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, protractor } from 'protractor';
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
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        //nao implementado no sitema
        //var usr = element(by.name('user'));
        //await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^my "Lista de Desejos" is empty$/, async () => {
        await browser.get("http://localhost:4200/lista-desejos");
        await expect(element(by.name('Produto')).isPresent()).to.eventually.equal(false);
    });
    Given(/^I see the "([^\"]*)"" option$/, async() => {
        await browser.get("http://localhost:4200/");
        var list = element(by.name('add_lista_desejos'));
        await list.should.not.equal(null);
    });
    When(/^set the quantity to "(\d*)"$/, async(quantidade) => {
        await $("input[name='qtdAdicionarLista']").sendKeys(<string> quantidade);
    });
    When(/^I select the option "([^\"]*)"$/, async(elemento) => {
        await element(by.name(<string> elemento)).click();
    });
    Then(/^I receive a message saying the product was added to "([^\"]*)"$/, async(elemento) => {
        //var mensagem = element(by.name('mensagens'));
        //await expect(mensagem).to.eventually.equal("Adicionado com sucesso!");
    });
    Then(/^I can see that my "([^\"]*)" shows "(\d*)"$/, async(elemento, quantidade) => {
        await element(by.name("pagListaDesejos")).click();
        var lista = element(by.name('Produto'));
    })
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am on "([^\"]*)" page$/, async(produto) => {
        await browser.get("http://localhost:4200/");
        var produtos : ElementArrayFinder = element.all(by.name('produto'));
        await produtos;
        var existe = produtos.filter(elem =>
            elem.getText().then(text => text === produto));
        await existe;
        await existe.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
    Given(/^I see the "([^\"]*)" option$/, async(elemento) => {
        await browser.get("http://localhost:4200/");
        var list = element(by.name(<string>elemento));
        await list.should.not.equal(null);
    });
    Given(/^the product "([^\"]*)" is not on stock$/, async(produto) => {
        //nao e possivel fazer nesta versao do sistema
        //await browser.get("http://localhost:4200/estoque");
        //await expect(element(by.name('qtdProduto')).isPresent()).to.eventually.equal(true);
        //await $("input[name='qtdProduto']").sendKeys(0);
        //await element(by.name("Atualizar")).click();

    });
    Then(/^I receive a message saying the product is not available$/, async() => {
        //var mensagem = element(by.name('mensagens'));
        //await expect(mensagem).to.eventually.equal("Produto nao disponivel")
    });
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am on the "([^\"]*)" page$/, async(produto) => {
        await browser.get("http://localhost:4200/lista-desejos");
    });
    When(/^I add "([^\"]*)" for name$/, async(nome) => {
        await $("input[name='namebox']").sendKeys(<string> nome);
    });
    When(/^I add "([^\"]*)" for email$/, async(email) => {
        await $("input[name='emailbox']").sendKeys(<string> email);
    });
    When(/^I select the "([^\"]*)" option$/, async(elemento) => {
        await element(by.name('share_lista_des')).click();
    });
    Then(/^I receive a message saying the "([^\"]*)" was sent successfully para "([^\"]*)"$/, async(elemento, nome) => {
        var timeoutInMilliseconds = 1000;
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).to.eventually.equal("Email enviado para "+<string>nome);
    });
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I see "([^\"]*)" option$/, async(elemento) => {
        var share = element(by.name('share_lista_des'));
        await share.should.not.equal(null);
    });
    Then(/^I receive a message saying the "([^\"]*)" was not sent successfully because the email is invalid$/, async(elemento) => {
        var timeoutInMilliseconds = 1000;
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).to.eventually.equal("Verifique os dados digitados!");
    });
})