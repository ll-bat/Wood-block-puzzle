class Layout {
   static init() {
      Layout.initBoxes()
      Layout.createLayout();
   }

   static initBoxes() {
      boxesArray = [];
      for (let i = 0; i < boxesOnColumn; i++) {
         boxesArray.push([])
         for (let j = 0; j < boxesOnRow; j++) {
            let x = j * (boxWidth + 1) + offsetX
            let y = i * (boxHeight + 1) + offsetY
            boxesArray[i].push({ x, y })
         }
      }
   }

   static createLayout() {
      $("content").innerHTML = "";

      for (let i = 0; i < boxesOnColumn; i++) {
         for (let j = 0; j < boxesOnRow; j++) {
            let box = boxesArray[i][j]
            Layout.createSingleBlock(box)
         }
      }
   }

   static createSingleBlock(box) {
      let el = elt('div', "box", null, {
         position: 'absolute',
         width: (boxWidth + 0) + "px",
         height: (boxHeight + 0) + "px",
         left: box.x + 'px',
         top: box.y + 'px',
         background: '#1E1E1E',                //rgba(0,0,0,.02)
         border: '2px solid black'       //1px solid rgba(0,0,0,.051)
      })

      el.onmousedown = (e) => e.preventDefault()

      $("content").append(el)

      box.div = el
      box.busy = 0
   }
}
