import emitter from 'contra/emitter'
import utils from './utils'

const DRAG_ACTION_CLASS = 'js-grillsteak-drag'
const RESIZE_ACTION_CLASS = 'js-grillsteak-resize'

function grillsteak (element) {
  let inAction = false
  events()

  var steak = emitter({
    container: element,
    destroy: destroy
  })

  return steak

  function events (remove) {
    let due = remove ? 'remove' : 'add'
    utils.eventTouch(document.body, due, 'mousedown', action)
    utils.eventTouch(document.body, due, 'mouseup', release)
  }

  function action (e) {
    let target = e.target
    if (target.className) {
      if (target.className.indexOf(DRAG_ACTION_CLASS) >= 0) {
        drag(e)
      } else if (target.className.indexOf(RESIZE_ACTION_CLASS) >= 0) {
        resize(e)
      }
    }
  }

  function release (e) {
    if (!inAction) {
      return
    }
    console.log(e)
  }

  function drag () {}
  function resize () {}

  function destroy () {
    events(true)
  }
}

export default grillsteak
