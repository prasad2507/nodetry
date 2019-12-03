import {schemaComposer} from "graphql-compose";
export const TransactionTC = schemaComposer.createObjectTC({
    name:"Transaction",
    fields:{
        id:"ID!",
          type:"String!",
          amount:"Float!",
          account:"Account!"
    }
});
