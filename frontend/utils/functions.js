


export const Sitename = "Bank Name PLC"
export const SiteShort = "Bank Name"


export const TransactionStatus = (status) => {
    return status === 'failed' ?
        'bg-red-100 text-red-700' :
        status === 'pending' ?
            'bg-orange-100 text-orange-600' :
            'bg-green-100 text-green-700'
}

export const SavingStatus = (status) => {
    return status === 'ongoing' ?
        'bg-orange-100 text-orange-700' :
        'bg-green-100 text-green-700'
}