import React from 'react';
import axios from 'axios';
import Results from './Results';
import '../style.css';

class SearchReposWithClasses extends React.Component {

 constructor(props) {
   super(props);

   this.state = {
     searchInput: '',
     searchQuery: 'markerikson',
     repos: []
   }

   this.handleChangeSearchInput =
    this.handleChangeSearchInput.bind(this);
   this.handleSearchClick = this.handleSearchClick.bind(this);
   this.fetchGitRepos = this.fetchGitRepos.bind(this);
 }
  
 handleChangeSearchInput (e) {
   this.setState({searchInput: e.target.value});
 }

 handleSearchClick () {
   this.setState({searchQuery: this.state.searchInput});
   this.setState({searchInput: ''});
 }

 fetchGitRepos () {
   const fetchRepos = async () => {
     const result = await axios(`https://api.github.com/users/${this.state.searchQuery}/repos`);
     this.setState({repos: result});
   };
   fetchRepos();
 }

 componentDidMount () {
   this.fetchGitRepos();
 }

 componentDidUpdate(prevState) {
   if(this.state.searchQuery !== prevState.searchQuery) {
     this.fetchGitRepos();
   }
 }
  
 render() {
   return (
     <>
       <div className="container">
         <h2>Search for repos</h2>
         <input
           type="text"
           placeholder="search..."
           value={this.state.searchInput}
           onChange={this.handleChangeSearchInput}
         />
         <button
           className="search"
           onClick={this.handleSearchClick}
         >
            Search
         </button>
       </div>
       <Results repos={this.state.repos} />
     </>
   )
 }
}

export default SearchReposWithClasses;
