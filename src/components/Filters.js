const Filters = ({ handleChangeText, handleChangeRegion, text, region }) => {
    return (
        <div className="filter">
            <div className='filter-name'>
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" placeholder='Search for a country...' value={text} onChange={handleChangeText} />
            </div>
      
            <div className='filter-region'>
                <select value={region} onChange={handleChangeRegion}>
                    <option value="" disabled hidden>Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>

                </select >
            </div>
        </div>
    );
};

export default Filters;