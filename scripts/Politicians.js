//IMPORTED TO POLITICIANFULL FOR FINAL CHALLENGE

// import { getPACDonations, getPacs, getPoliticians } from "./dataAccess.js"



// export const Politicians = () => {
//     const politicians = getPoliticians()
//     const PACs = getPacs()
//     const pacDonations = getPACDonations()

//     const matchPACDonors = (politician) => {
//         //creates filtered list of just the donation objects matching the politician Id
//         const donorByPolitician = pacDonations.filter(pacDonation => pacDonation.politicianId === politician.id)

//         const matchPACName = (donor) => {
//             const matchedPAC = PACs.find(PAC => PAC.id === donor.pacId)
//             return `${matchedPAC.registeredName}`
//         }

//         return `<ul>
//         ${donorByPolitician.map(donor => {
//             return `<li>${matchPACName(donor)} ($${donor.amount})</li>`
//         }).join("")}
//         </ul>`
//     }


//     let html = `<h2>Politicians</h2>
//     <article class="politicians">
//     ${politicians.map(politician => {
//         return `<section class="politician">
//         <header class="politician__name">
//         <h2>${politician.name.first} ${politician.name.last}</h2>
//         </header>
//         <div class="politician__info">
//             <div>Age: ${politician.age}</div>
//             <div>Represents: ${politician.district}</div>
//         </div>
//         <div class="pac__donations">
//         <h3>PAC Donations</h3>
//         ${matchPACDonors(politician)}
//     </section>`
//     }).join("")}
//     </article>`

//     return html
// }