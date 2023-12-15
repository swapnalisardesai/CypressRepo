
///<reference types="cypress"/>


describe('web elements methods', function () {
    //type()
    it('type():type on input elements', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("swapnali")
        cy.get('[name="last_name"]').type("sardesai")
        cy.get('[name="email"]').type("swapnali.sardesai@gmail.com")
        cy.get('[name="message"]').type('learning cypress')
    })

    //click()
    it('click():click on function', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("swapnali")
        cy.get('[name="last_name"]').type("sardesai")
        cy.get('[name="email"]').type("swapnali.sardesai@gmail.com")
        cy.get('[name="message"]').type('learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('exist')
    })
    //clear()
    it('clear():clearing the element', function () {
        //arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        let first_name = cy.get('input[name="first_name"]')
        let last_name = cy.get('[name="last_name"]')
        let email = cy.get('[name="email"]')
        let message = cy.get('[name="message"]')
        //action
        first_name.type("swapnali")
        last_name.type("sardesai")
        email.type("swapnali.sardesai@gmail.com")
        message.type('learning cypress')

        first_name.clear()
        last_name.clear()
        email.clear()
        message.clear()

        //assertion
        cy.get('[type="reset"]').click()
        first_name.should('have.text', '')
        last_name.should('have.text', '')
        email.should('have.text', '')
        message.should('have.text', '')
    })

    //getting attribute and verifying attribute
    it('getting attribute and verifying', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.attr', 'name')
        cy.get('h2').should('have.attr', 'class')
        cy.get('h2').should('have.attr', 'name', 'contactme')
        cy.get('h2').should('have.attr', 'class', 'section_header')
        //using invoke
        cy.get('h2').invoke('attr', 'class').then(function (text) {
            cy.log(text)
        })
        cy.get('h2').invoke('attr', 'name').then(function (text) {
            cy.log(text)
        })
    })
    //getting text and verifying the text of element
    it('getting text and verifying the text of element', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.text', 'CONTACT US')
        cy.get('h2').invoke('text').then((txt) => {
            cy.log(txt)
        })
        //element visible or not
        cy.get('h2').should('be.visible')
    })

    //element is selected
    it('element is selected',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="pumpkin"]').should('be.checked')
    })

    //element is enabled
    it.only('element is enabled',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="cabbage"]').should('be.disabled')


    })


})