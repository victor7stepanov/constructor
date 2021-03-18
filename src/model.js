import image from './assets/image.png'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from './classes/blocks'

const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta, mi id porttitor mollis, quam est laoreet tellus, at fermentum.
`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;`
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    // {type: 'title', value: 'Конструктор сайтов на чистом JavaScript', options: {
    //     tag: 'h2',
    //     // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;`
    //     styles: {
    //         background: 'linear-gradient(to right, #ff0099, #493240)',
    //         color: '#fff',
    //         padding: '1.5rem',
    //         'text-align': 'center'
    //         }
    //     }
    // },
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non.'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]

