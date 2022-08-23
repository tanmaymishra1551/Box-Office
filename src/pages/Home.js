import React, { useState, useEffect } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import ShowGrid from '../components/show/ShowGrid';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../components/misc/config'

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setresults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowSearch = searchOption === 'shows';

    useEffect(() => {
        console.log('use effect run')

        return () =>{
            console.log('exit')
        }
    }, [searchOption])

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setresults(result)

        })
    }

    const onInputChange = ev => {
        setInput(ev.target.value);
    }

    const onKeyDown = (ev) => {
        // console.log(ev.keyCode)
        if (ev.keyCode === 13) {
            onSearch();
        }
    }

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);
    }

    // console.log(searchOption)

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>;
        }
        if (results && results.length > 0) {
            return results[0].show ? <ShowGrid data={results} /> : <ActorGrid data={results} />
        }
        return null;
    }


    return <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} placeholder="Search for something" />
        <div>
            <label htmlFor="shows-search">
                Shows
                <input type="radio" id="shows-search" value="shows" onChange={onRadioChange} checked={isShowSearch} />
            </label>
            <label htmlFor="actors-search">
                Actors
                <input type="radio" id="actors-search" value="people" onChange={onRadioChange} checked={!isShowSearch} />
            </label>
        </div>
        <button type='button' onClick={onSearch} >Search</button>
        {renderResults()}
    </MainPageLayout>

}

export default Home;