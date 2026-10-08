import React from 'react'
import logo from '../assets/icon/logo.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-logo">
                    <img src={logo} alt="PRIVACY:ON 로고" />
                </div>

                <p className="footer-message">
                    일상의 모든 순간, 더 안전한 디지털 세상을 위해.
                </p>

                <p className="footer-copy">
                    © 2026 PRIVACY:ON. All rights reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer