import React, { useEffect, useState } from 'react';
import  CustomEditor from "../component/CustomEditor.jsx";

const BoardWrite = () => {
    const [loading, setLoading] = useState(true);

    // 첫 페이지 입장 시 글 작성 에디터 가져오기
    useEffect(() => {
        // 글 작성 에디터를 가져오는 데에 성공하면 로딩 종료
        setLoading(false);
    }, []);

    return (
        <div className='main'>
            <div className='content'>
                {loading ? (
                    <div className='loading'>
                        <p>Loading more...</p>
                    </div>
                ) : (
                    <div className='editor'>
                        <h1>글작성 에디터 가져와</h1>
                        <CustomEditor />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BoardWrite;
