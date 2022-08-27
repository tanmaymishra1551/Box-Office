import React, { useState, useEffect } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import ShowGrid from '../components/show/ShowGrid';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../components/misc/config'
import { useLastQuery } from '../components/misc/custom-hooks';
import { SearchButtonWrapper, SearchInput } from './Home.styled';
import { RadioInputsWrapper } from './Home.styled';
import CustomRadio from '../components/CustomRadio';

const Home = () => {
    const [input, setInput] = useLastQuery('');
    const [results, setresults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowSearch = searchOption === 'shows';

    useEffect(() => {
        console.log('use effect run')

        return () => {
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
        <SearchInput type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} placeholder="Search for something" />
        <RadioInputsWrapper>
            <div>
               <CustomRadio
               label="Shows"
               id="shows-search" 
               value="shows" 
               checked={isShowSearch}
               onChange={onRadioChange}
               />
            </div>
            <div>
               <CustomRadio
               label="Actors"
               id="actors-search" 
               value="people" 
               checked={!isShowSearch}
               onChange={onRadioChange}
               />
            </div>
        </RadioInputsWrapper>
        <SearchButtonWrapper>
        <button type='button' onClick={onSearch} >Search</button></SearchButtonWrapper>
        {renderResults()}
    </MainPageLayout>

}

export default Home;