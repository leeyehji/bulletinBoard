import React, { useEffect, useRef, useState } from 'react';

const BoardOne = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [seq, SetSeq] = useState(null);
    const [loading, setLoading] = useState(true);

    // 처음 페이지 입장 시 로그인 여부 판별
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }

        getBoard(seq);
    }, []);

    // 글 번호를 받아서 글 제목, 내용 등을 보여줌
    const getBoard = (seq) => {

        // 글 작성 에디터를 가져오는 데에 성공하면 로딩 종료
        //setLoading(false);
    }

    return (
        <div className={'main'}>

            <div className="content">
                {loading ||
                    <div className="intro">
                        <h1>제목</h1>
                        <p>내용</p>
                    </div>
                }
            </div>

            <div className="loading">
                {loading && <p>Loading more...</p>}
            </div>
        </div>
    );
};

export default BoardOne;
