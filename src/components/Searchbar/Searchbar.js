import React, { useState } from 'react';
import useStyles from './SearchStyle';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, Grid } from '@material-ui/core';

export default function Searchbar({ handleSearchData }) {
    const [search, setSearch] = useState('');
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchData(search);
    }
    return (
        <Grid className={classes.root} container justify='center' position='fixed' spacing={1}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <form onSubmit={handleSubmit}>
                    <InputBase
                        placeholder="Search by Name or Brand..."
                        className={classes.inputInput}
                        inputProps={{ 'arial-label': 'Search' }}
                        name="search"
                        value={search}
                        style={{ width: '100%' }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
        </Grid>
    )
}