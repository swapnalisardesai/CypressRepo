///<reference types="cypress"/>
describe('API testing for go rest APi - E2E',function(){
    it('Create a user , retrive , update , delete',function(){
        cy.request({
            url:'https://gorest.co.in/public/v2/users',
            method:'POST'

        })
    })

})