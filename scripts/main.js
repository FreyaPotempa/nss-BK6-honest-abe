import { fetchCorpInterests, fetchCorporateDonations, fetchCorporations, fetchInterests, fetchLegislation, fetchPACDonations, fetchPACs, fetchPoliticianBills, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"


const mainContainer = document.querySelector('#container')

async function renderAll() {
    await Promise.all([
    fetchPoliticians(), 
    fetchCorporations(), 
    fetchPACs(), 
    fetchCorporateDonations(),
    fetchPACDonations(),
    fetchLegislation(),
    fetchPoliticianBills(),
    fetchInterests(),
    fetchCorpInterests()
    ])
    mainContainer.innerHTML = HonestAbe()
}

renderAll()