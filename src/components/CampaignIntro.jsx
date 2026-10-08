import React from 'react'
import aboutIcon01 from '../assets/icon/about-icon01.png'
import aboutIcon02 from '../assets/icon/about-icon02.png'
import aboutIcon03 from '../assets/icon/about-icon03.png'
function CampaignIntro() {
    return (
        <section className="campaign" id='campaign'>
            <div className="campaign-inner">
                <div className="text-box">
                    <p className="label">OUR CAMPAIGN</p>
                    <h2 className="title">일상의 모든 순간,<br />
                        개인정보가 더 안전한 세상을 위해</h2>
                    <p className="desc">PRIVACY:ON은 모두가 안심할 수 있는 디지털 일상을 만들어가는<br />
                        개인정보 보호 캠페인입니다. 작은 실천이 모여 더 큰 변화를 만듭니다.   </p>
                </div>
                <div className="icon-box">
                    <ul className="icon-list">
                        <li className="icon-item">
                            <img src={aboutIcon01} alt="" />
                            <h3 className="icon-title">안전한 일상</h3>
                            <p className="icon-desc">소중한 정보를 지켜<br />
                                더 안전한 일상을 만듭니다.</p>
                        </li>
                        <li className="icon-item">
                            <img src={aboutIcon02} alt="" />
                            <h3 className="icon-title">신뢰하는 디지털 환경</h3>
                            <p className="icon-desc">
                                함께 만드는 신뢰가<br />
                                더 건강한 디지털 사회를 만듭니다.
                            </p>
                        </li>
                        <li className="icon-item">
                            <img src={aboutIcon03} alt="" />
                            <h3 className="icon-title">함께 만드는 변화</h3>
                            <p className="icon-desc">
                                지금의 작은 실천이 <br />
                                더 나은 내일을 만듭니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CampaignIntro