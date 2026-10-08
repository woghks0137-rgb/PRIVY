import React from 'react'
import guideImg01 from '../assets/images/guide-img-01.png'
import guideImg02 from '../assets/images/guide-img-02.png'
import guideImg03 from '../assets/images/guide-img-03.png'
import guideImg04 from '../assets/images/guide-img-04.png'
function GuideSection() {
    return (
        <section className="guide" id='guide'>
            <div className="guide-inner">
                <div className="text-box">
                    <p className="label">OUR GUIDE</p>
                    <h2 className="title">지금 , 이렇게 실천해 보세요</h2>
                    <p className="desc">일상 속 작은 실천이 소중한 정보를 지키는 큰 힘이 됩니다.</p>
                </div>
                <div className="guide-cardBox">
                    <ul className="guide-card-list">
                        <li className="guide-card">
                            <img src={guideImg01} alt="" />
                            <div className="text-box">
                                <h3 className="card-title">강한 비밀번호</h3>
                                <p className="card-desc">
                                    예측하기 어려운<br />
                                    비밀번호를 사용해요.
                                </p>
                            </div>
                        </li>
                        <li className="guide-card">
                            <img src={guideImg02} alt="" />
                            <div className="text-box">
                                <h3 className="card-title">의심 링크 주의</h3>
                                <p className="card-desc">
                                    출처가 불분명한 링크는<br />
                                    열지 않아요.
                                </p>
                            </div>
                        </li>
                        <li className="guide-card">
                            <img src={guideImg03} alt="" />
                            <div className="text-box">
                                <h3 className="card-title">개인정보 최소 공개</h3>
                                <p className="card-desc">
                                    꼭 필요한 정보만<br />
                                    제공해요.
                                </p>
                            </div>
                        </li>
                        <li className="guide-card">
                            <img src={guideImg04} alt="" />
                            <div className="text-box">
                                <h3 className="card-title">정기적인 보안 점검</h3>
                                <p className="card-desc">
                                    내 계정과 기기의 보안을<br />
                                    주기적으로 확인해요.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default GuideSection