describe('Test #1 - Automation', () => {
    it('Launch Harvey Normal Website', () => {
      // Go to Website
      cy.visit('https://www.harveynorman.com.au/google-nest-cam-outdoor-or-indoor-battery-1-pack.html')
      // Enter Postcode to Check Product Status
      cy.get('.ProductPageSidebarTabs_sf-sidebar-tabs-content--active__zGi0U > [data-testid="store-locator-wrapper"] > [data-testid="postcode-search-input-wrapper"] > .react-autosuggest__container > .react-autosuggest__input').type(2148)
      cy.get('.react-autosuggest__suggestions-list span:last-child').each(($el, index, $list) => {
        cy.log($el.text())
        if($el.text() === '2148 Blacktown, NSW' ){
          $el.click();
          // Add the product to cart
          cy.get('[data-testid="add-to-cart"]').click()
          // Check the Shoppping Cart
          cy.get('.AddProductNotification_sf-add-product-notification-actions__cYnUX > .btn-hero').click()
        }
      })
    })
  })