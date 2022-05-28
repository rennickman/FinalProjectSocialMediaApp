import SearchIcon from '@mui/icons-material/Search';

import './navbarSearch.css';



const NavbarSearch = () => {


    return (
        <>
            {/** Searchbar Section */}
            <div className="navbarCenter">
                <div className="navbarSearchbar">
                    <SearchIcon className='navbarSearchIcon' />
                    <input type="text" className="navbarSearchInput" placeholder='Search for friends...' />
                </div>
            </div>
        </>
    )
}


export default NavbarSearch;