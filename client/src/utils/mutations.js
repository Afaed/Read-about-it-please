import { gql } from '@apollo/client';

export const LOGIN_USER = gql`{
    mutation login($email: String!,
        $password: String!) {
            login (email: $email, password: $password){
                token
                user { 
                    _id
                    username
                }
            }
        }
}`

export const ADD_USER = gql`{
    mutation login($email: String!,
        password: $password) {
            login (email: $email, password: $password){
                token
                user { 
                    _id
                    username
                }
            }
        }
}`
export const SAVE_BOOK = gql`{
    mutation saveBook($input: saveBook!){
        saveBook (input: $input)
        {
            _id
            username
            email
            bookCount
            saveBook
            {
                authors
                description
                title
                image
                link
            }
        }
}
}`

export const REMOVE_BOOK = gql`{
    mutation removeBook($input: removeBook!) {
        removeBook(bookId: $bookId)
        {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                title
                bookId
                link
                image
            }
        }
    }
}`