import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I am on "([^\"]*)" page$/, async() => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });
    Given(/^I choose "([^\"]*)","([^\"]*)", "(\d*)" and "([^\"]*)"$/, async(categoria, cor, quantidade, mensagem) => {
        await $("input[name='categoria']").sendKeys(<string>categoria);
        await $("input[name='cor']").sendKeys(<string>cor);
        await $("input[name='quantidade']").sendKeys(<string>quantidade);
        await $("input[name='mensagem']").sendKeys(<string>mensagem);   
    });
    When(/^I ask the system to "Finalizar"$/, async () => {
        await element(by.buttonText('Finalizar')).click();
    });
    Then(/^Then I am at “Submitted request” page $/, async(nome, pagina) => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });
    Then(/^I see "(\d*)" product at list"$/, async () => {
        var pedidos : ElementArrayFinder = element.all(by.class('pedidosList'));;
        expect(Promise.resolve(pedidos.length)).to.eventually.equal(1);
    });
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I am on "Produto Personalizado" page$/, async() => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });
    Given(/^I choose "([^\"]*)","([^\"]*)", "(\d*)" and "([^\"]*)"$/, async(categoria, cor, quantidade, mensagem) => {
        await $("input[name='categoria']").sendKeys(<string>categoria);
        await $("input[name='quantidade']").sendKeys(<string>quantidade);
        await $("input[name='mensagem']").sendKeys(<string>mensagem);   
    });
    When(/^I ask the system to "Finalizar"$/, async () => {
        await element(by.buttonText('Finalizar')).click();
    });
    Then(/^Then I am at “Produto Personalizado” page $/, async(nome, pagina) => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });
    Then(/^see "Preencha todos os campos" message$/, async () => {
        //var mensagem = element(by.name('aviso'));
        //await expect(mensagem).to.eventually.equal("Preencha todos os campos"););
    });
})

defineSupportCode(function( {Given, When, Then}) {
    Given(/^I am logged as "([^\"]*)"$/, async (usuario) => {
        var usr = element(by.name('user'));
        await expect(usr.name()).to.eventually.equal(usuario);
    });
    Given(/^I am on "Produto Personalizado" page$/, async() => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });
    Given(/^I choose "([^\"]*)","([^\"]*)", "-1x" and "([^\"]*)"$/, async(categoria, cor, mensagem) => {
        await $("input[name='categoria']").sendKeys(<string>categoria);
        await $("input[name='quantidade']").sendKeys(-1);
        await $("input[name='mensagem']").sendKeys(<string>mensagem);   
    });
    When(/^I ask the system to "Finalizar"$/, async () => {
        await element(by.buttonText('Finalizar')).click();
    });
    Then(/^Then I am at “Produto Personalizado” page $/, async(nome, pagina) => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });
    Then(/^see "Informações incorretas" message$/, async () => {
        //var mensagem = element(by.name('aviso'));
        //await expect(mensagem).to.eventually.equal("Informações incorretas"););
    });
})