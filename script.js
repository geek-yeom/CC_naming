body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* 내용이 길어질 경우 상단 정렬 */
    min-height: 100vh;
    margin: 20px 0; /* 위아래 여백 추가 */
    color: #333;
}

.container {
    background-color: #ffffff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px; /* 컨테이너 너비 확장 */
    text-align: center;
}

h1 {
    color: #2c3e50;
    margin-bottom: 10px;
}

h2 {
    color: #4a69bd;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #e8f0fe;
    padding-bottom: 10px;
}

.section-description {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 25px;
}

p {
    color: #555;
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #4a69bd;
}

.input-group input[type="text"],
.input-group select { /* select 태그도 스타일 적용 */
    width: calc(100% - 20px);
    padding: 12px 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    -webkit-appearance: none; /* select 기본 스타일 제거 */
    -moz-appearance: none;
    appearance: none;
    background-color: white; /* 배경색 흰색 보장 */
}

.input-group input[type="text"]:focus,
.input-group select:focus {
    border-color: #4a69bd;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 105, 189, 0.3);
}

button {
    background-color: #4a69bd;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 15px;
    margin-bottom: 25px;
}

button:hover {
    background-color: #3f58a3;
}

.small-button { /* 기수 직접 입력/선택 토글 버튼 스타일 */
    background-color: #6c757d; /* 회색 계열 */
    font-size: 14px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 0;
    display: inline-block; /* 입력 필드와 같은 줄에 표시 */
    vertical-align: middle; /* 입력 필드와 세로 정렬 */
}

.small-button:hover {
    background-color: #5a6268;
}

.result-box {
    background-color: #e8f0fe;
    padding: 20px;
    border-radius: 8px;
    border: 1px dashed #a7c2f0;
    word-break: break-all; /* 긴 링크가 넘치지 않도록 */
    margin-top: 20px;
}

.result-box p {
    margin-top: 0;
    color: #4a69bd;
    font-weight: bold;
}

#generated_link_direct,
#generated_link_search {
    display: block;
    color: #007bff;
    text-decoration: none;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 15px;
}

#generated_link_direct:hover,
#generated_link_search:hover {
    text-decoration: underline;
}

#copy_button_direct,
#copy_button_search {
    background-color: #2196F3;
    margin-top: 0;
    padding: 10px 20px;
    font-size: 16px;
}

#copy_button_direct:hover,
#copy_button_search:hover {
    background-color: #218838;
}

hr { /* 섹션 구분선 */
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    margin: 40px 0;
}
