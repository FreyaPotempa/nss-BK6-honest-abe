import { fetchCorporateDonations, fetchCorporations, fetchPACs, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"


const mainContainer = document.querySelector('#container')

export const renderAll = () => {
    fetchPoliticians()
    .then(() => fetchCorporations())
    .then(() => fetchPACs())
    .then(() => fetchCorporateDonations())
    .then(
        () => {
            mainContainer.innerHTML = HonestAbe()
        }
    )
}

renderAll()