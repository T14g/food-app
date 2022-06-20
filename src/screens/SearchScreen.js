import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [errorMsg, results, searchApi] = useResults();

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