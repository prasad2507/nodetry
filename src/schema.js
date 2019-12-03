import {schemaComposer} from "graphql-compose";

import {CustomerTC} from "./models/customer";

import { AccountTC } from "./models/account";

import { TransactionTC } from "./models/transaction";


AccountTC.addRelation("customer",{
    resolver:CustomerTC.getResolver("findById"),
    prepareArgs:{
        _id: source=>source.customer
    }
});

TransactionTC.addRelation("account",{
    resolver:AccountTC.getResolver("findById"),
    prepareArgs:{
        _id:source => source.account
    }
})
schemaComposer.Query.addFields({
    customers:CustomerTC.getResolver("findMany"),
    accounts:AccountTC.getResolver("findMany"),
    transactions:TransactionTC.getResolver("findMany")
});

export default schemaComposer.buildSchema();