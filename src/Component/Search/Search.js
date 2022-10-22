
import './Search.css'

const Search = ({getData,handleClick,character}) => {
    return (
        <div className='search-field'>
            <input type="text" value={character} onChange={getData} placeholder='Search by name---' />
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
};

export default Search;