

///<reference type="cypress"\>
    describe('Checkbox dropDown Radio Button enabled or disabled',function(){
        it('should select option from dropdown',function(){
            cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('#dropdowm-menu-1').select('JAVA')
            cy.get('#dropdowm-menu-1').should('have.value','java')

            cy.get('#dropdowm-menu-2').select('Eclipse')
            cy.get('#dropdowm-menu-2').should('have.value','eclipse')

            
            cy.get('#dropdowm-menu-3').select('HTML')
            cy.get('#dropdowm-menu-3').should('have.value','html')
        })

        it('should select a checkbox',function(){
            cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('input[value="option-2"]').click()
            cy.get('input[value="option-2"]').should('be.checked')

            cy.get('input[value="option-3"]').check()
            cy.get('input[value="option-3"]').should('be.checked')
            cy.get('input[value="option-3"]').uncheck()
            cy.get('input[value="option-3"]').should('not.be.checked')
        })
        it.only('should select radio buttons',function(){
            cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('[value="green"]').check().should('be.checked')
            cy.get('[value="blue"]').should('not.be.checked')
        })
        
       

    })