// The object keeps an "endorsingOrgs" value for every function. With this we can define "individual", meaning that the function should be endorsed by the (organization) MSP of the invoker
// In the future, an option of "DOMAIN" could also be added, meaning that the transaction should be endorsed by the majority of the stakeholders of a DOMAIN (e.g. MEDICAL/MANUFACTURER)
// If the option "endorsingOrgs" is not included, it means that all the organizations from all the MSPs should endorse the transaction before commiting it to the endorser (= MEDICAL + MANUFACTURER DOMAINS)
module.exports = Object.freeze({
    // CLIENT ACTIONS
    client: {
        endpointType: "client",
        endpointPrefix: "user",
        requestAccess: {
            endpoint: "requestaccess",
            invokedFunction: "requestAccess",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: true,
            willRT: true,
        },
        syncEntityWithBC: {
            endpoint: "sync",
            invokedFunction: "syncEntityWithBC",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: false,
        },
        getDataFromBC: {
            endpoint: "getdata",
            invokedFunction: "getDataFromBC",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: false,
            endorsingOrgs: "individual",
        },
        validateUser: {
            endpoint: "user-validation",
            invokedFunction: "validateUser",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: false,
            endorsingOrgs: "individual",
        },
    },

    // ADMIN ACTIONS
    admin: {
        endpointType: "admin",
        endpointPrefix: "admin",
        updateTrustAnchors: {
            endpoint: "updatetrustanchors",
            invokedFunction: "updateTrustAnchors",
            contract: "TMSC",
            channel: "basechannel",
            shouldCommit: true,
        },
        majorityClientVote: {
            endpoint: "vote",
            invokedFunction: "majorityClientVote",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: true,
        },
        addCA: {
            endpoint: "addca",
            invokedFunction: "addCA",
            contract: "TMSC",
            channel: "basechannel",
            shouldCommit: true,
        },
        removeCA: {
            endpoint: "removeca",
            invokedFunction: "removeCA",
            contract: "TMSC",
            channel: "basechannel",
            shouldCommit: true,
        },
        syncEntityWithBC_SYNC_STAKEHOLDER_ELECTIONS: {
            endpoint: "sync-stakeholder-elections",
            invokedFunction: "syncEntityWithBC",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: false,
        },
        syncEntityWithBC_SYNC_ELECTIONS_EXTRA_DATA: {
            endpoint: "sync-election-extra-data",
            invokedFunction: "syncEntityWithBC",
            contract: "PSC",
            channel: "basechannel",
            shouldCommit: false,
        },
    },

    // AUDITOR ACTIONS
    auditor: {
        endpointType: "auditor",
        endpointPrefix: "auditor",
        retrieveLogInit: {
            endpoint: "retrieveloginit",
            invokedFunction: "retrieveLogInit",
            contract: "LSC",
            channel: "basechannel",
            shouldCommit: true,
        },
        majorityUpdate: {
            endpoint: "majorityupdate",
            invokedFunction: "majorityUpdate",
            contract: "LSC",
            channel: "basechannel",
            shouldCommit: true,
        },
        retrieveLogs: {
            endpoint: "retrievelogs",
            invokedFunction: "retrieveLogs",
            contract: "LSC",
            channel: "basechannel",
            shouldCommit: false,
        },
        syncAudits: {
            endpoint: "sync-audits",
            invokedFunction: "syncAudits",
            contract: "LSC",
            channel: "basechannel",
            shouldCommit: false,
        },
    },
});
