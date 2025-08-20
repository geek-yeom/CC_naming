// --- 섹션 1: 강의 바로 신청 링크 생성기 데이터 (linkBridge.do) ---
const BASE_URL_DIRECT = "https://hdeapp.ehyundai.com/linkBridge.do";

// 점포 코드 데이터: 어드민 -> 점관리에서 확인하신 점 코드를 여기에 추가/수정해주세요.
const STORE_CODES_DIRECT = {
    "더현대서울": "400",
    "본점": "210",
    "무역": "220",
    "천호": "260",
    "신촌": "270",
    "미아": "410",
    "목동": "420",
    "중동": "430",
    "킨텍스": "450",
    "충청": "470",
    "판교": "480",
    "가든": "750",
    "대구": "460",
    "부산": "240",
    "울산": "290"
    // 필요에 따라 더 추가할 수 있습니다.
};

// 기수 코드 데이터: **중요! 어드민 -> 기수관리에서 확인하신 현재 및 가까운 기수 코드를 여기에 추가/수정해주세요.**
// '기수 진행년도 월' 형식으로 표시하면 사용자가 이해하기 쉽습니다.
const TERM_CODES_DIRECT = {
    "2025년 12월 (028)": "028",
    "2025년 11월 (027)": "027",
    "2025년 10월 (026)": "026",
    "2025년 9월 (025)": "025",
    "2025년 8월 (024)": "024", // 예시: 8월 시작 강좌는 024 기수
    "2025년 7월 (023)": "023",
    // 실제 사용하실 기수로 업데이트 해주세요.
};

// --- 섹션 2: 검색 결과 페이지 링크 생성기 데이터 (CT010100_L.do / ct_01_01_00_01.do) ---
const BASE_URL_PC_SEARCH = "https://www.ehyundai.com/newCulture/CT/CT010100_L.do";
const BASE_URL_MOBILE_SEARCH = "https://www.ehyundai.com/mobile/culture/ct_01_01_00_01.do";

// 검색 기능용 점포 코드: '전체 지점 (ALL)' 옵션 포함
const STORE_CODES_SEARCH = {
    "전체 지점 (ALL)": "ALL",
    "더현대서울": "400",
    "본점": "210",
    "무역": "220",
    "천호": "260",
    "신촌": "270",
    "미아": "410",
    "목동": "420",
    "중동": "430",
    "킨텍스": "450",
    "충청": "470",
    "판교": "480",
    "가든": "750",
    "대구": "460",
    "부산": "240",
    "울산": "290"
};

// 전단 분류별 특정 숫자 (keyword 매개변수 값)
// 각 카테고리(CH1985, 문화센터, 커넥트)에 맞는 keyword 값을 여기에 정확히 입력해주세요.
const CATEGORY_KEYWORDS = {
    "CH": { // CH1985 카테고리
        "on 라이브": "38",
        "파인다이닝": "35",
        "살롱 1985": "33",
        "키즈패밀리": "37",
        "클럽 웰니스": "29",
        "파워트레이닝": "30",
        "취향 커뮤니티": "32",
        "인문&아트살롱": "31"
    },
    "CT": { // 문화센터 (CT) 카테고리
        "인문예술": "001",
        "재테크": "002",
        "외국어": "003",
        "사진 여행": "019",
        "웰니스뷰티": "020",
        "쿠킹취미": "021",
        "미술 기악": "022",
        "노래 댄스": "023",
        "공연 이벤트": "024",
        "엄마랑 아가랑": "025",
        "어린이 패밀리": "026",
        "자녀교육 프리맘": "027"
    },
    "CC": { // 커넥트 (CC) 카테고리 (문화센터와 동일한 키워드 사용)
        "인문예술": "001",
        "재테크": "002",
        "외국어": "003",
        "사진 여행": "019",
        "웰니스뷰티": "020",
        "쿠킹취미": "021",
        "미술 기악": "022",
        "노래 댄스": "023",
        "공연 이벤트": "024",
        "엄마랑 아가랑": "025",
        "어린이 패밀리": "026",
        "자녀교육 프리맘": "027"
    }
};

// --- 공통 기능 함수 ---

// 웹페이지 로드 시 모든 드롭다운 메뉴 채우기 및 기본 URL 설정
document.addEventListener('DOMContentLoaded', () => {
    // 섹션 1: 바로 신청 링크 관련 초기 설정
    document.getElementById('base_url_direct').value = BASE_URL_DIRECT;
    populateDropdown('store_code_direct', STORE_CODES_DIRECT); // 점포 코드 드롭다운 채우기
    populateDropdown('term_code_direct', TERM_CODES_DIRECT);   // 기수 코드 드롭다운 채우기

    // 섹션 2: 검색 링크 관련 초기 설정
    document.getElementById('base_url_search').value = BASE_URL_PC_SEARCH; // 기본값: PC
    populateDropdown('store_code_search', STORE_CODES_SEARCH); // 검색용 점포 코드 드롭다운 채우기
    updateSearchKeywordOptions(); // 검색 전단 분류 옵션 초기화
});

// 드롭다운 메뉴에 옵션들을 채우는 공통 함수
function populateDropdown(selectId, optionsMap) {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = '<option value="">-- 선택 --</option>'; // 기본 '선택' 옵션 추가
    for (const [key, value] of Object.entries(optionsMap)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = `${key}`; // 옵션 텍스트는 이름만 (예: "더현대서울")
        selectElement.appendChild(option);
    }
}

// --- 섹션 1 함수들 (바로 신청 링크) ---

// 기수 코드 입력 방식 토글 (드롭다운 <-> 직접 입력)
function toggleTermInput(section) {
    const termSelect = document.getElementById(`term_code_${section}`);
    const termManualInput = document.getElementById(`term_code_manual_${section}`);
    // 버튼은 select 바로 다음 형제 요소임
    const toggleButton = termSelect.nextElementSibling; 

    if (termSelect.style.display === 'none') {
        // 현재 직접 입력 필드가 보이면 -> 드롭다운으로 변경
        termSelect.style.display = 'block';
        termManualInput.style.display = 'none';
        termManualInput.value = ''; // 직접 입력 값 초기화
        toggleButton.textContent = '직접 입력/선택';
    } else {
        // 현재 드롭다운이 보이면 -> 직접 입력 필드로 변경
        termSelect.style.display = 'none';
        termManualInput.style.display = 'block';
        termSelect.value = ''; // 드롭다운 선택 값 초기화
        toggleButton.textContent = '드롭다운으로 선택';
    }
}

// 강의 바로 신청 링크 생성 함수
function generateDirectLink() {
    const baseUrl = document.getElementById('base_url_direct').value;
    const storeCodeSelect = document.getElementById('store_code_direct');
    const termCodeSelect = document.getElementById('term_code_direct');
    const termCodeManualInput = document.getElementById('term_code_manual_direct');
    const courseNumber = document.getElementById('course_number_direct').value;

    let selectedStoreCode = storeCodeSelect.value;
    let selectedTermCode;

    // 기수 입력 방식에 따라 실제 사용될 값 결정
    if (termCodeSelect.style.display === 'none') { // 직접 입력 필드가 보일 때
        selectedTermCode = termCodeManualInput.value;
    } else { // 드롭다운이 보일 때
        selectedTermCode = termCodeSelect.value;
    }

    // 필수 입력값 검사
    if (!selectedStoreCode || !selectedTermCode || !courseNumber) {
        alert("강의 바로 신청 링크: 모든 필수 항목 (점포, 기수, 전단 번호)을 입력/선택해주세요!");
        return;
    }

    // 링크 조합 규칙: https://hdeapp.ehyundai.com/linkBridge.do?n=ACC-A01-002&stCd=400&sqCd=024&crsSqNo=7197
    // n=ACC-A01-002는 고정 값으로 보입니다.
    const fullLink = `${baseUrl}?n=ACC-A01-002&stCd=${selectedStoreCode}&sqCd=${selectedTermCode}&crsSqNo=${courseNumber}`;

    const generatedLinkElement = document.getElementById('generated_link_direct');
    generatedLinkElement.href = fullLink;
    generatedLinkElement.textContent = fullLink; // 화면에 링크 텍스트 표시
}

// --- 섹션 2 함수들 (검색 링크) ---

// 장치 유형 (PC/모바일)에 따라 기본 URL 업데이트 함수
function updateBaseUrlSearch() {
    const deviceType = document.getElementById('device_type').value;
    const baseUrlInput = document.getElementById('base_url_search');
    if (deviceType === 'pc') {
        baseUrlInput.value = BASE_URL_PC_SEARCH;
    } else { // mobile
        baseUrlInput.value = BASE_URL_MOBILE_SEARCH;
    }
}

// 문화센터 카테고리 선택에 따라 '전단 분류 검색' 옵션 업데이트 함수
function updateSearchKeywordOptions() {
    const categoryType = document.getElementById('category_type').value;
    const keywordSearchTermSelect = document.getElementById('keyword_search_term');
    
    // 기존 옵션 모두 지우고 기본 옵션 추가
    keywordSearchTermSelect.innerHTML = '<option value="">-- 전단 분류 선택 안함 --</option>';

    if (categoryType === 'none') {
        // 카테고리 선택 안함 -> 전단 분류 옵션 없음
        return;
    }

    // 선택된 카테고리에 맞는 전단 분류 옵션들 가져오기
    const options = CATEGORY_KEYWORDS[categoryType];
    if (options) { // 옵션이 존재하면
        for (const [key, value] of Object.entries(options)) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = `${key} (${value})`; // 예: "on 라이브 (38)"
            keywordSearchTermSelect.appendChild(option);
        }
    }
}

// 검색 방식 (강좌명/전단분류)에 따라 입력 필드 토글 함수
function toggleSearchInputs() {
    const searchType = document.getElementById('search_type').value;
    const nicknameGroup = document.getElementById('nickname_search_group'); // 강좌명 검색 그룹
    const keywordGroup = document.getElementById('keyword_search_group');   // 전단 분류 검색 그룹

    // 일단 두 그룹 모두 숨김
    nicknameGroup.style.display = 'none';
    keywordGroup.style.display = 'none';

    // 선택된 검색 방식에 따라 해당 그룹만 보이게 함
    if (searchType === 'nickname') {
        nicknameGroup.style.display = 'block';
    } else if (searchType === 'keyword') {
        keywordGroup.style.display = 'block';
        updateSearchKeywordOptions(); // 전단 분류 옵션이 최신 상태인지 확인
    }
}

// 검색 결과 페이지 링크 생성 함수
function generateSearchLink() {
    const baseUrl = document.getElementById('base_url_search').value;
    const categoryType = document.getElementById('category_type').value;
    const storeCode = document.getElementById('store_code_search').value; // 검색용 점포 코드
    const searchType = document.getElementById('search_type').value;
    const nicknameSearchTerm = document.getElementById('nickname_search_term').value;
    const keywordSearchTerm = document.getElementById('keyword_search_term').value;

    let params = []; // 링크에 추가될 매개변수들을 저장할 배열

    // 1. 문화센터 카테고리 구분 (ctGubn) 추가
    if (categoryType !== 'none') {
        params.push(`ctGubn=${categoryType}`);
    }

    // 2. 점포 코드 (stCd) 추가
    // 규칙: ctGubn이 '문화센터 (CT)' 이거나, ctGubn을 선택하지 않았을 때만 stCd가 적용됩니다.
    // CH1985나 커넥트(CC)는 자체적으로 점포를 지정하므로 stCd를 추가하지 않습니다.
    if (categoryType === 'none' || categoryType === 'CT') {
        if (storeCode && storeCode !== "ALL") { // 특정 점포를 선택했다면
             params.push(`stCd=${storeCode}`);
        } else if (storeCode === "ALL") { // '전체 지점 (ALL)'을 선택했다면
            params.push(`stCd=ALL`);
        }
    }

    // 3. 검색어 (nickCrsNm) 또는 전단 분류 (keyword) 추가
    if (searchType === 'nickname' && nicknameSearchTerm) {
        // 검색어는 URL 인코딩이 필요합니다 (한글 깨짐 방지)
        params.push(`nickCrsNm=${encodeURIComponent(nicknameSearchTerm)}`);
    } else if (searchType === 'keyword' && keywordSearchTerm) {
        params.push(`keyword=${keywordSearchTerm}`);
    }

    let fullLink = baseUrl;
    if (params.length > 0) { // 매개변수가 하나라도 있으면 '?'를 붙이고 연결
        fullLink += '?' + params.join('&'); // 매개변수들을 '&'로 연결
    }

    const generatedLinkElement = document.getElementById('generated_link_search');
    generatedLinkElement.href = fullLink;
    generatedLinkElement.textContent = fullLink; // 화면에 링크 텍스트 표시
}

// 공통 링크 복사 함수 (어떤 섹션의 링크를 복사할지 'section' 매개변수로 구분)
function copyLink(section) {
    const generatedLinkElement = document.getElementById(`generated_link_${section}`);
    const linkToCopy = generatedLinkElement.textContent; // <a> 태그에 표시된 링크 텍스트 가져오기

    if (!linkToCopy) {
        alert("먼저 링크를 생성해주세요!");
        return;
    }

    // 클립보드에 복사
    navigator.clipboard.writeText(linkToCopy).then(() => {
        alert("링크가 클립보드에 복사되었습니다!");
    }).catch(err => {
        console.error('링크 복사 실패:', err);
        alert("링크 복사에 실패했습니다. 수동으로 복사해주세요.");
    });
}