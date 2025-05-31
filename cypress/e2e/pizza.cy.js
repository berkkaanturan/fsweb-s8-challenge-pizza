describe('Pizza Order Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order') // Update with your app's URL
  })

  // Test 1: Pizza Size Selection
  it('should select pizza size and validate selection', () => {
    // Check if size selector exists
    cy.get('input[type="radio"]').should('have.length', 3)
    
    // Select medium size
    cy.get('input[value="Orta"]').check()
    cy.get('input[value="Orta"]').should('be.checked')
    
    // Verify other sizes are not checked
    cy.get('input[value="Küçük"]').should('not.be.checked')
    cy.get('input[value="Büyük"]').should('not.be.checked')
  })

  // Test 2: Extra Ingredients Selection
  it('should select extra ingredients and validate count', () => {
    // Select 5 ingredients
    cy.get('input[type="checkbox"]').first().check()
    cy.get('input[type="checkbox"]').eq(1).check()
    cy.get('input[type="checkbox"]').eq(2).check()
    cy.get('input[type="checkbox"]').eq(3).check()
    cy.get('input[type="checkbox"]').eq(4).check()

    // Verify selected count
    cy.get('input[type="checkbox"]:checked').should('have.length', 5)

    // Try to select more than 10 ingredients (should show alert)
    for(let i = 5; i < 12; i++) {
      cy.get('input[type="checkbox"]').eq(i).check()
    }
    cy.on('window:alert', (text) => {
      expect(text).to.contains('En fazla 10 malzeme seçebilirsiniz!')
    })
  })

  // Test 3: Complete Order Form Submission
  it('should submit order form with valid data', () => {
    // Fill all required fields
    cy.get('input[value="Büyük"]').check()
    cy.get('select').select('Orta')
    
    // Select 4 ingredients (minimum required)
    cy.get('input[type="checkbox"]').first().check()
    cy.get('input[type="checkbox"]').eq(1).check()
    cy.get('input[type="checkbox"]').eq(2).check()
    cy.get('input[type="checkbox"]').eq(3).check()

    // Add order note
    cy.get('textarea').type('Test sipariş notu')

    // Submit form
    cy.get('button').contains('SİPARİŞ VER').click()

    // Verify navigation to success page
    cy.url().should('include', '/order-success')
    cy.contains('SİPARİŞ ALINDI').should('be.visible')
  })
})