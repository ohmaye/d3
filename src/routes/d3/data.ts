import type { TimeIntervalName } from "@observablehq/plot"

interface Wheel {
    id: number;
    timeStamp?: string;
    title: string;
    tag: string;
    dimensions?: number;
}

interface Dimension {
    id: number;
    title: string;
    tag: string;
    rating: numberl
}

export let dimensions : Dimension[] =  [{
    id: 1,
    title: "Career",
    tag: "What you do (career, vocation)",
    rating: 5
}, {
    id: 2,
    title: "Social",
    tag: "Relationships",
    rating: 3
},
{
    id: 3,
    title: "Financial",
    tag: "Material",
    rating: 7
},
{
    id: 34,
    title: "Physical",
    tag: "Body, Mind",
    rating: 7
},
{
    id: 5,
    title: "Community",
    tag: "Social",
    rating: 7
}]