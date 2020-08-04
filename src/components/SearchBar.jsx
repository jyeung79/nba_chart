import PropTypes from 'prop-types';
import _ from 'lodash';
import React, { useState, useEffect} from 'react';
import nba from 'nba';
import { Search, Grid, Label } from 'semantic-ui-react';
import { PLAYERSARR } from '../data/players.js';

const resultRenderer = ({ firstName, lastName, playerId }) => <Label content={[firstName, lastName, playerId]} />;

resultRenderer.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    playerId: PropTypes.number
}

const SearchBar = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');

    const handleResultSelect = (e, { result }) => setValue(result.firstName + ' ' + result.lastName);

    const handleSearchChange = (e, { value }) => {
        setLoading(true);
        setValue(value);
        console.log(value);

        setTimeout(() => {
            if (value.length < 1) return setValue('');
        
            const re = new RegExp(_.escapeRegExp(value), 'i')
            const isMatch = (result) => re.test(result.firstName + ' ' + result.lastName);

            const searchTerm = '/' + value.toLowerCase() + '/i';
            console.log(searchTerm, re);

            //const stuff = PLAYERSARR.find(player => (player.firstName + player.LastName).search(re));
            let filter = _.filter(PLAYERSARR, isMatch);

            let maxLength = filter.length > 10 ? 10 : filter.length;
            let filtered = filter.slice(0, maxLength); 

            setResults(filtered);
            console.log(filtered);
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
                    resultRenderer={resultRenderer}
                />
            </Grid.Column>
          </Grid>
        )
};

export default SearchBar;