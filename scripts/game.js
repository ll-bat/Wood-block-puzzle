class Game {
   finished = false;

   start() {
      this.reset()
      Menu.hide();
      Layout.init();
      Figure.drawFigures()
   }

   lose() {
      this.finished = true;
      score.updateMaxScore();
      setTimeout(() => {
         Menu.show()
      }, 700)

   }

   reset() {
      score.reset()
      state.reset();
      remover.reset();
      figureHelper.reset();
      this.finished = false;
   }
}
