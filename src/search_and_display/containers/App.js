import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ScrollBar from '../components/Scrollbar';
import CatList from '../components/CatList';
import './App.css';
import { setSearchField, fetchCats } from '../store/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onfetchCats: () => dispatch(fetchCats())
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchCat.searchField,
        cats: state.handleFetchedCats.cats,
        error: state.handleFetchedCats.error,
        isPending: state.handleFetchedCats.isPending
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onfetchCats();
    }

    render() {
        const { cats, onSearchChange, searchField, isPending } = this.props;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        })

        const display = isPending ? (
            <div className='pending'>LOADING..........</div>
        ) : (
            <div className="app">
                <h1 className="title">MY CAT FRIENDS</h1>
                <SearchBar onSearchChange={onSearchChange}/>
                <ScrollBar>
                    <CatList cats={filteredCats}/>
                </ScrollBar>
            </div>
        )

        return <div>{ display }</div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);