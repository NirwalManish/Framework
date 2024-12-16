class ProductPage
{
    getcheckoutButton()
    {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
}

export default ProductPage;