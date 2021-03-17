let taskPosition = [10, 0]
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

export function moveTask(toX, toY) {
    taskPosition = [toX, toY]
  emitChange()
}