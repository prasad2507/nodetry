import {schemaComposer} from "graphql-compose";
export const AccountTC = schemaComposer.createObjectTC({
    name:"Account",
    fields:{
        id:"ID!",
        type:"String!",
        balance:"Float!",
        accountNumber:"String!",
        customer:"Customer!"
    }
});

