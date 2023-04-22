import { Link } from 'react-router-dom'

import footerClasses from './footerClasses'

export default function Footer() {
  return (
    <footer className={footerClasses.footer}>
      <div className={footerClasses.footerContainer}>
        <div className={footerClasses.footerLogo}>
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="favicon-32x32.png"
              className={footerClasses.footerLogoImg}
              alt="DaMaFe Logo"
            />
            <span className={footerClasses.footerTitle}>DaMaFe</span>
          </a>
          <ul className={footerClasses.footerLinks}>
            <li>
              <Link to={`/`} className={footerClasses.footerLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/reviews`} className={footerClasses.footerLink}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <hr className={footerClasses.footerRule} />
        <span className={footerClasses.footerCopy}>
          ©{' '}
          <Link to={'/reviews'} className={footerClasses.footerLink}>
            DaMaFe™
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
