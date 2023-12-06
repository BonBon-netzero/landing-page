export function disableScroll() {
  const body = document.getElementsByTagName('body')
  if (!!body.length) {
    body[0].style.overflow = 'hidden'
  }
}

export function enableScroll() {
  const body = document.getElementsByTagName('body')
  if (!!body.length) {
    body[0].style.overflowX = 'hidden'
    body[0].style.overflowY = 'auto'
  }
}
