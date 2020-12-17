 class Figure {
         static scaleK = 3;
         cnt = null;

         constructor() {
            this.reset();
         }

         removeFigure() {
            setStyle(state.boxDiv, {
               visibility: 'hidden'
            })
            if (--this.cnt === 0) {
               this.cnt = 3;
               Figure.drawFigures();
            }
         }

         static getRandomFigures(cnt = 3) {
            let keys = Object.keys(FIGURES);
            let len = keys.length;
            let randomFigures = [];

            for (let i = 0; i < cnt; i++) {
               let ind = Math.floor(Math.random() * len);
               randomFigures.push(keys[ind]);
            }
            return randomFigures;
         }

         static drawFigures() {
            $('menu').innerHTML = "";

            let randomFigures = Figure.getRandomFigures();
            randomFigures.forEach(figureType => {
               Figure.drawFigure(figureType)
            })
            placeFinder.checkAll(state.allFigures)
         }

         static drawFigure(figureType) {
            let type = figureType;
            let figure = FIGURES[type].figure
            figure = figure.split("\n")
               .map(c => c.trim())
               .filter(c => c)
               .map(c => c.split(""))

            let marginLeft = width / 6.4 + 'px';
            let box = elt("box", null, null, {
               position: "relative",
               marginLeft: marginLeft,
               marginRight: marginLeft
            })

            const bw = boxWidth / Figure.scaleK;
            const bh = boxHeight / Figure.scaleK;

            Figure.draw(figure, bw, bh, box)
            Event.register(box, figure, type)

            state.allFigures.push({
               type: figureType,
               figure,
               div: box,
            })

            $("menu").append(box)
         }

         static draw(figure, bw, bh, box, style = {}) {
            figure.forEach((r, i) => {
               r.forEach((c, j) => {
                  if (figure[i][j] !== ".") {
                     let l = j * (bw + 3);
                     let t = i * (bh + 3);

                     let el = elt("div", null, null, {
                        top: t + "px",
                        left: l + "px",
                        width: bw + "px",
                        height: bh + "px",
                        background: boxColor,
                        position: "absolute",
                     })
                     setStyle(el, style)
                     box.append(el);
                  }
               })
            })
         }

         reset() {
            this.cnt = 3;
         }
      }

      const figureHelper = new Figure();
