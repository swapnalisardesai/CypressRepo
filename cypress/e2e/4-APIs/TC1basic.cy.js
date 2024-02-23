///<reference types="cypress"/>

describe('API testing',function(){
    it("verify status code for GET request",function(){
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            method:'GET'
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })

it('verify the status code for POST request',function(){
    cy.request({
        url:"https://reqres.in/api/users",
        method:"POST",
        body:{
            "name": "morpheus",
            "job": "leader"
        }
    }).then(function(response){
        expect(response.status).to.eq(201)
    })
})


it('verify the status code foe PUT request',function(){
    cy.request({
        url:"https://reqres.in/api/users/2",
        method:"PUT",
        body:{
                "name": "swapnali",
                "job": "tester"
        }
    }).then(function(response){
        expect(response.status).to.eq(200)
    })
})

it.only('verify the status code foe DELETE request',function(){
    cy.request({
        url:"https://reqres.in/api/users/2",
        method:"DELETE",
     
    }).then(function(response){
        expect(response.status).to.eq(204)
    })
})



})