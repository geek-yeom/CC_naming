// --- 섹션 1: 강의 바로 신청 링크 생성기 데이터 (linkBridge.do) ---
const BASE_URL_DIRECT_PC = "https://www.ehyundai.com/newCulture/CT/CT010100_V.do";
const BASE_URL_DIRECT_MOBILE = "https://www.ehyundai.com/mobile/culture/ct_01_01_01_01.do";
const BASE_URL_DIRECT_WEB = "https://hdeapp.ehyundai.com/linkBridge.do";
const BASE_URL_DIRECT_APP = "hdswallet://ehyundai.com";
const BASE_URL_APPCARD = "https://hdeapp.ehyundai.com/shopping/view/ASI/A01/002/evntGdDetail";

// 점포 코드 데이터
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

// 점포별 기수 코드 데이터 (목동, 미아, 판교 최신 기수 체계 반영)
const STORE_TERM_CODES = {
    "400": { // 더현대서울
        "2026년 3월 (031)": "031", "2026년 4월 (032)": "032", "2026년 5월 (033)": "033",
        "2026년 6월 (034)": "034", "2026년 7월 (035)": "035", "2026년 8월 (036)": "036",
        "2026년 9월 (037)": "037", "2026년 10월 (038)": "038", "2026년 11월 (039)": "039",
        "2026년 12월 (040)": "040", "2027년 1월 (041)": "041", "2027년 2월 (042)": "042"
    },
    "210": { // 본점
        "2026년 3월 (171)": "171", "2026년 4월 (172)": "172", "2026년 5월 (173)": "173",
        "2026년 6월 (174)": "174", "2026년 7월 (175)": "175", "2026년 8월 (176)": "176",
        "2026년 9월 (177)": "177", "2026년 10월 (178)": "178", "2026년 11월 (179)": "179",
        "2026년 12월 (180)": "180"
    },
    "410": { // 미아 (수정: 26년 4월 110부터 시작)
        "2026년 3월 (109)": "109", "2026년 4월 (110)": "110", "2026년 5월 (111)": "111",
        "2026년 6월 (112)": "112", "2026년 7월 (113)": "113", "2026년 8월 (114)": "114",
        "2026년 9월 (115)": "115", "2026년 10월 (116)": "116", "2026년 11월 (117)": "117",
        "2026년 12월 (118)": "118", "2027년 1월 (119)": "119", "2027년 2월 (120)": "120"
    },
    "420": { // 목동 (수정: 26년 3월 105부터 시작)
        "2026년 3월 (105)": "105", "2026년 4월 (106)": "106", "2026년 5월 (107)": "107",
        "2026년 6월 (108)": "108", "2026년 7월 (109)": "109", "2026년 8월 (110)": "110",
        "2026년 9월 (111)": "111", "2026년 10월 (112)": "112", "2026년 11월 (113)": "113",
        "2026년 12월 (114)": "114", "2027년 1월 (115)": "115", "2027년 2월 (116)": "116"
    },
    "480": { // 판교 (수정: 26년 4월 054부터 시작)
        "2026년 3월 (053)": "053", "2026년 4월 (054)": "054", "2026년 5월 (055)": "055",
        "2026년 6월 (056)": "056", "2026년 7월 (057)": "057", "2026년 8월 (058)": "058",
        "2026년 9월 (059)": "059", "2026년 10월 (060)": "060", "2026년 11월 (061)": "061",
        "2026년 12월 (062)": "062", "2027년 1월 (063)": "063", "2027년 2월 (064)": "064"
    },
    "220": { // 무역
        "2026년 3월 (161)": "161", "2026년 4월 (162)": "162", "2026년 5월 (163)": "163",
        "2026년 6월 (164)": "164", "2026년 7월 (165)": "165", "2026년 8월 (166)": "166",
        "2026년 9월 (167)": "167", "2026년 10월 (168)": "168", "2026년 11월 (169)": "169",
        "2026년 12월 (170)": "170"
    },
    "260": { // 천호
        "2026년 3월 (125)": "125", "2026년 4월 (126)": "126", "2026년 5월 (127)": "127",
        "2026년 6월 (128)": "128", "2026년 7월 (129)": "129", "2026년 8월 (130)": "130",
        "2026년 9월 (131)": "131", "2026년 10월 (132)": "132", "2026년 11월 (133)": "133",
        "2026년 12월 (134)": "134"
    },
    "270": { // 신촌
        "2026년 3월 (121)": "121", "2026년 4월 (122)": "122", "2026년 5월 (123)": "123",
        "2026년 6월 (124)": "124", "2026년 7월 (125)": "125", "2026년 8월 (126)": "126",
        "2026년 9월 (127)": "127", "2026년 10월 (128)": "128", "2026년 11월 (129)": "129",
        "2026년 12월 (130)": "130"
    },
    "430": { // 중동
        "2026년 3월 (101)": "101", "2026년 4월 (102)": "102", "2026년 5월 (103)": "103",
        "2026년 6월 (104)": "104", "2026년 7월 (105)": "105", "2026년 8월 (106)": "106",
        "2026년 9월 (107)": "107", "2026년 10월 (108)": "108"
    },
    "450": { // 킨텍스
        "2026년 3월 (074)": "074", "2026년 4월 (075)": "075", "2026년 5월 (076)": "076",
        "2026년 6월 (077)": "077", "2026년 7월 (078)": "078", "2026년 8월 (079)": "079"
    },
    "470": { // 충청
        "2026년 3월 (066)": "066", "2026년 4월 (067)": "067", "2026년 5월 (068)": "068",
        "2026년 6월 (069)": "069", "2026년 7월 (070)": "070", "2026년 8월 (071)": "071"
    },
    "750": { // 가든
        "2026년 3월 (047)": "047", "2026년 4월 (048)": "048", "2026년 5월 (049)": "049",
        "2026년 6월 (050)": "050", "2026년 7월 (051)": "051", "2026년 8월 (052)": "052"
    },
    "460": { // 대구
        "2026년 3월 (069)": "069", "2026년 4월 (070)": "070", "2026년 5월 (071)": "071",
        "2026년 6월 (072)": "072", "2026년 7월 (073)": "073", "2026년 8월 (074)": "074"
    },
    "240": { // 부산
        "2026년 3월 (161)": "161", "2026년 4월 (162)": "162", "2026년 5월 (163)": "163",
        "2026년 6월 (164)": "164", "2026년 7월 (165)": "165", "2026년 8월 (166)": "166"
    },
    "290": { // 울산
        "2026년 3월 (123)": "123", "2026년 4월 (124)": "124", "2026년 5월 (125)": "125",
        "2026년 6월 (126)": "126", "2026년 7월 (127)": "127", "2026년 8월 (128)": "128"
    }
};

// --- 섹션 3: 검색 결과 페이지 데이터 ---
const KEYWORD_OPTIONS = {
    "CT": {
        "전체": "",
        "영유아": "101",
        "아동": "102",
        "자기계발/교양": "103",
        "요리/감성디저트": "104",
        "공예/취미": "105",
        "사진/디지털": "106",
        "뷰티/라이프": "107",
        "헬스/댄스": "108",
        "음악/아트": "109",
        "재테크/여행": "110",
        "선수강/외부": "111"
    },
    "CH": {
        "전체": "",
        "CH1985": "201"
    },
    "CC": {
        "전체": "",
        "커넥트": "301"
    }
};

// --- 공통 기능 및 초기화 ---

window.onload = function() {
    initializeStoreSelects();
    updateTermCodesByStore(); // 초기 점포에 따른 기수 코드 로드
    updateSearchKeywordOptions(); // 초기 카테고리에 따른 키워드 로드
};

function initializeStoreSelects() {
    const directSelect = document.getElementById('store_code_direct');
    const searchSelect = document.getElementById('store_code_search');

    for (const [name, code] of Object.entries(STORE_CODES_DIRECT)) {
        const option1 = new Option(name, code);
        const option2 = new Option(name, code);
        directSelect.add(option1);
        searchSelect.add(option2);
    }
}

// 점포 선택 시 기수 코드 업데이트
function updateTermCodesByStore() {
    const storeCode = document.getElementById('store_code_direct').value;
    const termSelect = document.getElementById('term_code_direct');
    termSelect.innerHTML = '';

    const terms = STORE_TERM_CODES[storeCode] || {};
    
    // 기본 선택지 (최신순이 좋으므로 그대로 추가하거나 역순 정렬 가능)
    for (const [label, value] of Object.entries(terms)) {
        termSelect.add(new Option(label, value));
    }
}

// 기수 직접 입력 토글
function toggleTermInput(section) {
    const select = document.getElementById(`term_code_${section}`);
    const manualInput = document.getElementById(`term_code_manual_${section}`);
    
    if (manualInput.style.display === 'none') {
        manualInput.style.display = 'block';
        select.disabled = true;
    } else {
        manualInput.style.display = 'none';
        select.disabled = false;
    }
}

// 초기화 함수
function resetSection(sectionId) {
    const section = document.getElementById(sectionId);
    const inputs = section.querySelectorAll('input');
    const selects = section.querySelectorAll('select');
    const links = section.querySelectorAll('a');

    inputs.forEach(input => input.value = '');
    selects.forEach(select => select.selectedIndex = 0);
    links.forEach(link => {
        link.innerText = '';
        link.href = '#';
    });

    // 수동 입력 창 숨기기 및 셀렉트 활성화
    const manualInputDirect = document.getElementById('term_code_manual_direct');
    if (manualInputDirect) {
        manualInputDirect.style.display = 'none';
        document.getElementById('term_code_direct').disabled = false;
    }
    
    updateTermCodesByStore();
}

// --- 링크 생성 로직 ---

function generateDirectLink() {
    const stCd = document.getElementById('store_code_direct').value;
    const termSelect = document.getElementById('term_code_direct');
    const manualInput = document.getElementById('term_code_manual_direct');
    
    // 기수 코드 결정
    const sqCd = manualInput.style.display === 'none' ? termSelect.value : manualInput.value;
    const crsSqNo = document.getElementById('course_number_direct').value;

    if (!crsSqNo) {
        alert("전단 번호를 입력해주세요.");
        return;
    }

    // 1. PC 링크
    const pcLink = `${BASE_URL_DIRECT_PC}?stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    document.getElementById('generated_link_pc').innerText = pcLink;
    document.getElementById('generated_link_pc').href = pcLink;

    // 2. 모바일 링크
    const mobileLink = `${BASE_URL_DIRECT_MOBILE}?stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    document.getElementById('generated_link_mobile').innerText = mobileLink;
    document.getElementById('generated_link_mobile').href = mobileLink;

    // 3. APP 링크 (hdswallet 프로토콜 또는 linkBridge 활용)
    const webBridgeLink = `${BASE_URL_DIRECT_WEB}?type=ct_crs&stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    document.getElementById('generated_link_web').innerText = webBridgeLink;
    document.getElementById('generated_link_web').href = webBridgeLink;

    // 4. 프리즘 전용 버튼 링크
    const appDeepLink = `${BASE_URL_DIRECT_APP}/mobile/culture/ct_01_01_01_01.do?stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    document.getElementById('generated_link_app').innerText = appDeepLink;
    document.getElementById('generated_link_app').href = appDeepLink;
}

function generatePrismAppcardLink() {
    const appcardNo = document.getElementById('appcard_number_prism').value;
    if (!appcardNo) {
        alert("앱카드 번호를 입력해주세요.");
        return;
    }
    const link = `${BASE_URL_APPCARD}/${appcardNo}`;
    document.getElementById('generated_link_prism').innerText = link;
    document.getElementById('generated_link_prism').href = link;
}

function generateSearchLink() {
    const baseUrl = document.getElementById('base_url_search').value;
    const stCd = document.getElementById('store_code_search').value;
    const ctGubn = document.getElementById('category_type').value;
    const searchType = document.getElementById('search_type').value;
    
    let queryParams = `?stCd=${stCd}`;
    if (ctGubn !== 'none') queryParams += `&ctGubn=${ctGubn}`;

    if (searchType === 'nickname') {
        const nickNm = document.getElementById('nickname_search_term').value;
        if (nickNm) queryParams += `&nickCrsNm=${encodeURIComponent(nickNm)}`;
    } else if (searchType === 'keyword') {
        const keyword = document.getElementById('keyword_search_term').value;
        if (keyword) queryParams += `&keyword=${keyword}`;
    }

    const finalLink = baseUrl + queryParams;
    document.getElementById('generated_link_search').innerText = finalLink;
    document.getElementById('generated_link_search').href = finalLink;
}

// --- 부가 UI 로직 ---

function updateBaseUrlSearch() {
    const device = document.getElementById('device_type').value;
    const input = document.getElementById('base_url_search');
    if (device === 'pc') {
        input.value = "https://www.ehyundai.com/newCulture/CT/CT010100_L.do";
    } else {
        input.value = "https://www.ehyundai.com/mobile/culture/ct_01_01_01.do";
    }
}

function updateSearchKeywordOptions() {
    const cat = document.getElementById('category_type').value;
    const keywordSelect = document.getElementById('keyword_search_term');
    keywordSelect.innerHTML = '';
    
    if (cat === 'none') return;
    
    const options = KEYWORD_OPTIONS[cat] || {};
    for (const [label, val] of Object.entries(options)) {
        keywordSelect.add(new Option(label, val));
    }
}

function toggleSearchInputs() {
    const type = document.getElementById('search_type').value;
    document.getElementById('nickname_search_group').style.display = type === 'nickname' ? 'block' : 'none';
    document.getElementById('keyword_search_group').style.display = type === 'keyword' ? 'block' : 'none';
}

// 클립보드 복사 함수
function copyLink(type) {
    let linkText = "";
    if (type === 'pc') linkText = document.getElementById('generated_link_pc').innerText;
    else if (type === 'mobile') linkText = document.getElementById('generated_link_mobile').innerText;
    else if (type === 'web') linkText = document.getElementById('generated_link_web').innerText;
    else if (type === 'app') linkText = document.getElementById('generated_link_app').innerText;
    else if (type === 'prism') linkText = document.getElementById('generated_link_prism').innerText;
    else if (type === 'search') linkText = document.getElementById('generated_link_search').innerText;

    if (!linkText || linkText === '#') {
        alert("먼저 링크를 생성해주세요.");
        return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = linkText;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert("링크가 클립보드에 복사되었습니다.");
    } catch (err) {
        alert("복사 실패: " + err);
    }
    document.body.removeChild(textArea);
}