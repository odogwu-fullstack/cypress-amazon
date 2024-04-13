class LandingPage {
    static enterURL(){
       cy.visit("/");
   }

  //  static extractPrice(text){
  //    return Number(text.substr(1).replace(",",""))
  //  }

   public static clickHamburgerMenu(){
     cy.get('div > a[href^="\/ref"]').first().click();
        cy.wait(1000);
        cy.get("#nav-hamburger-menu").click();
   }

    public static clickComputersLinkItem(){
     cy.wait(3000);
       cy.get('.hmenu-visible > li:nth-child(8)').click({scrollBehavior:false});
       }

    public static clickTabletAccesoriesLinkItem(){
     cy.wait(2000);
       cy.get('ul.hmenu-visible > li:nth-child(15) > a.hmenu-item').contains('Tablet Accessories').click({force:true});
       }


       public static checkJETechBox(){
        cy.wait(10000);
             cy.get("span.a-size-base").contains("JETech").then(($hah) => {
            cy.wrap($hah).prev().find("label").find("input[type=checkbox]").check({force:true});
          })
       }

   public static sortByNewestArrival(){
      cy.get('select#s-result-sort-select').select('Newest Arrivals', {force:true});   
   }

   public static selectLowestPricedItem(){
      cy.get('span.a-price > span.a-offscreen').then($spanObjects => {
        let lowestPrice = Number($spanObjects[0].textContent.substr(1).replace(",",""));
        let lowestIndex = 0;

        $spanObjects.each(
           function(index,item){
              if(Number(item.textContent.substr(1).replace(",","")) < lowestPrice ){
                 lowestPrice = Number(item.textContent.substr(1).replace(",",""))
                 lowestIndex = index;
              }
           }
        ) 
         cy.wrap($spanObjects[lowestIndex]).click({force:true});
      }
      
      )
   }


  public static switchWindow(){
     cy.window().then(win => {
        cy.location().then(loc=> {
        win.open(loc.href, '_blank'); 
        })
      })
       }

public static confirmAboutItem(){
  cy.get("h1.a-size-base-plus.a-text-bold").contains("About this item").should("be.visible")
   .then($element => {
       cy.wrap($element).next('ul').find("li").each((item) => {
        console.log(item[0].firstChild.textContent);
       })
   })
}
}


export default LandingPage;