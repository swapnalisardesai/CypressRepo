///<reference types="cypress"/>
describe('verify the API for  GET,POST,PUT,DELETE', () => {

    //********testcase 1************ */
    it('verify total number of users per page', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            cy.log(response)
            expect(response.body.data.length).to.eq(response.body.per_page)
        })
    })

    //********testcase 2************ */
    it('verify the user with name goerge', () => {
        let username = "George"
        let flaguser = false
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            //cy.log(response)
            response.body.data.forEach(element => {
                if (element.first_name = username) {
                    flaguser = true
                    return
                }
            });
        }).then(function () {
            expect(flaguser).to.eq(true)
        })
    })

    //********testcase 3************ */

    it('verify the POST method', () => {
        let info = {
            "name": "swapnali",
            "job": "sardesai"
        }
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: info
        }).then(function (response) {
            cy.log(response.body)
            expect(response.body).to.have.keys(["name", "job", "id", "createdAt"])
            expect(response.body.name).to.eq(info.name)
            expect(response.body.job).to.eq(info.job)
        })
    })

    //***********test case 4********** */
    it('verify the user is updated', function () {
        let info1 = {
            "name": "swapnali",
            "job": "tester"
        }
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: info1
        }).then(function (response) {
            cy.log(response.body)
            expect(response.body.name).to.eq(info1.name)
            expect(response.body.job).to.eq(info1.job)
        })
    })

    //***********test case 5********** */

    it.only('verify the user is deleted', function () {
        
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
             
        }).then(function (response) {
          //  cy.log(response.body)

           
        })
    })

})