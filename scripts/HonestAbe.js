import { Corporations } from "./Corporations.js"
import { Politicians } from "./Politicians.js"


export const HonestAbe = () => {
    return `
    <header class="top">
    <h1>Honest Abe</h1>
    </header>
    <section class="politicians">
    ${Politicians()}
    </section>
    <section class="corporations">
    ${Corporations()}
    </section>
    `
}