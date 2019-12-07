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
    Given(/^I choose "Camisa","Azul", "1x" and "Feliz dia dos pais"$/, async(nome) => {
        await element(by.className("formField"));     
    });
    When(/^I ask the system to "Finalizar"$/, async () => {
        await element(by.buttonText('Finalizar')).click();
    });
    Then(/^Then I am at “Submitted request” page $/, async(nome, pagina) => {
        
    });
    Then(/^estou na página de "Produto Personalizado"$/, async () => {
        await browser.get("http://localhost:3000/personalizarProduto");
    });

})