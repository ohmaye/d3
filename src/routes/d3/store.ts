import type { Dimensions } from '@observablehq/plot'
import {writable} from 'svelte/store'

export const dimensions = writable<Dimensions[]>(

)

// dimensions.set([{
//     id: 1,
//     title: "Health",
//     tag: "body",
//     rating: 5
// }, {
//     id: 2,
//     title: "Wealth",
//     tag: "Material",
//     rating: 3
// },
// {
//     id: 3,
//     title: "Relationships",
//     tag: "Social",
//     rating: 7
// }])

