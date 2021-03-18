import {row, col, css} from './utils'

function title(block) {
    // return `
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    // `
    const {tag = 'h1', styles} = block.options
    // const tag = block.options.tag || 'h1'
    // const styles = block.options.styles
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
    // let html = ''
    // block.value.forEach(item => {
    //     html += `
    //        <div class="col-sm">
    //             ${item}
    //         </div>
    //     `
    // })
    // const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    // const html = block.value.map(item => col(item))
    // const html = block.value.map(col)
    const html = block.value.map(col).join('')
    // return `
    //     <div class="row">
    //         ${html.join('')}
    //     </div>
    // `
    // return row(html.join(''))
    return row(html, css(block.options.styles))
}

function image(block) {
    const {imageStyles: is, alt = '', styles} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
}

export const templates = {
    title,
    text,
    image,
    columns
}
// title: title