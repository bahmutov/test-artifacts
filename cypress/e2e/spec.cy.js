/// <reference types="cypress" />

require('cypress-terminal-report/src/installLogsCollector')()

beforeEach(() => {
  // clear the backend data
  cy.request('POST', '/reset', { todos: [] })
})

it('clears the completes todos', () => {
  cy.visit('/?addTodoDelay=1000')
  cy.get('.loaded')
  cy.get('.new-todo').type('first todo{enter}')
  cy.get('li.todo').should('have.length', 1)
  cy.get('.new-todo').type('second todo{enter}')
  cy.get('li.todo').should('have.length', 2)
  cy.get('.new-todo').type('third todo{enter}')
  cy.get('li.todo').should('have.length', 3)
  cy.log('**complete the third todo**')
  cy.get('li.todo').eq(2).find('.toggle').click()
  cy.get('li.todo').eq(2).should('have.class', 'completed')
  cy.get('li.todo').eq(0).should('not.have.class', 'completed')
  cy.get('li.todo').eq(1).should('not.have.class', 'completed')
  cy.log('**clear completed items**')
  cy.get('[data-cy="filter-completed"]').click()
  cy.location('hash').should('equal', '#/completed')
  // an error on purpose
  cy.get('li.todo').should('have.length', 10)
  cy.contains('button', 'Clear completed').click()
  cy.log('**see all todos**')
  cy.get('[data-cy="filter-all"]').click()
  cy.location('hash').should('equal', '#/all')
  cy.get('li.todo').should('have.length', 2)
})
