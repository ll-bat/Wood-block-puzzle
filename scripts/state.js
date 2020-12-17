class State {
   figure = null

   type = null       // This is Figure name. For example TYPE_1, TYPE_2, ... 

   boxDiv = null     // This is reference to Div element 

   boxCoords = null  // This is coordinates of the found box

   isDrawable = {}   // Checks, whether or not figure can be drawn, e.g. there is enough place to put it.. 

   allFigures = []   // Current figures that need to be drawn

   set(obj) {
      for (let a in obj) {
         this[a] = obj[a]
      }
   }

   reset() {
      this.figure = null;
      this.type = null;
      this.boxDiv = null;
      this.boxCoords = null;
      this.isDrawable = {};
      this.allFigures = [];
   }
}

const state = new State()
