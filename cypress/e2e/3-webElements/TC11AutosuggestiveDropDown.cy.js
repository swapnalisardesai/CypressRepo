///<reference types="cypress"/>
describe('Autosuggestive dropdown',()=>{
    it('select a specific value from autosuggestive dropdown',()=>{
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.title().should('eq','WebDriver | Contact Us')
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list>div').each(function($el,index,arr){
            if(el.text()==='Almond'){
                el.trigger('click')
            }
        })


    })
})