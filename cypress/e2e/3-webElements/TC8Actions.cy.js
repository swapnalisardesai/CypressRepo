///<reference types="cypress"/>

describe('Actions element', () => {

    it('double click.', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.class', '.div-double-click')
    })

    it('drag and drop.', () => {
        //mousedown
        //mousemove
        //mouseup
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown', { button: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable').should('contain', 'Dropped!')
    })

    it.only('move to element and click and hold.', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
       // cy.get('#click-box').trigger('mousedown').should('contain','well done!')
        cy.get('#click-box').trigger('mouseup').should('contain','Dont release me!!!')
        cy.get('#div-hover >div.dropdown.hover>button').trigger('mouseover')
        cy.get('#div-hover >div.dropdown.hover>a').should('exist')
    })

})