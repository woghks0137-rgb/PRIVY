import React from 'react'
import logo from '../assets/icon/logo.png'
import magnifier from '../assets/icon/magnifier.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <div className="header-inner">
                <h1 className="logo">
                    <a href="#"><img src={logo} alt="PRIVACY:ON 로고" /></a>
                </h1>
                <nav className="gnb">
                    <ul className="gnb-list">
                        <li className="gnb-item">
                            <Link to="/?section=campaign">캠페인 소개</Link>
                        </li>

                        <li className="gnb-item">
                            <Link to="/?section=guide">보호 가이드</Link>
                        </li>

                        <li className="gnb-item">
                            <Link to="/?section=action">함께 실천하기</Link>
                        </li>

                        <li className="gnb-item">
                            <Link to="/news">소식</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-img-box">
                    <img src={magnifier} alt="검색 아이콘" />
                </div>
            </div>
        </header>
    )
}

export default Header