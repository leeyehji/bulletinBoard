import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const loadingRef = useRef(null);
    const observerRef = useRef(null);


    //첫 로딩 시 로그인 여부 가져옴
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedLoginStatus === 'true');
    }, []);

    //첫 로딩 시 로그인 정보 및 글 목록 가져옴
    useEffect(() => {
        const grantType = localStorage.getItem('grantType');
        const accessToken = localStorage.getItem('accessToken');
        //const memberId = localStorage.getItem('username');

        // if (grantType && accessToken && memberId) {
        //     setBearer(`${grantType} ${accessToken}`);
        //     setMemberId(memberId);
        // }

        fetchBoardList(0);
    }, []);

    // 무한 스크롤 구현
    useEffect(() => {
        fetchBoardList(currentPage);
    }, [currentPage]);

    // 로딩 상태 변화 시 로딩 중 또는 글 목록 보여줌
    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && loading) {
                setCurrentPage(prevPage => prevPage + 1);
            }
        });

        if (loadingRef.current) observerRef.current.observe(loadingRef.current);

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [loading]);


    //글 목록 가져옴
    const fetchBoardList = async (page) => {
        try {
            const response = await axios.post('http://localhost:9000/mentor/getMentorList', null, { params: { page } });
            const newBoardList = response.data.content;
            setBoardList(prevList => [...prevList, ...newBoardList]);
            setLoading(newBoardList.length > 0);
        } catch (error) {
            console.error('Error fetching board list:', error);
        }
    };

    // 글 목록 중에서 자신이 작성한 글이면 삭제 가능
    // const handleDeleteMentor = async (seq) => {
    //     try {
    //         await axios.post('http://localhost:9000/mentor/deleteBoard', null, {
    //             headers: {
    //                 Authorization: bearer,
    //             },
    //             params: {
    //                 seq,
    //                 memberId,
    //             },
    //         });
    //         setBoardList(prevList => prevList.filter(item => item.seq !== seq));
    //     } catch (error) {
    //         console.error('Error deleting mentor:', error);
    //     }
    // };

    return (
        <div className={`main-screen`} >

            <div className="container">
                <h1 className="title">등록된 글 정보</h1>

                {boardList.map((item, index) => (
                    <div key={index} className="info">
                        <p><strong>제목:</strong> {item.title}</p>
                        <p><strong>이름:</strong> {item.name}</p>
                        <p><strong>이메일:</strong> {item.email}</p>
                        <div id={`content-${item.seq}`} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                ))}

                <div ref={loadingRef} className="loading">
                    {loading && <p>Loading more...</p>}
                </div>
            </div>

        </div>
    );
};

export default BoardList;
