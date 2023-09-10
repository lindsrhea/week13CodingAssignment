export default function Navbar() {
    return <nav className="nav" customClass="sticky-nav">
        <a href="/" className="site-title">Login Page</a>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/faq">Frequently Asked Questions</a>
            </li>
            <li>
                <a href="/contact">contact</a>
            </li>
        </ul>
    </nav>
}
