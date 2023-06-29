export const getSize = (word) => {
    const elem = document.createElement('span')
    elem.innerHTML = word
    elem.style.cssText = `
        display:inline-block;
        position:fixed;
        top:-1000px;
        left:-1000px;
    `
    document.body.append(elem)
    const res = elem.getBoundingClientRect()
    elem.remove()
    return res
}