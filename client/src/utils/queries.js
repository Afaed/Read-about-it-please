//hold get me, mutations, login_user and the rest of the mutations. Cehck the utils in queries
import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBook {
            description
            title
            bookId
            # _id
            image
            link
            authors
        }
        
    }
}
`