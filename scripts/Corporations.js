import { getCorpDonations, getCorporations, getPacs } from "./dataAccess.js"



export const Corporations = () => {
    const corporations = getCorporations()

    let html = `
    <h1>Corporations</h1>
    <article class="corporations">
    ${corporations.map(corp => {
        return `<section class="corporation">
        <header class="corporation__name">
        <h1>${corp.company}</h1>
        </header>
        <div class="corporation__info">
            <div>Address: ${corp.address}</div>
        </div>
        </section>`
    }).join("")}
    </article>`
    
    return html
}

export const PACs = () => {
    const pacs = getPacs()
    const corpDonations = getCorpDonations()
    const corporations = getCorporations()

    const pacDonors = (pac) => {
        //creates a filtered list of all donation objects that match the PAC Id
        const pacDonorList = corpDonations.filter(corpDonation => corpDonation.pacId === pac.id)

        //matches the donation object to the corporate object so I can access the corporation name
        const matchPACDonor = (pacDonor) => {
            const PACDonorName = corporations.find(corp => corp.id === pacDonor.corporationId)
            return `${PACDonorName.company}`
        }

        return `<ul>
        ${pacDonorList.map(pacDonor => {
            return `<li>${matchPACDonor(pacDonor)} ($${pacDonor.amount})</li>`
        }).join("")}
        </ul>`

    }

    let html = `
    <h1>PACs</h1>
    <article class="pacs">
    ${pacs.map(pac => {
        return `<section class="pac">
        <header class="pac__name">
        <h2>${pac.registeredName}</h2>
        </header>
        <div class="pac__info">
            <div>Address: ${pac.address}</div>
        </div>
        <div class="pac__donors">
            <h3>Donors</h3>
            ${pacDonors(pac)}
        </div>
        </section>`
    }).join("")}
    </article>`

    return html

}