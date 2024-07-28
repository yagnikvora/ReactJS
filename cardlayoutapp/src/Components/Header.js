import { Link } from "react-router-dom";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-1" data-bs-theme="dark" style={{ fontSize: "15px" }}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="./" style={{ fontSize: "15px" }}>React-Website</Link>
                <button class="navbar-toggler" to="/" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./contact" aria-disabled="true">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./faculty" aria-disabled="true">Faculties</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./exp10+faculty" aria-disabled="true">10+year </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./counter" aria-disabled="true">Counter </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./form" aria-disabled="true">Form </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="./updateform" aria-disabled="true">Update-Form </Link>
                        </li>
                        <li>
                            <Link class="nav-link" to="./api" aria-disabled="true">Api</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header