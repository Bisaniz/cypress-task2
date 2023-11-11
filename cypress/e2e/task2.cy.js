/// <reference types="cypress" />

it("task",()=>{
 cy.visit("/checkout/#shipping");
 cy.get('#search').clear('s');
 cy.get('#search').type('shirt{enter}');
 cy.get(':nth-child(2) > .product-item-info > .photo >.product-image-container > .product-image-wrapper > .product-image-photo').click();
 cy.get('#option-label-size-143-item-167').click();
 cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
 cy.get('#option-label-color-93-item-57').click();
 cy.get('#product-addtocart-button > span').click();cy.wait(3000);
 cy.get('.showcart').click();cy.get('#top-cart-btn-checkout').click();
 cy.wait(5000);

 cy.get('#customer-email').type('b@gmail.com'); //id
cy.get('#customer-password').type('123456'); // id
//cy.get('#shipping-new-address-form > .field > .control > .input-text').type('pp');
cy.get('[name="shippingAddress.firstname"]').type('b'); // elements with target="_blank"
cy.get('[name="shippingAddress.lastname"]').type('b'); // elements with target="_blank"
cy.get('[name="shippingAddress.company"]').type('comp'); // elements with target="_blank"
cy.get('[name="shippingAddress.street.0"]').type('nab'); // elements with target="_blank"
cy.get('[name="shippingAddress.city"]').type('nablus'); // elements with target="_blank"
cy.get('[name="shippingAddress.region_id"]').type('texas'); // elements with target="_blank"
cy.get('[name="shippingAddress.postcode"]').type('0000'); // elements with target="_blank"
cy.get('[name="shippingAddress.telephone"]').type('0569888444'); // elements with target="_blank"
//cy.get('.checkout-shipping-method > .step-title');
//cy.get(':nth-child(1) > :nth-child(1) > .radio');
cy.get(':nth-child(1) > .col-price > :nth-child(1) > .price');
cy.get('.button');

});
 