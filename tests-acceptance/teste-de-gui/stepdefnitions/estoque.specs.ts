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
    Given(/^eu mudo sua quantidade para "([^\"]*)"$/, async (quantidade) => {
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

