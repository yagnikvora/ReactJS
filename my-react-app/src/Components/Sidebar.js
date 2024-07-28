function Sidebar() {
    return (
        <div className="container-fluid bg-dark h-100 ms-0">
            <nav id="sidebarMenu" className='col-md-3 col-lg-2 d-md-block sidebar collapse'>
                <div className="position-sticky">
                    <ul className='nav flex-column text-light'>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Orders
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Customers
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
