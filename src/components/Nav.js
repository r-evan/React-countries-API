import React from 'react';

const Nav = ( {handleTheme, theme} ) => {
    return (
        <header>
            <h2>Where in the world?</h2>
            <div onClick={handleTheme} className="toggle">
                {theme? <ion-icon name="moon-outline"></ion-icon>:<ion-icon name="moon"></ion-icon>}
                <p><span>Dark Mode</span></p>
            </div>
        </header>
    );
};

export default Nav;