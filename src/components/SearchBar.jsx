import PropTypes from 'prop-types';
import _ from 'lodash';
import React, { useState, useEffect} from 'react';
import nba from 'nba';
import { Search, Grid, Label } from 'semantic-ui-react';
import { PLAYERSARR } from '../data/players.js';
import { NBAROSTER } from '../data/2019-2020NBAROSTER'

const unwrap = ({name, imgURL, pos}) => ({name, imgURL, pos});

const mappedOut = (player) => {
    player.title = player.name;
    player.description = player.pos;
    player.image = player.imgURL;
    delete(player.name);
    delete(player.pos);
    delete(player.imgURL); 
};


const SearchBar = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');

    const handleResultSelect = (e, { result }) => setValue(result.name);

    const handleSearchChange = (e, { value }) => {
        setLoading(true);
        setValue(value);
        console.log(value);

        setTimeout(() => {
            if (value.length < 1) return setValue('');
        
            const re = new RegExp(_.escapeRegExp(value), 'i')
            const isMatch = (result) => re.test(result.name);

            const searchTerm = '/' + value.toLowerCase() + '/i';
            console.log(searchTerm, re);

            let filter = _.filter(NBAROSTER, isMatch);
            let filtered = filter.slice(0, filter.length > 5 ? 5 : filter.length)
            let mapped = filtered.map((object) => unwrap(object));
            mapped.forEach((player) => mappedOut(player));
            
            console.log('filtered: ', filtered);
            console.log('mapped :', mapped);

            setResults(mapped);
            setLoading(false);
        }, 300);
    };

    return (
        <Grid>
            <Grid.Column width={6}>
                <Search
                    loading={isLoading}
                    onResultSelect={handleResultSelect}
                    onSearchChange={_.debounce(handleSearchChange, 500, {leading: true})}
                    results={results}
                    value={value}
                />
            </Grid.Column>
          </Grid>
        )
};

export default SearchBar;