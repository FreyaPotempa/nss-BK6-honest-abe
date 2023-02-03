import { Corporations } from "./Corporations.js"
import { getBills, getCorpInterests, getCorporations, getInterests, getPACDonations, getPacs, getPoliticianBills, getPoliticians } from "./dataAccess.js"


export const PoliticiansFull = () => {
    const politicians = getPoliticians()
    const PACs = getPacs()
    const pacDonations = getPACDonations()
    const bills = getBills()
    const politicianBills = getPoliticianBills()
    const interests = getInterests()
    const corpInterests = getCorpInterests()
    const corporations = getCorporations()

    const matchCorp = (politician) => {
        const billsByPolitician = politicianBills.filter(poliBill => poliBill.politicianId === politician.id)

        const matchCorpName = (poliBill) => {
        const matchedBill = bills.find(bill => bill.id === poliBill.legislationId)
        const matchedInterest = interests.find(interest => interest.id === matchedBill.interestId)
        const matchedCorpId = corpInterests.find(corpInt => corpInt.interestId === matchedInterest.id)
        const matchedCorpName = corporations.find(corp => corp.id === matchedCorpId.corporationId)
        return `${matchedCorpName.company}`
        }

        return `<ul>
        ${billsByPolitician.map(poliBill => {
            return `<li>${matchCorpName(poliBill)}</li>`
        }).join("")}
        </ul>`
    }

    const matchPACDonors = (politician) => {
        //creates filtered list of just the donation objects matching the politician Id
        const donorByPolitician = pacDonations.filter(pacDonation => pacDonation.politicianId === politician.id)

        const matchPACName = (donor) => {
            const matchedPAC = PACs.find(PAC => PAC.id === donor.pacId)
            return `${matchedPAC.registeredName}`
        }

        return `<ul>
        ${donorByPolitician.map(donor => {
            return `<li>${matchPACName(donor)}</li>`
        }).join("")}
        </ul>`
    }

    const matchBills = (politician) => {
        //filter bills by politician Id
        const billsByPolitician = politicianBills.filter(poliBill => poliBill.politicianId === politician.id)

        const matchBillName = (poliBill) => {
            const matchedBill = bills.find(bill => bill.id === poliBill.legislationId)
            return `${matchedBill.name}`
        }

        return `<ul>
        ${billsByPolitician.map(poliBill => {
            return `<li>${matchBillName(poliBill)}</li>`
        }).join("")}
        </ul>`

    }

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
        <div class="politician__bills">
            <h3>Sponsored Bills</h3>
            <div>
            ${matchBills(politician)}
            </div>
        </div>
        <div class="politican__funders">
            <h3>Related PACs</h3>
            ${matchPACDonors(politician)}
        </div>
        <div class="politician__influencers">
            <h4>Influencing Corporations</h4>
            ${matchCorp(politician)}
        </div>
    </section>`
    }).join("")}
    </article>`

    return html
}



/*
FINAL OUTPUT AS PER INSTRUCTIONS:




        <div class="politician__bills">
            <h2>Sponsored Bills</h2>
            <div>
                H.R. 5215: Veterans Affairs Purchase Card Misuse Mitigation Act (Interest: Military)
            </div>
        </div>
        <div class="politician__influencers">
            <h3>Influencing Corporations</h3>
            <ul>
                <li>Lockheed Martin</li>
                <li>Boeing</li>
            </ul>
        </div>
    </section>
</article>

*/