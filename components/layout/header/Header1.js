import Link from 'next/link'
import SearchForm from './SearchForm'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`}>
                {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left"><span className="address-icon text-md">9207 Lakeshore RdShreveport</span>
                                </div>
                                <div className="box-top-bar-right"><a className="phone-icon text-md" href="tel:(262) 555-0131">(262)
                                    555-0131</a><a className="email-icon text-md" href="mailto:contact@nivia.com">contact@nivia.com</a></div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img alt="Nivia" src={`/assets/imgs/template/${logoWhite ? "nhattam-new-logo" : "nhattam-new-logo"}.png`} />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/">Home</Link></li>
                                        <li className="has-children"><Link href="/about">About</Link></li>
                                        <li className="has-children"><Link href="/blog">Blog</Link></li>
                                        <li className="has-children"><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <SearchForm />
                            <Link className="btn btn-brand-4-medium hover-up" href="#">Get Started
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true">
                                    </path>
                                </svg>
                            </Link>
                            <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
