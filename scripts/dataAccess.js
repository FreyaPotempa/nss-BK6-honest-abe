

const localData = {
    politicians: [],
    corporations: [],
    pacs: [],
    corporateDonations: [],
    pacDonations: [],
    bills: [],
    politicianBills: [],
    interests: [],
    corpInterests: []
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

export const fetchPACDonations = () => {
    return fetch(`${API}/pacdonations`)
    .then(response => response.json())
    .then(
        (pacDonationList) => {
            localData.pacDonations = pacDonationList
        }
    )
}

export const fetchLegislation = () => {
    return fetch(`${API}/legislations`)
    .then(response => response.json())
    .then(
        (billList) => {
            localData.bills = billList
        }

    )
}

export const fetchPoliticianBills = () => {
    return fetch(`${API}/politicianlegislations`)
    .then(response => response.json())
    .then(
        (politicianBillList) => {
            localData.politicianBills = politicianBillList
        }

    )
}

export const fetchInterests = () => {
    return fetch(`${API}/interests`)
    .then(response => response.json())
    .then(
        (interestList) => {
            localData.interests = interestList
        }
    )
}

export const fetchCorpInterests = () => {
    return fetch(`${API}/corporateinterests`)
    .then(response => response.json())
    .then(
        (corpInterestList) => {
            localData.corpInterests = corpInterestList
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

export const getPACDonations = () => {
    return localData.pacDonations.map(pacDonation => ({...pacDonation}))
}

export const getBills = () => {
    return localData.bills.map(bill => ({...bill}))
}

export const getPoliticianBills = () => {
    return localData.politicianBills.map(politicianBill => ({...politicianBill}))
}

export const getInterests = () => {
    return localData.interests.map(interest => ({...interest}))
}

export const getCorpInterests = () => {
    return localData.corpInterests.map(corpInterest => ({...corpInterest}))
}