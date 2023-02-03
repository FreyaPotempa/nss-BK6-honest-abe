import { Corporations, PACs } from "./Corporations.js"
import { PoliticiansFull } from "./PoliticianFull.js"



export const HonestAbe = () => {
    return `
    <header class="top">
    <h1>Honest Abe</h1>
    </header>
    <section class="politicians">
    ${PoliticiansFull()}
    </section>
    `
}