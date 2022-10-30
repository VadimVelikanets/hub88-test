type countyItem = {
    code: string,
    name: string
}

export type TableProps = {
    data: {
        countries: countyItem[]
    }
}