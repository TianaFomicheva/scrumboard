let taskPosition = [0, 0]
let observer = null

function emitChange() {
  observer(taskPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}
