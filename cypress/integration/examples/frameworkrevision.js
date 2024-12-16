///<reference types = "cypress"/>
import HomePage from '../pageObjects/Homepage'
import ProductPage from '../pageObjects/Productpage'

describe("My framework test", function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My first framework test', function () {

        const homePage = new HomePage();
        const productPage = new ProductPage();

        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEnterprenaur().should('be.disabled');
        homePage.getShopTab().click()

        Cypress.config('defaultCommandTimeout', 8000);
        
        this.data.productName.forEach(function(element){
            cy.selectProduct(element);
        })
        

        homePage.checkoutButton().click();
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions > ui > li > a').click();
        cy.get('#checkbox2').click({force: true});

        cy.get('input[type = "submit"]').click();
        cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :')







    })
})