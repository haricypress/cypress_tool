
describe('Customized Tours Automation', () => {
    it('Should select Home Stay in England and submit the form', () => {
      cy.visit('https://nichethyself.com/tourism/home.html')
      cy.contains("Customized tours").invoke("removeAttr", "target").click()
      cy.get("#days").select("Home Stay")
      cy.get('input[type="checkbox"]').eq(1).check()
      cy.contains("Contact us!").click()

      // Click on "Contact Us" menu on top right corner
      cy.get('a[href="/contact"]').invoke("remoteAttr","target").click();
  
      // Click on Search icon in the "Contact Us" window
      cy.get('.search-icon-selector').click(); // Replace .search-icon-selector with the correct selector
  
      // Enter "London" on the pop-up window and click OK
      cy.get('.search-popup-input').type('London'); // Replace .search-popup-input with the correct selector
      cy.get('.search-popup-ok-button').click(); // Replace .search-popup-ok-button with the correct selector
  
      // Close "Contact Us" window
      cy.get('.contact-us-close-button').click(); // Replace .contact-us-close-button with the correct selector
  
      // Click on "Submit" button on the customized tour form
      cy.get('button[type="submit"]').click(); // Adjust the selector if needed
    });
  });