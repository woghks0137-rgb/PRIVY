import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import arrow2 from '../assets/icon/btn-arrow02.png'
import arrow1 from '../assets/icon/btn-arrow01.png'

import item01 from '../assets/images/news-item01.png'
import item02 from '../assets/images/news-item02.png'
import item03 from '../assets/images/news-item03.png'

import { Link } from 'react-router-dom'


function News() {

    const [selectedNews, setSelectedNews] = useState(null);
    const [confirmMessage, setConfirmMessage] = useState("");
    const [checkedCount, setCheckedCount] = useState(0);


    // 모달 닫기 + 상태 초기화
    const closeModal = () => {
        setSelectedNews(null);
        setCheckedCount(0);
        setConfirmMessage("");
    };


    // 체크박스 개수 변경
    const handleCheckChange = (e) => {
        setCheckedCount(prev =>
            e.target.checked ? prev + 1 : prev - 1
        );
    };


    // 체크 개수에 따른 메시지
    const handleConfirm = () => {

        if (checkedCount === 0) {
            setConfirmMessage("아직 체크한 항목이 없어요.");
        }
        else if (checkedCount === 1) {
            setConfirmMessage("좋아요! 작은 실천 하나부터 시작했어요.");
        }
        else if (checkedCount === 2) {
            setConfirmMessage("아주 좋아요! 거의 다 실천했어요.");
        }
        else {
            setConfirmMessage("완벽해요! 오늘의 개인정보 보호 실천 완료!");
        }

    };


    // ESC 키로 모달 닫기
    useEffect(() => {

        const handleKeyDown = (e) => {

            if (e.key === "Escape" && selectedNews !== null) {
                setSelectedNews(null);
                setCheckedCount(0);
                setConfirmMessage("");
            }

        };

        window.addEventListener("keydown", handleKeyDown);


        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [selectedNews]);


    return (
        <>
            <Header />

            <main className='news-page'>

                {/* ================= NEWS 상단 ================= */}

                <section className="news">
                    <div className="news-inner">

                        <div className="text-box">

                            <p className="label">
                                NEWS
                            </p>

                            <h2 className="title">
                                소식
                            </h2>

                            <p className="desc">
                                PRIVACY:ON의 새로운 소식과
                                <br />
                                캠페인 이야기를 전해드립니다.
                            </p>

                        </div>

                    </div>
                </section>


                {/* ================= NEWS 카드 ================= */}

                <section className="news-group">

                    <div className="news-inner">

                        <div className="btn-list">

                            <button className="newBtn">
                                전체
                            </button>

                            <button className="newBtn">
                                공지사항
                            </button>

                            <button className="newBtn">
                                캠페인 소식
                            </button>

                            <button className="newBtn">
                                생활 팁
                            </button>

                        </div>


                        <ul className="news-list">

                            {/* 첫 번째 카드 */}

                            <li className="news-item">

                                <div className="img-box">
                                    <img src={item01} alt="" />
                                </div>

                                <div className="text-box">

                                    <div className="point-box">

                                        <span className="point-text">
                                            공지사항
                                        </span>

                                        <span className="date">
                                            2026.10.08
                                        </span>

                                    </div>


                                    <h3 className="main-text">
                                        PRIVACY:ON 캠페인이 시작됩니다.
                                    </h3>


                                    <p className="sub-text">
                                        작은 실천이 모여
                                        <br />
                                        더 안전한 디지털 일상을 만듭니다.
                                    </p>


                                    <button
                                        className="item-btn"
                                        onClick={() => setSelectedNews(1)}
                                    >
                                        <span>자세히보기</span>
                                        <img src={arrow2} alt="" />
                                    </button>

                                </div>

                            </li>


                            {/* 두 번째 카드 */}

                            <li className="news-item">

                                <div className="img-box">
                                    <img src={item02} alt="" />
                                </div>

                                <div className="text-box">

                                    <div className="point-box">

                                        <span className="point-text">
                                            캠페인 소식
                                        </span>

                                        <span className="date">
                                            2026.10.08
                                        </span>

                                    </div>


                                    <h3 className="main-text">
                                        일상 속 개인정보 보호 체크리스트
                                    </h3>


                                    <p className="sub-text">
                                        지금 바로 실천할 수 있는
                                        <br />
                                        간단한 체크리스트를 확인해보세요.
                                    </p>


                                    <button
                                        className="item-btn"
                                        onClick={() => setSelectedNews(2)}
                                    >
                                        <span>자세히보기</span>
                                        <img src={arrow2} alt="" />
                                    </button>

                                </div>

                            </li>


                            {/* 세 번째 카드 */}

                            <li className="news-item">

                                <div className="img-box">
                                    <img src={item03} alt="" />
                                </div>

                                <div className="text-box">

                                    <div className="point-box">

                                        <span className="point-text">
                                            생활 팁
                                        </span>

                                        <span className="date">
                                            2026.10.08
                                        </span>

                                    </div>


                                    <h3 className="main-text">
                                        비밀번호, 이렇게 관리해보세요.
                                    </h3>


                                    <p className="sub-text">
                                        조금만 신경 쓰면
                                        <br />
                                        내 정보를 더 안전하게 지킬 수 있습니다.
                                    </p>


                                    <button
                                        className="item-btn"
                                        onClick={() => setSelectedNews(3)}
                                    >
                                        <span>자세히보기</span>
                                        <img src={arrow2} alt="" />
                                    </button>

                                </div>

                            </li>

                        </ul>


                        {/* ================= 하단 배너 ================= */}

                        <div className="news-banner">

                            <div className="text-box">

                                <h3>
                                    PRIVACY:ON의
                                    <br />
                                    더 많은 소식을 받아보세요.
                                </h3>

                            </div>


                            <Link to='/'>

                                <span>
                                    캠페인 소개 보기
                                </span>

                                <img src={arrow1} alt="" />

                            </Link>

                        </div>

                    </div>

                </section>



                {/* ===================================================
                    첫 번째 모달
                =================================================== */}

                {selectedNews === 1 && (

                    <div
                        className="news-modal"

                        onClick={(e) => {

                            if (e.target === e.currentTarget) {
                                closeModal();
                            }

                        }}
                    >

                        <div className="news-modal-content">

                            <button
                                className="news-modal-close"
                                onClick={closeModal}
                            >
                                ×
                            </button>


                            <div className="news-modal-top">

                                <span className="modal-category">
                                    공지사항
                                </span>

                                <span className="modal-date">
                                    2026.10.08
                                </span>

                            </div>


                            <h2 className="news-modal-title">
                                PRIVACY:ON 캠페인이 시작됩니다.
                            </h2>


                            <p className="news-modal-desc">
                                작은 실천이 모여 더 안전한 디지털 일상을 만듭니다.
                            </p>


                            <div className="news-modal-check">

                                <h3>
                                    지금, 함께 실천해보세요.
                                </h3>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    다른 사이트와 같은 비밀번호를 사용하지 않기

                                </label>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    개인정보 공개 범위를 정기적으로 확인하기

                                </label>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    출처가 불분명한 링크는 클릭하지 않기

                                </label>

                            </div>


                            <button
                                className="news-modal-confirm"
                                onClick={handleConfirm}
                            >
                                확인했어요 →
                            </button>


                            {confirmMessage && (

                                <p className="news-confirm-message">
                                    {confirmMessage}
                                </p>

                            )}

                        </div>

                    </div>

                )}



                {/* ===================================================
                    두 번째 모달
                =================================================== */}

                {selectedNews === 2 && (

                    <div
                        className="news-modal"

                        onClick={(e) => {

                            if (e.target === e.currentTarget) {
                                closeModal();
                            }

                        }}
                    >

                        <div className="news-modal-content">


                            <button
                                className="news-modal-close"
                                onClick={closeModal}
                            >
                                ×
                            </button>


                            <div className="news-modal-top">

                                <span className="modal-category">
                                    캠페인 소식
                                </span>

                                <span className="modal-date">
                                    2026.10.03
                                </span>

                            </div>


                            <h2 className="news-modal-title">
                                일상 속 개인정보 보호 체크리스트
                            </h2>


                            <p className="news-modal-desc">
                                지금 바로 실천할 수 있는 간단한 체크리스트를 확인해보세요.
                            </p>


                            <div className="news-modal-check">

                                <h3>
                                    오늘 확인해볼 항목
                                </h3>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    SNS 계정의 공개 범위를 확인했나요?

                                </label>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    사용하지 않는 앱의 접근 권한을 정리했나요?

                                </label>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    개인정보가 포함된 게시물을 다시 확인했나요?

                                </label>

                            </div>


                            <button
                                className="news-modal-confirm"
                                onClick={handleConfirm}
                            >
                                확인했어요 →
                            </button>


                            {confirmMessage && (

                                <p className="news-confirm-message">
                                    {confirmMessage}
                                </p>

                            )}

                        </div>

                    </div>

                )}



                {/* ===================================================
                    세 번째 모달
                =================================================== */}

                {selectedNews === 3 && (

                    <div
                        className="news-modal"

                        onClick={(e) => {

                            if (e.target === e.currentTarget) {
                                closeModal();
                            }

                        }}
                    >

                        <div className="news-modal-content">


                            <button
                                className="news-modal-close"
                                onClick={closeModal}
                            >
                                ×
                            </button>


                            <div className="news-modal-top">

                                <span className="modal-category">
                                    생활 팁
                                </span>

                                <span className="modal-date">
                                    2026.09.28
                                </span>

                            </div>


                            <h2 className="news-modal-title">
                                비밀번호, 이렇게 관리해보세요.
                            </h2>


                            <p className="news-modal-desc">
                                조금만 신경 쓰면 내 정보를 더 안전하게 지킬 수 있습니다.
                            </p>


                            <div className="news-modal-check">

                                <h3>
                                    지금 실천해보세요
                                </h3>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    서비스마다 다른 비밀번호 사용하기

                                </label>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    8자리 이상, 영문·숫자·특수문자 조합하기

                                </label>


                                <label>

                                    <input
                                        type="checkbox"
                                        onChange={handleCheckChange}
                                    />

                                    비밀번호를 주기적으로 변경하기

                                </label>

                            </div>


                            <button
                                className="news-modal-confirm"
                                onClick={handleConfirm}
                            >
                                확인했어요 →
                            </button>


                            {confirmMessage && (

                                <p className="news-confirm-message">
                                    {confirmMessage}
                                </p>

                            )}

                        </div>

                    </div>

                )}


                <Footer />

            </main>

        </>
    )
}


export default News