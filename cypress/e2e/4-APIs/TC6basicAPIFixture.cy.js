///<reference types="cypress"/>
describe('verify POST, PUT call', function () {

    it('verify post request', function () 
    {
        cy.fixture('payload').then(function (el) {
            cy.request({
                url: "https://reqres.in/api/users",
                method: "POST",
                body: el
            })
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(201)
           
        })
    })

    it.only('verify PUT request', function () 
    {
        cy.fixture('payload').then(function (el) {
            cy.request({
                url: "https://reqres.in/api/users/2",
                method: "PUT",
                body: el
            })
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
           
        })
    })



})


