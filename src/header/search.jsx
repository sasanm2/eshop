import './search.css';

const Search = () => {
return(
    <div className='searchM'>
    <input type="text" />
    <div className="search"><img src={require('../img/icons8-search-30.png')} /></div>
    </div>
);

}
 
export default Search;