function $(id) {
   return dom.getElementById(id)
}

function dd(text) {
   $('dd').innerText = text
}

function vv(text) {
   $("vv").innerText = text
}

function attach(obj, ev, fn) {
   obj.addEventListener(ev, fn)
}

function detach(obj, ev, fn) {
   obj.removeEventListener(ev, fn)
}

function setStyle(el, style) {
   for (let a in style) {
      el.style[a] = style[a]
   }
}

function elt(el, cls, id, style) {
   let elm = dom.createElement(el)
   if (cls) elm.className = cls
   if (id) elm.setAttribute('id', id)
   if (style) setStyle(elm, style)
   return elm
}
