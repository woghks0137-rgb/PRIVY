import React from 'react'
import arrow01 from '../assets/icon/btn-arrow01.png'
import arrow02 from '../assets/icon/btn-arrow02.png'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="hero" id='hero'>
            <div className="hero-inner">
                <div className="hero-text-box">
                    <h2 className="hero-title">
                        개인정보 보호,<br />
                        <span className="point-text">오늘의 작은 실천</span>에서<br />
                        시작됩니다.
                    </h2>
                    <p className="main-text">
                        소중한 정보를 지키는 습관이<br />
                        더 안전한 디지털 일상을 만듭니다.
                    </p>
                    <p className="sub-text">쉽게 실천할 수 있는 보호 방법을 함께 알아보세요.</p>
                </div>

                <div className="hero-btn-box">
                    <Link to="/?section=guide" className='hero-btn01'>
                        <span>보호 가이드 보기</span>
                        <img src={arrow01} alt="" />
                    </Link>
                    <Link className="hero-btn02" to='news'>
                        <span>새로운 소식 듣기</span>
                        <img src={arrow02} alt="" />
                    </Link>
                </div>



            </div>
        </section>
    )
}

export default Hero