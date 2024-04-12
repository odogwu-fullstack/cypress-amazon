class LandingPage {
     static enterURL(){
        cy.visit("https://www.amazon.com")
    }

    static extractPrice(text){
      return Number(text.substr(1).replace(",",""))
    }

    static clickHamburgerMenu(){
      cy.get('div > a[href^="\/ref"]').first().click();
         cy.wait(1000);
         cy.get("#nav-hamburger-menu").click();
    }

     static clickComputersLinkItem(){
      cy.wait(3000);
        cy.get('.hmenu-visible > li:nth-child(8)').click({scrollBehavior:false});
        }

     static clickTabletAccesoriesLinkItem(){
      cy.wait(2000);
        cy.get('ul.hmenu-visible > li:nth-child(15) > a.hmenu-item').contains('Tablet Accessories').click({force:true});
        }

        static checkJETechBox(){
         cy.wait(10000);
              cy.get("span.a-size-base").contains("JETech").then(($hah) => {
             cy.wrap($hah).prev().find("label").find("input[type=checkbox]").check({force:true});
           })
        }

    static selectNewest(){
       cy.get('select#s-result-sort-select').select('Newest Arrivals', {force:true});   
    }

    static selectLowestPricedItem(){
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


   static switchWindow(){
      cy.visit(cy.url)
   }


}


module.exports = LandingPage;