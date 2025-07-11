const Header = () => (
    <div className='header' style={{backgroundColor : '#f8f9fa'}} >
        <div className='logo-container'>  
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2830/2830309.png" alt="logo" />
        </div>
        <div className='nav-items'> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>

);

export default Header;