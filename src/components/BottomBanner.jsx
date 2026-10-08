import React, { useState, useEffect } from 'react'
import arrow from '../assets/icon/btn-arrow01.png'

function BottomBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkedCount, setCheckedCount] = useState(0);
    const [message, setMessage] = useState("");
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
                setCheckedCount(0);
                setMessage("");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <section className="action" id='action'>
                <div className="action-inner">
                    <div className="text-box">
                        <h2 className="title">오늘의 작은 실천이<br />
                            더 안전한 디지털 일상을 만듭니다.</h2>
                        <p className="desc">함께 실천하는 개인정보 보호, 더 따뜻한 내일을 만듭니다.</p>
                    </div>
                    <button className="btn-box" onClick={() => setIsModalOpen(true)}>
                        <span className="btn">지금, 함께 실천하기</span>
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </section>
            {
                isModalOpen && (
                    <div className="practice-modal"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setIsModalOpen(false);
                                setCheckedCount(0);
                                setMessage("");
                            }
                        }}>
                        <div className="modal-content">
                            <button
                                className="modal-close"
                                onClick={(e) => {
                                    if (e.target === e.currentTarget) {
                                        setIsModalOpen(false);
                                        setCheckedCount(0);
                                        setMessage("");
                                    }
                                }}
                            >
                                ×
                            </button>

                            <h2>오늘부터 지킬 개인정보 보호 습관</h2>

                            <label>
                                <input type="checkbox"
                                    onChange={(e) => {
                                        setCheckedCount(prev =>
                                            e.target.checked ? prev + 1 : prev - 1
                                        );
                                    }} />
                                비밀번호를 다른 사이트와 다르게 사용하기
                            </label>

                            <label>
                                <input type="checkbox"
                                    onChange={(e) => {
                                        setCheckedCount(prev =>
                                            e.target.checked ? prev + 1 : prev - 1
                                        );
                                    }} />
                                모르는 링크는 바로 누르지 않기
                            </label>

                            <label>
                                <input type="checkbox"
                                    onChange={(e) => {
                                        setCheckedCount(prev =>
                                            e.target.checked ? prev + 1 : prev - 1
                                        );
                                    }} />
                                불필요한 개인정보 입력하지 않기
                            </label>

                            <label>
                                <input type="checkbox"
                                    onChange={(e) => {
                                        setCheckedCount(prev =>
                                            e.target.checked ? prev + 1 : prev - 1
                                        );
                                    }} />
                                계정 보안 설정 확인하기
                            </label>

                            <button className="complete-btn"
                                onClick={() => {
                                    setMessage(`오늘 ${checkedCount}가지 개인정보 보호 습관을 실천했어요!!`)
                                }}>
                                실천 완료
                            </button>
                            {message && (
                                <p className="result-message">
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default BottomBanner