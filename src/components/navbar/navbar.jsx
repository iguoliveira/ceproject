import Links from "./links/links";

export default function Navbar() {
    return (
        <div class="header u-unselectable header-animated">
            <div class="header-brand">
                <div class="nav-item no-hover">
                    <a><h6 class="title">CEPROJECT</h6></a>
                </div>
            </div>
            <div class="header-nav" id="header-menu">
                <div class="nav-right">
                    <div class="nav-item has-sub toggle-hover" id="dropdown">
                        <a class="nav-dropdown-link">Know Me</a>
                        <ul class="dropdown-menu dropdown-animated" role="menu">
                            <li role="menu-item"><Links link="https://github.com/iguoliveira" linkName="Github" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}