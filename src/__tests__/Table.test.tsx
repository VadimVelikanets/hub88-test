import React from "react";
import {render, screen} from "@testing-library/react";
import Table from "../components/Table/Table";
import {MockedProvider} from "@apollo/react-testing";
import {FETCH_COUNTRIES} from "../queries/fetchCountries";
const mocks = [
    {
        request: {
            query: FETCH_COUNTRIES,
            variables: {countryCode: "A"}
        },
        result: {
            "data": {
                "countries": [
                    {
                        "name": "Andorra",
                        "code": "AD"
                    },
                    {
                        "name": "United Arab Emirates",
                        "code": "AE"
                    },
                    {
                        "name": "Afghanistan",
                        "code": "AF"
                    },
                    {
                        "name": "Antigua and Barbuda",
                        "code": "AG"
                    },
                    {
                        "name": "Anguilla",
                        "code": "AI"
                    },
                    {
                        "name": "Albania",
                        "code": "AL"
                    },
                    {
                        "name": "Armenia",
                        "code": "AM"
                    },
                    {
                        "name": "Angola",
                        "code": "AO"
                    },
                    {
                        "name": "Antarctica",
                        "code": "AQ"
                    },
                    {
                        "name": "Argentina",
                        "code": "AR"
                    },
                    {
                        "name": "American Samoa",
                        "code": "AS"
                    },
                    {
                        "name": "Austria",
                        "code": "AT"
                    },
                    {
                        "name": "Australia",
                        "code": "AU"
                    },
                    {
                        "name": "Aruba",
                        "code": "AW"
                    },
                    {
                        "name": "Åland",
                        "code": "AX"
                    },
                    {
                        "name": "Azerbaijan",
                        "code": "AZ"
                    },
                    {
                        "name": "Bosnia and Herzegovina",
                        "code": "BA"
                    },
                    {
                        "name": "Canada",
                        "code": "CA"
                    },
                    {
                        "name": "Gabon",
                        "code": "GA"
                    },
                    {
                        "name": "Laos",
                        "code": "LA"
                    },
                    {
                        "name": "Morocco",
                        "code": "MA"
                    },
                    {
                        "name": "Namibia",
                        "code": "NA"
                    },
                    {
                        "name": "Panama",
                        "code": "PA"
                    },
                    {
                        "name": "Qatar",
                        "code": "QA"
                    },
                    {
                        "name": "Saudi Arabia",
                        "code": "SA"
                    },
                    {
                        "name": "Ukraine",
                        "code": "UA"
                    },
                    {
                        "name": "Vatican City",
                        "code": "VA"
                    },
                    {
                        "name": "South Africa",
                        "code": "ZA"
                    }
                ]
            }
        }
    }
];

describe('table tests', () => {
    it('renders empty table data', () => {
        render(<Table data={{countries:[]}}/>);
        const emptyText = screen.getByText("Nothing found, edit your request");
        expect(emptyText).toBeInTheDocument()
    })

    it('displays dates', async () => {
        render( <MockedProvider mocks={mocks} addTypename={false}>
            <Table data={mocks[0].result.data}/>
        </MockedProvider>);

        const country1 = await screen.findByText('Andorra');
        const country2 = await screen.findByText('United Arab Emirates');
        const country3 = await screen.findByText('Afghanistan');
        expect(country1).toBeInTheDocument();
        expect(country2).toBeInTheDocument();
        expect(country3).toBeInTheDocument();
        const table = await screen.findAllByTestId('table-item');
        expect(table.length).toBe(28)
    });
})
