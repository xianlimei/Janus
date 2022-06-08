"use strict";

const ChaincodeCommunicator = require("./chaincodeCommunicator");

const createInstance = (chaincodeName, chaincodeFn) =>
    function newInstance(ctx) {
        return ChaincodeCommunicator.createInstance(
            ctx,
            chaincodeName,
            chaincodeFn
        );
    };

const chaincodeInstances = Object.freeze({
    LSC: {
        getUserRequestLog: createInstance("LSC", "getUserRequestLog"),
        majorityUpdate: createInstance("LSC", "majorityUpdate"),
        updateRequestLog: createInstance("LSC", "updateRequestLog"),
        requestLog: createInstance("LSC", "requestLog"),
    },
    TMSC: {
        majorityUpdate: createInstance("TMSC", "majorityUpdate"),
        getUserValidation: createInstance("TMSC", "getUserValidation"),
        validateSignChallenge: createInstance("TMSC", "validateSignChallenge"),
        domainOfClient: createInstance("TMSC", "domainOfClient"),
        returnDomainStakeholders: createInstance(
            "TMSC",
            "returnDomainStakeholders"
        ),
        isInvokerStakeholderRevoked: createInstance(
            "TMSC",
            "isInvokerStakeholderRevoked"
        ),
    },
});

module.exports = chaincodeInstances;
