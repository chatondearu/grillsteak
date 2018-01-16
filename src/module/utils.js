import crossvent from 'crossvent'

let _d = document
let documentElt = _d.documentElement

export function eventTouch (el, due, type, fn) {
  let specs = {
    touch: {
      mouseup: 'touchend',
      mousedown: 'touchstart',
      mousemove: 'touchmove'
    },
    pts: {
      mouseup: 'pointerup',
      mousedown: 'pointerdown',
      mousemove: 'pointermove'
    },
    ms: {
      mouseup: 'MSPointerUp',
      mousedown: 'MSPointerDown',
      mousemove: 'MSPointerMove'
    }
  }
  if (global.navigator.pointerEnabled) {
    crossvent[due](el, specs.pts[type], fn)
  } else if (global.navigator.msPointerEnabled) {
    crossvent[due](el, specs.ms[type], fn)
  } else {
    crossvent[due](el, specs.touch[type], fn)
    crossvent[due](el, type, fn)
  }
}

export function getOffset (el) {
  var rect = el.getBoundingClientRect()
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  }
}

export function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp]
  }
  if (documentElt.clientHeight) {
    return documentElt[scrollProp]
  }
  return _d.body[scrollProp]
}

export default {
  documentElt,
  eventTouch,
  getOffset,
  getScroll
}
