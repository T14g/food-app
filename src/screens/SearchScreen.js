import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMsg('Something went wrong!');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, [searchApi]);

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>{term}</Text>
            <Text>Results: {results.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;