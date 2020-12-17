 class Painter {
         canDraw = false;

         drawTmpFigure({ x, y }, figure) {
            this.canDraw = this.canBeDrawn({ x, y }, figure);
            if (!this.canDraw) {
               this.clearTmpFigure();
               return;
            }

            let box = $('tmp-figure')
            let block = boxesArray[x][y];
            let [x1, y1] = [block.x, block.y];

            setStyle(box, {
               left: x1 + 'px',
               top: y1 + 'px',
               opacity: .4
            })

            Figure.draw(figure, boxWidth * .97, boxHeight * .97, box)
         }

         clearTmpFigure() {
            $('tmp-figure').innerHTML = "";
         }

         canBeDrawn({ x, y }, figure) {
            if (x == undefined || y == undefined) {
               return false;
            }

            let lx = 0, ly = 0;
            let busy = false;

            figure.forEach((r, i) => {
               if (busy) return;
               r.forEach((c, j) => {
                  if (busy) return;
                  if (figure[i][j] !== '.') {
                     lx = Math.max(lx, i);
                     ly = Math.max(ly, j);
                     if (i + x < boxesOnRow && j + y < boxesOnColumn) {
                        if (boxesArray[x + i][y + j].busy == 1) {
                           busy = true;
                        }
                     } else {
                        busy = true;
                     }
                  }
               })
            })

            let can = ((x + lx) < boxesOnRow) && ((y + ly) < boxesOnColumn);
            if (busy) {
               can = false;
            }
            // this.canDraw = can;

            return can;
         }

         tryToDraw() {
            this.clearTmpFigure();
            if (state.boxCoords && state.figure) {
               this.canDraw = this.canBeDrawn(state.boxCoords, state.figure)
            } else {
               this.canDraw = false;
            }
            if (!this.canDraw) {
               return;
            }
            this.draw();
            figureHelper.removeFigure();
            this.update()
         }

         draw() {
            let figure = state.figure;
            let { x, y } = state.boxCoords;

            figure.forEach((r, i) => {
               r.forEach((c, j) => {
                  if (figure[i][j] !== '.') {
                     setStyle(boxesArray[x + i][y + j].div, {
                        background: boxColor,
                     })
                     //  console.log("updated")
                     remover.update({ x: x + i, y: y + j });
                  }
               })
            })
            remover.cleanUp()
         }

         update() {
            let removed = false;
            state.allFigures = state.allFigures.filter(({ type }) => {
               if (removed) return true;
               removed = (type === state.type)
               return !removed
            })
            state.isDrawable = {}
            placeFinder.checkAll(state.allFigures)
            // console.log(state.isDrawable)
            score.update()
         }
      }

      const painter = new Painter();
