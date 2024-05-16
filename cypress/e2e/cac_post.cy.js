// cy.wait('@verified').then((verified) =>{
            // expect(verified.response.body.success).to.be.true;

            // // cy.get('.rc-anchor-container').should('be.visible')
            // // cy.get('.rc-anchor-container').should('have.class','recaptcha-checkbox-checkmark')
       
            // cy.get('.rc-anchor.rc-anchor-normal.rc-anchor-light').should('have.class','recaptcha-checkbox-checkmark')
  
            // })

/*Get the cac website*/
      let preUsername = "lkbalogun"
      let prePassword = "yellow"
      let usernameInp = ":nth-child(1) > .ui > .ng-untouched"
      let passwordInp = ":nth-child(2) > .ui > .ng-untouched"
      let frame = '[style="width: 304px; height: 78px;"] > div > iframe'  
      
      describe('CAC PRE LANDING', ()=>{
      
      //user login
       it('user login',()=>{
            //get api to verify captcha and wait until condition is met
            
            cy.intercept('GET','https://www.google.com/recaptcha/api2/replaceimage?k=6LeUP58eAAAAACgLma1n3_m8D2FsCTe39UFBmN0c').as('getcaptcha');
            cy.intercept('https://www.google.com/recaptcha/api2/userverify?k=6LeUP58eAAAAACgLma1n3_m8D2FsCTe39UFBmN0c').as('verified');
            
            cy.visit("http://185.205.209.145:8083/login")

            cy.get(usernameInp).type(preUsername)
            
            let submit = cy.get('.ui.active > :nth-child(2)')
             cy.wait('@verified', { timeout: 60000 })
            
            
             //.then(()=>{
            //   return new Promise((resolve,reject)=>{
            //     if (verifier){
            //       cy.log('captcha failed')
            //       resolve()
            //     }else{
            //       cy.intercept('https://www.google.com/recaptcha/api2/userverify?k=6LeUP58eAAAAACgLma1n3_m8D2FsCTe39UFBmN0c').as('verified');
            //       cy.visit('https://www.google.com/recaptcha/api2/userverify?k=6LeUP58eAAAAACgLma1n3_m8D2FsCTe39UFBmN0c');
            //       cy.get('.recaptcha-checkbox-checkmark').should('exist').then(()=>{
            //           verified = true;
            //           cy.get('.rc-anchor-container').should('be.visible')
            //           cy.get('.ui.active > :nth-child(2)').click();
            //           resolve()
            //       })
            //     }
            //   })
            // })
            cy.log('submitting form for username and captcha verification')
            cy.get('.ui.active > :nth-child(2)').click()
            
            cy.get('[data-top="363.4321999910593"]').type(prePassword)
            cy.get(':nth-child(1) > .fluid').click()


              //user reservation ----
            cy.log('business name reservation')
            cy.get(':nth-child(1) > :nth-child(3) > .ui').click()
  
            // cy.log('display the form for business names reservation')

      //  //fill form -----
      // cy.get('[formgroupname="classification"] > .ui').select('1').should('have.value','1')
      // cy.get('[formgroupname="companyType"] > .ui').select('6990').should('have.value','6990')
      //  cy.get('.required > .ng-pristine').type('chima sons')
      //  cy.get(':nth-child(2) > .ng-pristine').type('optional')

      //  cy.log(' if submit is active,-- submit')
      //  cy.get('.floated').submit()
       
      //  cy.log('fill page 2')

      //  cy.log('FILLING BUSINESS CATEGORIES FOR PAGE 2')
      // //  cy.log('availability search')
      //  cy.get('.form > :nth-child(1) > .ui').select('NEW INCORPORATION').should('have.value','NEW INCORPORATION')
      //  cy.get('.two > :nth-child(2) > .ng-untouched').select('13').should('have.value','13')
      //  cy.get('.two > :nth-child(2) > .ng-untouched').select('199218').should('have.value','199218')
      //  cy.get(':nth-child(3) > .ng-untouched').type('fishing')
      //  cy.get('.floated').click()
       })

     


      
        //     cy.get('body').then(($body) => {
        //        if ($body.find('div.table-wrapper.ui.basic.segment)){
        //          //Element Found
        //        } else {
        //          //Element not found
        //     })
        // })

})