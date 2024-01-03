///<reference types="cypress"/>

describe('traversal methods', function () {
    //1.children()
    it('.children() command.To get children of DOM elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length', 4)
    })

    //2.next()
    it('.next() command.To get the next sibling DOM element within elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').next().should('have.text', 'Apple')
    })

    //3.nextAll()
    it('.nextAll() command.To get all of the next sibling DOM elements within elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').nextAll().should('have.length', 4)
        cy.get('#veggie').nextAll().should('have.length.greaterThan', 2)
        cy.get('#fruits').nextAll().should('have.length', 10)
        let a = cy.get('#fruits').nextAll()
        cy.log(a)
    })

    //4.nextUntil()
    it('.nextUntil() command.To get all of the next sibling DOM elements within elements until another element.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextUntil('#sugar').should('have.length', 2)
        cy.get('#tea').nextUntil('#sugar').first().should('have.text', 'Milk')

    })

    //5.prev()
    it('.prev() command.To get the previous sibling DOM element within elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })

    //6.prevAll()
    it('.prevAll() command.To get all previous sibling DOM elements within elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)
    })

    //7.prevUntil()
    it('.prevUntil() command.To get all previous sibling DOM elements within elements until other element.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#coffee').should('have.length', 3)

    })

    //8.siblings()
    it('.siblings() command.To get all sibling DOM elements of elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').siblings().should('have.length', 5)
    })

    //9.first()
    it('.first() command.To get the first DOM element within elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.attr', 'id', 'coffee')
    })


    //10.last()
    it('.last() command.To get the last DOM element within elements.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.attr', 'id', 'sugar')
    })

    //11.eq()
    it('.eq() command.To get a DOM element at a specific index.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.attr', 'id', 'milk')
    })

    //12.not()
    it('.not() command.To remove DOM element(s) from the set of elements', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().not('#milk').should('have.length', 4)
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    //13.closest()
    it('.closest() command.To get the closest ancestor DOM element', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').closest('div').should('have.class', 'thumbnail')
    })

    //14.filter()
    it('.filter() command.To get DOM elements that match a specific selector', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('button').filter('.btn-outline-info').should('have.length', 2)
    })

    //15.find()
    it('.find() command.To get descendant DOM elements of the selector', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.thumbnail').find('#coffee').should('have.text', 'Coffee')
    })

     //16.parent()
     it.only('.parent() command.To get parent DOM element of elements', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.class','traversal-drinks-list')
    })

    //17.parents()
    it.only('.parents() command.To get parents DOM element of elements', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parents().should('have.class','traversal-drinks-list')
    })

    //18.parentsUntil()
    it.only('.parentsUntil() command.To get parents DOM element of elements until other element', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parentsUntil('.thumbnail').should('have.length',1)
    })



})

