import { CartWidget } from "./CartWidget";

const Navbar = ({
    currentTab,
    setCurrentTab
}) => {
    return (
        <header id="main-header">
            <div className="content container">
                <div className="logo" onClick={() => setCurrentTab('home')}>
                    <h2>E-commerce</h2>
                </div>
                <nav className="navigation ">
                    <ul className="nav-links">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Store</li>
                        <li className="nav-link">Contact</li>
                    </ul>
                </nav>
                <CartWidget setCurrentTab={setCurrentTab} />
            </div>
        </header>

    )

}

export default Navbar;