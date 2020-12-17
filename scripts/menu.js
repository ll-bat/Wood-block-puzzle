class Menu {
         static show() {
            $('backdrop').className = 'fallDown'
         }

         static hide() {
            $('backdrop').className = 'fallUp'
         }

         static init() {
            ['start', 'options', 'upgrade', 'about'].forEach(button => {
               let result = `
                  <div class='menu-button' onclick='game.start()'>
                     <div class='inner-button'>
                        <div class='button-background'>
                           <div style='display:flex'>
                              <div class='circle'></div>
                              <span class='text'>
                                  ${button}
                              </span>
                           </div>
                        </div>
                  </div>
               </div>`

               $('menu-buttons').innerHTML += result
            })
         }
      }
