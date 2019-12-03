import {schemaComposer} from "graphql-compose";
export const CustomerTC = schemaComposer.createObjectTC({
    name:"Customer",
    fields:{
        id:"ID!",
        name:"String!",
        mobile:"String!"
    }
});