/// <reference types="cypress" />
describe("selectors",()=> {
it("signin",()=>{
    cy.visit("https://demo.productionready.io/#/login");
    //cy.get('[ui-sref="app.login"]').click();
    cy.get('.auth-page .container .row  h1:first-child');
    //cy.get('.ng-scope .auth-page .row h1:first-child');
cy.contains('a','Need an account?');
cy.get('[type="email"]');
cy.get('[placeholder="Password"]');
cy.get('[type="submit"]');
//cy.wait(3000);
})
it('home',()=>{
cy.visit('https://demo.productionready.io/#/');
cy.get('.banner .logo-font');
cy.contains('p','A place to share your knowledge');
cy.get('[ui-sref="app.register"]');
//cy.get('.ng-scope .navbar ul').first().contains('a','Sign up');
//cy.get('.nav').contains('a','Sign up');
//cy.get('[show-authed="false"] .nav-link').contains('a','Home');
cy.get('[show-authed="false"] > :nth-child(1) > .nav-link');
cy.contains('a','Global Feed');
cy.get(':nth-child(1) > .article-preview > .preview-link > span');
cy.contains('p','Popular Tags');
cy.get('.sidebar .tag-list a').eq(3);
cy.get('.sidebar .tag-list a').last();
cy.get('.pull-xs-right button').first();
cy.get('.ng-scope .article-preview .preview-link h1').first().click();
cy.wait(3000);
cy.get('.banner .container > h1')//.contains('If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!');
cy.get('.container  .article-content p');
cy.get('.tag-list li:first-child');
cy.get('.tag-list li:last-child');
cy.get('.banner .container .ng-isolate-scope .article-meta > a:first-child');
cy.contains('a','Anah Benešová');
cy.contains('span','December 9, 2022');
//cy.get('[user="$ctrl.article.author"] button').first();
//cy.get('.ng-scope > [user="$ctrl.article.author"] > .btn').first();
cy.get('[ng-hide="$ctrl.canModify"] > .ng-isolate-scope .btn').contains('Follow Anah Benešová');
cy.get('.container > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-hide="$ctrl.canModify"] > favorite-btn.ng-isolate-scope > .btn');
})
})