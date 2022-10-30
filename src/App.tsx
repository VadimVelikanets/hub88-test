import React, {useCallback, useEffect, useState} from 'react';
import Filter from "./components/Filter/Filter";
import Layout from "./components/Layout/Layout";
import './App.css';
import Table from "./components/Table/Table";
import {useLazyQuery} from "@apollo/client";
import {FETCH_COUNTRIES} from "./queries/fetchCountries";
import Loader from "./components/Loader/Loader";

function App() {
    const [value, setValue] = useState('');
    const [countries, setCountries] = useState(null);

    const [fetchCountries, {data, loading }] = useLazyQuery(FETCH_COUNTRIES, {
        variables: {
            countryCode: value.toUpperCase()
        }
    });

    const onChangeValue = useCallback((value: string) => {
        setValue(value)
    }, [value, setValue])

    useEffect(() => {
      if(value.length > 0) {
          fetchCountries()
          setCountries(data)
      } else {
          setCountries(null);
      }
    }, [data, value])

    return (
        <Layout>
          <Filter
              value={value}
              onChangeValue={onChangeValue}
          />
          {loading && <Loader/>}
          {countries === null && (
              <p className="search-text">Here will your search result</p>
          )}
          {countries && <Table data={countries}/>}
        </Layout>
    );
}

export default App;