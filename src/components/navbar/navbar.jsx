import Links from "./links/links";

export default function Navbar() {
    return (
        <div className="header u-unselectable header-animated">
            <div className="header-brand">
                <div className="nav-item no-hover">
                    <a><h6 className="title">CEPROJECT</h6></a>
                </div>
            </div>
            <div className="header-nav" id="header-menu">
                <div className="nav-right">
                    <div className="nav-item has-sub toggle-hover" id="dropdown">
                        <a className="nav-dropdown-link">Know Me</a>
                        <ul className="dropdown-menu dropdown-animated" role="menu">
                            <li role="menu-item"><Links link="https://github.com/iguoliveira" linkName="Github" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}