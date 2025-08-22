// --- 섹션 1: 강의 바로 신청 링크 생성기 데이터 (linkBridge.do) ---
const BASE_URL_DIRECT_PC = "https://www.ehyundai.com/newCulture/CT/CT010100_V.do";
const BASE_URL_DIRECT_WEB = "https://hdeapp.ehyundai.com/linkBridge.do";
const BASE_URL_DIRECT_APP = "hdswallet://ehyundai.com";
const BASE_URL_APPCARD = "https://hdeapp.ehyundai.com/shopping/view/ASI/A01/002/evntGdDetail";

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
};

// 점포별 기수 코드 데이터
const STORE_TERM_CODES = {
    "400": { // 더현대서울
        "2025년 8월 (024)": "024",
        "2025년 9월 (025)": "025",
        "2025년 10월 (026)": "026",
        "2025년 11월 (027)": "027",
        "2025년 12월 (028)": "028",
        "2026년 1월 (029)": "029",
        "2026년 2월 (030)": "030",
        "2026년 3월 (031)": "031",
        "2026년 4월 (032)": "032",
        "2026년 5월 (033)": "033",
        "2026년 6월 (034)": "034",
        "2026년 7월 (035)": "035"
    },
    "210": { // 본점
        "2025년 8월 (164)": "164",
        "2025년 9월 (165)": "165",
        "2025년 10월 (166)": "166",
        "2025년 11월 (167)": "167",
        "2025년 12월 (168)": "168",
        "2026년 1월 (169)": "169",
        "2026년 2월 (170)": "170",
        "2026년 3월 (171)": "171",
        "2026년 4월 (172)": "172",
        "2026년 5월 (173)": "173",
        "2026년 6월 (174)": "174",
        "2026년 7월 (175)": "175"
    },
    "430": { // 중동
        "2025년 8월 (094)": "094",
        "2025년 9월 (095)": "095",
        "2025년 10월 (096)": "096",
        "2025년 11월 (097)": "097",
        "2025년 12월 (098)": "098",
        "2026년 1월 (099)": "099",
        "2026년 2월 (100)": "100",
        "2026년 3월 (101)": "101",
        "2026년 4월 (102)": "102",
        "2026년 5월 (103)": "103",
        "2026년 6월 (104)": "104",
        "2026년 7월 (105)": "105"
    },
    "460": { // 대구
        "2025년 8월 (062)": "062",
        "2025년 9월 (063)": "063",
        "2025년 10월 (064)": "064",
        "2025년 11월 (065)": "065",
        "2025년 12월 (066)": "066",
        "2026년 1월 (067)": "067",
        "2026년 2월 (068)": "068",
        "2026년 3월 (069)": "069",
        "2026년 4월 (070)": "070",
        "2026년 5월 (071)": "071",
        "2026년 6월 (072)": "072",
        "2026년 7월 (073)": "073"
    },
    "220": { // 무역
        "2025년 8월 (154)": "154",
        "2025년 9월 (155)": "155",
        "2025년 10월 (156)": "156",
        "2025년 11월 (157)": "157",
        "2025년 12월 (158)": "158",
        "2026년 1월 (159)": "159",
        "2026년 2월 (160)": "160",
        "2026년 3월 (161)": "161",
        "2026년 4월 (162)": "162",
        "2026년 5월 (163)": "163",
        "2026년 6월 (164)": "164",
        "2026년 7월 (165)": "165"
    },
    "260": { // 천호
        "2025년 8월 (118)": "118",
        "2025년 9월 (119)": "119",
        "2025년 10월 (120)": "120",
        "2025년 11월 (121)": "121",
        "2025년 12월 (122)": "122",
        "2026년 1월 (123)": "123",
        "2026년 2월 (124)": "124",
        "2026년 3월 (125)": "125",
        "2026년 4월 (126)": "126",
        "2026년 5월 (127)": "127",
        "2026년 6월 (128)": "128",
        "2026년 7월 (129)": "129"
    },
    "270": { // 신촌
        "2025년 8월 (114)": "114",
        "2025년 9월 (115)": "115",
        "2025년 10월 (116)": "116",
        "2025년 11월 (117)": "117",
        "2025년 12월 (118)": "118",
        "2026년 1월 (119)": "119",
        "2026년 2월 (120)": "120",
        "2026년 3월 (121)": "121",
        "2026년 4월 (122)": "122",
        "2026년 5월 (123)": "123",
        "2026년 6월 (124)": "124",
        "2026년 7월 (125)": "125"
    },
    "410": { // 미아
        "2025년 8월 (103)": "103",
        "2025년 9월 (103)": "103",
        "2025년 10월 (103)": "103",
        "2025년 11월 (103)": "103",
        "2025년 12월 (103)": "103",
        "2026년 1월 (103)": "103",
        "2026년 2월 (103)": "103",
        "2026년 3월 (103)": "103",
        "2026년 4월 (103)": "103",
        "2026년 5월 (103)": "103",
        "2026년 6월 (103)": "103",
        "2026년 7월 (103)": "103"
    },
    "420": { // 목동
        "2025년 8월 (099)": "099",
        "2025년 9월 (100)": "100",
        "2025년 10월 (101)": "101",
        "2025년 11월 (102)": "102",
        "2025년 12월 (103)": "103",
        "2026년 1월 (104)": "104",
        "2026년 2월 (105)": "105",
        "2026년 3월 (106)": "106",
        "2026년 4월 (107)": "107",
        "2026년 5월 (108)": "108",
        "2026년 6월 (109)": "109",
        "2026년 7월 (110)": "110"
    },
    "450": { // 킨텍스
        "2025년 8월 (067)": "067",
        "2025년 9월 (068)": "068",
        "2025년 10월 (069)": "069",
        "2025년 11월 (070)": "070",
        "2025년 12월 (071)": "071",
        "2026년 1월 (072)": "072",
        "2026년 2월 (073)": "073",
        "2026년 3월 (074)": "074",
        "2026년 4월 (075)": "075",
        "2026년 5월 (076)": "076",
        "2026년 6월 (077)": "077",
        "2026년 7월 (078)": "078"
    },
    "480": { // 판교
        "2025년 8월 (047)": "047",
        "2025년 9월 (048)": "048",
        "2025년 10월 (049)": "049",
        "2025년 11월 (050)": "050",
        "2025년 12월 (051)": "051",
        "2026년 1월 (052)": "052",
        "2026년 2월 (053)": "053",
        "2026년 3월 (054)": "054",
        "2026년 4월 (055)": "055",
        "2026년 5월 (056)": "056",
        "2026년 6월 (057)": "057",
        "2026년 7월 (058)": "058"
    },
    "750": { // 가든
        "2025년 8월 (040)": "040",
        "2025년 9월 (041)": "041",
        "2025년 10월 (042)": "042",
        "2025년 11월 (043)": "043",
        "2025년 12월 (044)": "044",
        "2026년 1월 (045)": "045",
        "2026년 2월 (046)": "046",
        "2026년 3월 (047)": "047",
        "2026년 4월 (048)": "048",
        "2026년 5월 (049)": "049",
        "2026년 6월 (050)": "050",
        "2026년 7월 (051)": "051"
    },
    "290": { // 울산
        "2025년 8월 (116)": "116",
        "2025년 9월 (117)": "117",
        "2025년 10월 (118)": "118",
        "2025년 11월 (119)": "119",
        "2025년 12월 (120)": "120",
        "2026년 1월 (121)": "121",
        "2026년 2월 (122)": "122",
        "2026년 3월 (123)": "123",
        "2026년 4월 (124)": "124",
        "2026년 5월 (125)": "125",
        "2026년 6월 (126)": "126",
        "2026년 7월 (127)": "127"
    },
    "470": { // 충청
        "2025년 8월 (059)": "059",
        "2025년 9월 (060)": "060",
        "2025년 10월 (061)": "061",
        "2025년 11월 (062)": "062",
        "2025년 12월 (063)": "063",
        "2026년 1월 (064)": "064",
        "2026년 2월 (065)": "065",
        "2026년 3월 (066)": "066",
        "2026년 4월 (067)": "067",
        "2026년 5월 (068)": "068",
        "2026년 6월 (069)": "069",
        "2026년 7월 (070)": "070"
    },
    "240": { // 부산
        "2025년 8월 (154)": "154",
        "2025년 9월 (155)": "155",
        "2025년 10월 (156)": "156",
        "2025년 11월 (157)": "157",
        "2025년 12월 (158)": "158",
        "2026년 1월 (159)": "159",
        "2026년 2월 (160)": "160",
        "2026년 3월 (161)": "161",
        "2026년 4월 (162)": "162",
        "2026년 5월 (163)": "163",
        "2026년 6월 (164)": "164",
        "2026년 7월 (165)": "165"
    }
};

// --- 섹션 2: 검색 결과 페이지 링크 생성기 데이터 (CT010100_L.do / ct_01_01_00_01.do) ---
const BASE_URL_PC_SEARCH = "https://www.ehyundai.com/newCulture/CT/CT010100_L.do";
const BASE_URL_MOBILE_SEARCH = "https://www.ehyundai.com/mobile/culture/ct_01_01_00_01.do";

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

const CATEGORY_KEYWORDS = {
    "CH": {
        "on 라이브": "38",
        "파인다이닝": "35",
        "살롱 1985": "33",
        "키즈패밀리": "37",
        "클럽 웰니스": "29",
        "파워트레이닝": "30",
        "취향 커뮤니티": "32",
        "인문&아트살롱": "31"
    },
    "CT": {
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
    "CC": {
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

document.addEventListener('DOMContentLoaded', () => {
    // 섹션 1: 바로 신청 링크 관련 초기 설정
    populateDropdown('store_code_direct', STORE_CODES_DIRECT);
    
    // 섹션 3: 검색 링크 관련 초기 설정
    document.getElementById('base_url_search').value = BASE_URL_PC_SEARCH;
    populateDropdown('store_code_search', STORE_CODES_SEARCH);
    updateSearchKeywordOptions();
});

function populateDropdown(selectId, optionsMap) {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = '<option value="">-- 선택 --</option>';
    for (const [key, value] of Object.entries(optionsMap)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        selectElement.appendChild(option);
    }
}

// 점포 선택에 따라 기수 드롭다운 업데이트
function updateTermCodesByStore() {
    const selectedStoreCode = document.getElementById('store_code_direct').value;
    const termCodesForStore = STORE_TERM_CODES[selectedStoreCode] || {};
    populateDropdown('term_code_direct', termCodesForStore);

    const termManualInput = document.getElementById('term_code_manual_direct');
    if (termManualInput.style.display === 'block') {
        toggleTermInput('direct');
    }
}

// --- 섹션 1 함수들 (바로 신청 링크) ---

function toggleTermInput(section) {
    const termSelect = document.getElementById(`term_code_${section}`);
    const termManualInput = document.getElementById(`term_code_manual_${section}`);
    const toggleButton = termSelect.nextElementSibling;

    if (termSelect.style.display === 'none') {
        termSelect.style.display = 'block';
        termManualInput.style.display = 'none';
        termManualInput.value = '';
        toggleButton.textContent = '직접 입력/선택';
    } else {
        termSelect.style.display = 'none';
        termManualInput.style.display = 'block';
        termSelect.value = '';
        toggleButton.textContent = '드롭다운으로 선택';
    }
}

function generateDirectLink() {
    const storeCodeSelect = document.getElementById('store_code_direct');
    const termCodeSelect = document.getElementById('term_code_direct');
    const termCodeManualInput = document.getElementById('term_code_manual_direct');
    const courseNumber = document.getElementById('course_number_direct').value;

    let selectedStoreCode = storeCodeSelect.value;
    let selectedTermCode;

    if (termCodeSelect.style.display === 'none') {
        selectedTermCode = termCodeManualInput.value;
    } else {
        selectedTermCode = termCodeSelect.value;
    }

    if (!selectedStoreCode || !selectedTermCode || !courseNumber) {
        alert("강의 바로 신청 링크: 모든 필수 항목 (점포, 기수, 전단 번호)을 입력/선택해주세요!");
        return;
    }
    
    // PC 링크 생성
    const pcLink = `${BASE_URL_DIRECT_PC}?stCd=${selectedStoreCode}&sqCd=${selectedTermCode}&crsSqNo=${courseNumber}`;
    const generatedPcLinkElement = document.getElementById('generated_link_pc');
    generatedPcLinkElement.href = pcLink;
    generatedPcLinkElement.textContent = pcLink;

    // 웹 링크 생성 (모바일)
    const webLink = `${BASE_URL_DIRECT_WEB}?n=ACC-A01-002&stCd=${selectedStoreCode}&sqCd=${selectedTermCode}&crsSqNo=${courseNumber}`;
    const generatedWebLinkElement = document.getElementById('generated_link_web');
    generatedWebLinkElement.href = webLink;
    generatedWebLinkElement.textContent = webLink;

    // 앱 링크 생성
    const appLink = `${BASE_URL_DIRECT_APP}?n=ACC-A01-002&stCd=${selectedStoreCode}&sqCd=${selectedTermCode}&crsSqNo=${courseNumber}`;
    const generatedAppLinkElement = document.getElementById('generated_link_app');
    generatedAppLinkElement.href = appLink;
    generatedAppLinkElement.textContent = appLink;
}

// --- 섹션 2 함수 (앱카드 링크) ---
function generatePrismAppcardLink() {
    const appcardNumber = document.getElementById('appcard_number_prism').value;

    if (!appcardNumber) {
        alert("앱카드 번호를 입력해주세요!");
        return;
    }

    const fullLink = `${BASE_URL_DIRECT_APP}?w=${BASE_URL_APPCARD}?evntCrdCd=${appcardNumber}`;

    const generatedLinkElement = document.getElementById('generated_link_prism');
    generatedLinkElement.href = fullLink;
    generatedLinkElement.textContent = fullLink;
}

// --- 섹션 3 함수들 (검색 링크) ---
function updateBaseUrlSearch() {
    const deviceType = document.getElementById('device_type').value;
    const baseUrlInput = document.getElementById('base_url_search');
    if (deviceType === 'pc') {
        baseUrlInput.value = BASE_URL_PC_SEARCH;
    } else {
        baseUrlInput.value = BASE_URL_MOBILE_SEARCH;
    }
}

function updateSearchKeywordOptions() {
    const categoryType = document.getElementById('category_type').value;
    const keywordSearchTermSelect = document.getElementById('keyword_search_term');
    
    keywordSearchTermSelect.innerHTML = '<option value="">-- 전단 분류 선택 안함 --</option>';

    if (categoryType === 'none') {
        return;
    }

    const options = CATEGORY_KEYWORDS[categoryType];
    if (options) {
        for (const [key, value] of Object.entries(options)) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = `${key} (${value})`;
            keywordSearchTermSelect.appendChild(option);
        }
    }
}

function toggleSearchInputs() {
    const searchType = document.getElementById('search_type').value;
    const nicknameGroup = document.getElementById('nickname_search_group');
    const keywordGroup = document.getElementById('keyword_search_group');

    nicknameGroup.style.display = 'none';
    keywordGroup.style.display = 'none';

    if (searchType === 'nickname') {
        nicknameGroup.style.display = 'block';
    } else if (searchType === 'keyword') {
        keywordGroup.style.display = 'block';
        updateSearchKeywordOptions();
    }
}

function generateSearchLink() {
    const baseUrl = document.getElementById('base_url_search').value;
    const categoryType = document.getElementById('category_type').value;
    const storeCode = document.getElementById('store_code_search').value;
    const searchType = document.getElementById('search_type').value;
    const nicknameSearchTerm = document.getElementById('nickname_search_term').value;
    const keywordSearchTerm = document.getElementById('keyword_search_term').value;

    let params = [];

    if (categoryType !== 'none') {
        params.push(`ctGubn=${categoryType}`);
    }

    if (categoryType === 'none' || categoryType === 'CT') {
        if (storeCode && storeCode !== "ALL") {
             params.push(`stCd=${storeCode}`);
        } else if (storeCode === "ALL") {
            params.push(`stCd=ALL`);
        }
    }

    if (searchType === 'nickname' && nicknameSearchTerm) {
        params.push(`nickCrsNm=${encodeURIComponent(nicknameSearchTerm)}`);
    } else if (searchType === 'keyword' && keywordSearchTerm) {
        params.push(`keyword=${keywordSearchTerm}`);
    }

    let fullLink = baseUrl;
    if (params.length > 0) {
        fullLink += '?' + params.join('&');
    }

    const generatedLinkElement = document.getElementById('generated_link_search');
    generatedLinkElement.href = fullLink;
    generatedLinkElement.textContent = fullLink;
}

function copyLink(section) {
    const generatedLinkElement = document.getElementById(`generated_link_${section}`);
    const linkToCopy = generatedLinkElement.textContent;

    if (!linkToCopy) {
        alert("먼저 링크를 생성해주세요!");
        return;
    }

    navigator.clipboard.writeText(linkToCopy).then(() => {
        alert("링크가 클립보드에 복사되었습니다!");
    }).catch(err => {
        console.error('링크 복사 실패:', err);
        alert("링크 복사에 실패했습니다. 수동으로 복사해주세요.");
    });
}

function resetSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    // 입력 필드 초기화
    const inputs = section.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (input.type === 'text') {
            input.value = '';
        } else if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
        }
    });

    // 결과값 초기화
    const links = section.querySelectorAll('a[id^="generated_link_"]');
    links.forEach(link => {
        link.textContent = '';
        link.href = '#';
    });

    // 섹션별 초기 상태 복원
    if (sectionId === 'section-1') {
        const termManualInput = document.getElementById('term_code_manual_direct');
        if (termManualInput.style.display === 'block') {
            toggleTermInput('direct');
        }
    } else if (sectionId === 'section-2') {
        // 섹션 2는 초기화 시 특별히 할 작업이 없음
    } else if (sectionId === 'section-3') {
        document.getElementById('device_type').value = 'pc';
        updateBaseUrlSearch();
        document.getElementById('category_type').value = 'none';
        document.getElementById('store_code_search').value = 'ALL';
        document.getElementById('search_type').value = 'none';
        document.getElementById('nickname_search_group').style.display = 'none';
        document.getElementById('keyword_search_group').style.display = 'none';
    }
}
