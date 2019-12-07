"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^exists a product "([^\"]*)"$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        var produtos = protractor_1.element.all(protractor_1.by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === produto));
        yield prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
    Given(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.name(produto)).click();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
    Given(/^I am logged as "([^\"]*)"$/, (usuario) => __awaiter(this, void 0, void 0, function* () {
        var usr = protractor_1.element(protractor_1.by.name('user'));
        yield expect(usr.name()).to.eventually.equal(usuario);
    }));
    Given(/^my "Lista de Desejos" is empty$/, () => __awaiter(this, void 0, void 0, function* () {
        var lista_des = protractor_1.element(protractor_1.by.name('lista_desejos'));
        yield expect(lista_des.length()).to.eventually.equal(0);
    }));
    Given(/^I see the "Adicionar à Lista de Desejos" option$/, () => __awaiter(this, void 0, void 0, function* () {
        var list = protractor_1.element(protractor_1.by.name('add_lista_desejos'));
        yield list.should.not.equal(null);
    }));
    When(/^set the quantity to "(\d*)"$/, (quantidade) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='quantidade']").sendKeys(quantidade);
    }));
    When(/^I select the option "Adicionar a Lista de Desejos"$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.name('Adicionar')).click();
    }));
    Then(/^I receive a message saying the product was added to "Lista de Desejos"$/, () => __awaiter(this, void 0, void 0, function* () {
        var mensagem = protractor_1.element(protractor_1.by.name('mensagens'));
        yield expect(mensagem).to.eventually.equal("Adicionado com sucesso!");
    }));
    Then(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
    Then(/^I can see that my "Lista de Desejos" shows "(\d*)"$/, (quantidade) => __awaiter(this, void 0, void 0, function* () {
        var lista_des = protractor_1.element(protractor_1.by.name('lista_desejos'));
        yield expect(lista_des.length()).to.eventually.equal(1);
    }));
});
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^exists a product "([^\"]*)"$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        var produtos = protractor_1.element.all(protractor_1.by.name('produto'));
        var prod = produtos.filter(elem => elem.getText().then(text => text === produto));
        yield prod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
    Given(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.name(produto)).click();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
    Given(/^I am logged as "([^\"]*)"$/, (usuario) => __awaiter(this, void 0, void 0, function* () {
        var usr = protractor_1.element(protractor_1.by.name('user'));
        yield expect(usr.name()).to.eventually.equal(usuario);
    }));
    Given(/^I see the "Adicionar à Lista de Desejos" option$/, () => __awaiter(this, void 0, void 0, function* () {
        var list = protractor_1.element(protractor_1.by.name('add_lista_desejos'));
        yield list.should.not.equal(null);
    }));
    Given(/^the product "([^\"]*)" is not on stock$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        var prod = protractor_1.element(protractor_1.by.name(produto));
        yield expect(prod.length()).to.eventually.equal(0);
    }));
    When(/^I select the option "Adicionar a Lista de Desejos"$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.name('Adicionar')).click();
    }));
    Then(/^I receive a message saying the product is not available$/, () => __awaiter(this, void 0, void 0, function* () {
        var mensagem = protractor_1.element(protractor_1.by.name('mensagens'));
        yield expect(mensagem).to.eventually.equal("Produto não disponível");
    }));
    Then(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
});
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield protractor_1.element(protractor_1.by.name(produto)).click();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
    Given(/^I am logged as "([^\"]*)"$/, (usuario) => __awaiter(this, void 0, void 0, function* () {
        var usr = protractor_1.element(protractor_1.by.name('user'));
        yield expect(usr.name()).to.eventually.equal(usuario);
    }));
    Given(/^I see the  “Compartilhar Lista” option$/, (elemento) => __awaiter(this, void 0, void 0, function* () {
        var share = protractor_1.element(protractor_1.by.name('share_lista_des'));
        yield share.should.not.equal(null);
    }));
    When(/^I add "([^\"]*)" for name$/, (nome) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='lista_des_namebox']").sendKeys(nome);
    }));
    When(/^I add "([^\"]*)" for email$/, (email) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='lista_des_emailbox']").sendKeys(email);
    }));
    When(/^I select the “Compartilhar Lista” option$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.name('share_lista_des')).click();
    }));
    Then(/^I receive a message saying the “Lista de Desejos” was sent successfully$/, () => __awaiter(this, void 0, void 0, function* () {
        var mensagem = protractor_1.element(protractor_1.by.name('mensagens'));
        yield expect(mensagem).to.eventually.equal("Compartilhado com sucesso!");
    }));
    Then(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
});
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield protractor_1.element(protractor_1.by.name(produto)).click();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
    Given(/^I am logged as "([^\"]*)"$/, (usuario) => __awaiter(this, void 0, void 0, function* () {
        var usr = protractor_1.element(protractor_1.by.name('user'));
        yield expect(usr.name()).to.eventually.equal(usuario);
    }));
    Given(/^I see the  “Compartilhar Lista” option$/, (elemento) => __awaiter(this, void 0, void 0, function* () {
        var share = protractor_1.element(protractor_1.by.name('share_lista_des'));
        yield share.should.not.equal(null);
    }));
    When(/^I add "([^\"]*)" for name$/, (nome) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='lista_des_namebox']").sendKeys(nome);
    }));
    When(/^I add "([^\"]*)" for email$/, (email) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='lista_des_emailbox']").sendKeys(email);
    }));
    When(/^I select the “Compartilhar Lista” option$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.name('share_lista_des')).click();
    }));
    Then(/^I receive a message saying the “Lista de Desejos” was not sent successfully because the email is invalid$/, () => __awaiter(this, void 0, void 0, function* () {
        var mensagem = protractor_1.element(protractor_1.by.name('mensagens'));
        yield expect(mensagem).to.eventually.equal("Não enviado, favor verificar email digitado!");
    }));
    Then(/^I am on "([^\"]*)" page$/, (produto) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(produto);
    }));
});
