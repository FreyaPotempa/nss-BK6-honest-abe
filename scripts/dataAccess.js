

const localData = {
    politicians: [],
    corporations: [],
    pacs: [],
    corporateDonations: []
}

const API = "http://localhost:8088"

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
    .then(response => response.json())
    .then(
        (politicianList) => {
            localData.politicians = politicianList
        }
    )
}

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
    .then(response => response.json())
    .then(
        (corporationList) => {
            localData.corporations = corporationList
        }
    )
}

export const fetchPACs = () => {
    return fetch(`${API}/pacs`)
    .then(response => response.json())
    .then(
        (pacList) => {
            localData.pacs = pacList
        }
    )
}

export const fetchCorporateDonations = () => {
    return fetch(`${API}/corporatedonations`)
    .then(response => response.json())
    .then(
        (corpDonations) => {
            localData.corporateDonations = corpDonations
        }
    )
}
    
export const getPoliticians = () => {
    return localData.politicians.map(politician => ({...politician}))
}

export const getCorporations = () => {
    return localData.corporations.map(corp => ({...corp}))
}

export const getPacs = () => {
    return localData.pacs.map(pac => ({...pac}))
}

export const getCorpDonations = () => {
    return localData.corporateDonations.map(corpDonation => ({...corpDonation}))
}