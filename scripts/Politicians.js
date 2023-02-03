import { getPoliticians } from "./dataAccess.js"



export const Politicians = () => {
    const politicians = getPoliticians()

    let html = `<h2>Politicians</h2>
    <article class="politicians">
    ${politicians.map(politician => {
        return `<section class="politician">
        <header class="politician__name">
        <h2>${politician.name.first} ${politician.name.last}</h2>
        </header>
        <div class="politician__info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>
    </section>`
    }).join("")}
    </article>`

    return html
}