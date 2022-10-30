import {gql} from "@apollo/client";

export const FETCH_COUNTRIES = gql`
query countries($countryCode: String!) {
countries(filter: {
  code: {
  regex: $countryCode
}}) {
  name, code
}}
`
