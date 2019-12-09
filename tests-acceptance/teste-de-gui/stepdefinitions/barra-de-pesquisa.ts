import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { async } from 'q';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let should = chai.should();

defineSupportCode(function( {Given, When, Then}) {
    Given(/^Os produtos "([^\"]*)" e "([^\"]*)" estão cadastrados$/, async (prod1,prod2) => {
        await browser.get("http://localhost:4200/cadastro-de-produto");
        await $("input[name='namebox']").sendKeys(<string> prod1);
        await $("input[name='qtdbox']").sendKeys(2);
        await element(by.buttonText('Cadastrar')).click();

        await $("input[name='namebox']").sendKeys(<string> prod2);
        await $("input[name='qtdbox']").sendKeys(2);
        await element(by.buttonText('Cadastrar')).click();
    });
    Given(/^Eu estou na pagina principal$/, async () => {
        await browser.get("http://localhost:4200/");
    });
    Given(/^Não há produtos com "([^\"]*)" como substring cadastrados$/, async (search) => {
        var searchedProds : ElementArrayFinder = element.all(by.class('produtos'));
        searchedProds.filter(elem => elem.produto==search).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
    When(/^Eu coloco na barra de pesquisa "([^\"]*)"$/, async (search)=>{
        await $("input[class='searchInput']").sendKeys(<string> search);
        await $("button[class='searchButton']").click();
    });
    Then(/^Eu vejo os produtos "([^\"]*)" e "([^\"]*)"$/, async (prod1, prod2) => {
        var searchedProds : ElementArrayFinder = element.all(by.class('searchResults'));
        searchedProds.filter(elem => elem.produto==prod1||elem.produto==prod2).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(2));
    });
    Then(/^Eu vejo que não há resultado para minha pesquisa "([^\"]*)"$/, async (search) => {
        var searchedProds : ElementArrayFinder = element.all(by.class('searchResults'));
        searchedProds.filter(elem => elem.produto==search).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
})