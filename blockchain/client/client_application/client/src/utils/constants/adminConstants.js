module.exports = Object.freeze({
    USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
    USER_REGISTER_FAILURE: "USER_REGISTER_FAILURE",

    NEW_USER_REGISTER_REQUEST: "NEW_USER_REGISTER_REQUEST", // Internal Action
    NEW_USER_REGISTER_REMOVE_REQUEST: "NEW_USER_REGISTER_REMOVE_REQUEST", // Internal Action
    CLEAR_SUCCESSFUL_REGISTRATIONS_REQUEST: "CLEAR_SUCCESSFUL_REGISTRATIONS_REQUEST", // Internal Action

    CAST_BALLOT_REQUEST: "CAST_BALLOT_REQUEST",
    CAST_BALLOT_SUCCESS: "CAST_BALLOT_SUCCESS",
    CAST_BALLOT_FAILURE: "CAST_BALLOT_FAILURE",

    UPDATE_TRUST_ANCHORS_REQUEST: "UPDATE_TRUST_ANCHORS_REQUEST",
    UPDATE_TRUST_ANCHORS_SUCCESS: "UPDATE_TRUST_ANCHORS_SUCCESS",
    UPDATE_TRUST_ANCHORS_FAILURE: "UPDATE_TRUST_ANCHORS_FAILURE",

    ADD_CA_REQUEST: "ADD_CA_REQUEST",
    ADD_CA_SUCCESS: "ADD_CA_SUCCESS",
    ADD_CA_FAILURE: "ADD_CA_FAILURE",

    REMOVE_CA_REQUEST: "REMOVE_CA_REQUEST",
    REMOVE_CA_SUCCESS: "REMOVE_CA_SUCCESS",
    REMOVE_CA_FAILURE: "REMOVE_CA_FAILURE",

    SYNC_WITH_BC_STAKEH0LDER_ELECTIONS_REQUEST:
        "SYNC_WITH_BC_STAKEH0LDER_ELECTIONS_REQUEST",
    SYNC_WITH_BC_STAKEH0LDER_ELECTIONS_SUCCESS:
        "SYNC_WITH_BC_STAKEH0LDER_ELECTIONS_SUCCESS",
    SYNC_WITH_BC_STAKEH0LDER_ELECTIONS_FAILURE:
        "SYNC_WITH_BC_STAKEH0LDER_ELECTIONS_FAILURE",

    SYNC_WITH_BC_ELECTION_EXTRA_INF0_REQUEST:
        "SYNC_WITH_BC_ELECTION_EXTRA_INF0_REQUEST",
    SYNC_WITH_BC_ELECTION_EXTRA_INF0_SUCCESS:
        "SYNC_WITH_BC_ELECTION_EXTRA_INF0_SUCCESS",
    SYNC_WITH_BC_ELECTION_EXTRA_INFO_FAILURE:
        "SYNC_WITH_BC_ELECTION_EXTRA_INFO_FAILURE",
});