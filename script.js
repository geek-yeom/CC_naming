/**
 * 현대백화점 문화센터 링크 생성기 - JavaScript
 * 수정사항: 2026년 8월 이전 삭제 및 2026년 9월 ~ 2027년 4월 기수 코드 확장 반영
 */

// --- 설정 데이터 ---
const BASE_URL_DIRECT_PC = "https://www.ehyundai.com/newCulture/CT/CT010100_V.do";
const BASE_URL_DIRECT_MOBILE = "https://www.ehyundai.com/mobile/culture/ct_01_01_01_01.do";
const BASE_URL_DIRECT_WEB = "https://hdeapp.ehyundai.com/linkBridge.do"; // 앱 브릿지
const BASE_URL_DIRECT_APP = "hdswallet://ehyundai.com"; // 앱 딥링크 프로토콜
const BASE_URL_APPCARD = "https://hdeapp.ehyundai.com/shopping/view/ASI/A01/002/evntGdDetail";

// 점포 코드 데이터
const STORE_CODES_DIRECT = {
    "더현대서울": "400", "본점": "210", "무역": "220", "천호": "260", "신촌": "270",
    "미아": "410", "목동": "420", "중동": "430", "킨텍스": "450", "충청": "470",
    "판교": "480", "가든": "750", "대구": "460", "부산": "240", "울산": "290"
};

// 점포별 기수 코드 데이터 (2026년 9월 ~ 2027년 4월)
const STORE_TERM_CODES = {
    "400": { // 더현대서울
        "2026년 9월 (037)": "037", "2026년 10월 (038)": "038", "2026년 11월 (039)": "039", "2026년 12월 (040)": "040",
        "2027년 1월 (041)": "041", "2027년 2월 (042)": "042", "2027년 3월 (043)": "043", "2027년 4월 (044)": "044"
    },
    "210": { // 본점
        "2026년 9월 (177)": "177", "2026년 10월 (178)": "178", "2026년 11월 (179)": "179", "2026년 12월 (180)": "180",
        "2027년 1월 (181)": "181", "2027년 2월 (182)": "182", "2027년 3월 (183)": "183", "2027년 4월 (184)": "184"
    },
    "410": { // 미아 (26년 4월 110~ 패턴)
        "2026년 9월 (115)": "115", "2026년 10월 (116)": "116", "2026년 11월 (117)": "117", "2026년 12월 (118)": "118",
        "2027년 1월 (119)": "119", "2027년 2월 (120)": "120", "2027년 3월 (121)": "121", "2027년 4월 (122)": "122"
    },
    "420": { // 목동 (26년 3월 105~ 패턴)
        "2026년 9월 (111)": "111", "2026년 10월 (112)": "112", "2026년 11월 (113)": "113", "2026년 12월 (114)": "114",
        "2027년 1월 (115)": "115", "2027년 2월 (116)": "116", "2027년 3월 (117)": "117", "2027년 4월 (118)": "118"
    },
    "480": { // 판교 (26년 4월 054~ 패턴)
        "2026년 9월 (059)": "059", "2026년 10월 (060)": "060", "2026년 11월 (061)": "061", "2026년 12월 (062)": "062",
        "2027년 1월 (063)": "063", "2027년 2월 (064)": "064", "2027년 3월 (065)": "065", "2027년 4월 (066)": "066"
    },
    "220": { // 무역
        "2026년 9월 (167)": "167", "2026년 10월 (168)": "168", "2026년 11월 (169)": "169", "2026년 12월 (170)": "170",
        "2027년 1월 (171)": "171", "2027년 2월 (172)": "172", "2027년 3월 (173)": "173", "2027년 4월 (174)": "174"
    },
    "260": { // 천호
        "2026년 9월 (131)": "131", "2026년 10월 (132)": "132", "2026년 11월 (133)": "133", "2026년 12월 (134)": "134",
        "2027년 1월 (135)": "135", "2027년 2월 (136)": "136", "2027년 3월 (137)": "137", "2027년 4월 (138)": "138"
    },
    "270": { // 신촌
        "2026년 9월 (127)": "127", "2026년 10월 (128)": "128", "2026년 11월 (129)": "129", "2026년 12월 (130)": "130",
        "2027년 1월 (131)": "131", "2027년 2월 (132)": "132", "2027년 3월 (133)": "133", "2027년 4월 (134)": "134"
    },
    "430": { // 중동
        "2026년 9월 (107)": "107", "2026년 10월 (108)": "108", "2026년 11월 (109)": "109", "2026년 12월 (110)": "110",
        "2027년 1월 (111)": "111", "2027년 2월 (112)": "112", "2027년 3월 (113)": "113", "2027년 4월 (114)": "114"
    },
    "450": { // 킨텍스
        "2026년 9월 (080)": "080", "2026년 10월 (081)": "081", "2026년 11월 (082)": "082", "2026년 12월 (083)": "083",
        "2027년 1월 (084)": "084", "2027년 2월 (085)": "085", "2027년 3월 (086)": "086", "2027년 4월 (087)": "087"
    },
    "470": { // 충청
        "2026년 9월 (072)": "072", "2026년 10월 (073)": "073", "2026년 11월 (074)": "074", "2026년 12월 (075)": "075",
        "2027년 1월 (076)": "076", "2027년 2월 (077)": "077", "2027년 3월 (078)": "078", "2027년 4월 (079)": "079"
    },
    "750": { // 가든
        "2026년 9월 (053)": "053", "2026년 10월 (054)": "054", "2026년 11월 (055)": "055", "2026년 12월 (056)": "056",
        "2027년 1월 (057)": "057", "2027년 2월 (058)": "058", "2027년 3월 (059)": "059", "2027년 4월 (060)": "060"
    },
    "460": { // 대구
        "2026년 9월 (075)": "075", "2026년 10월 (076)": "076", "2026년 11월 (077)": "077", "2026년 12월 (078)": "078",
        "2027년 1월 (079)": "079", "2027년 2월 (080)": "080", "2027년 3월 (081)": "081", "2027년 4월 (082)": "082"
    },
    "240": { // 부산
        "2026년 9월 (167)": "167", "2026년 10월 (168)": "168", "2026년 11월 (169)": "169", "2026년 12월 (170)": "170",
        "2027년 1월 (171)": "171", "2027년 2월 (172)": "172", "2027년 3월 (173)": "173", "2027년 4월 (174)": "174"
    },
    "290": { // 울산
        "2026년 9월 (129)": "129", "2026년 10월 (130)": "130", "2026년 11월 (131)": "131", "2026년 12월 (132)": "132",
        "2027년 1월 (133)": "133", "2027년 2월 (134)": "134", "2027년 3월 (135)": "135", "2027년 4월 (136)": "136"
    }
};

// --- 초기화 함수 ---
window.onload = function() {
    initializeStoreSelects();
    updateTermCodesByStore();
};

function initializeStoreSelects() {
    const directSelect = document.getElementById('store_code_direct');
    const searchSelect = document.getElementById('store_code_search');
    if (!directSelect || !searchSelect) return;

    for (const [name, code] of Object.entries(STORE_CODES_DIRECT)) {
        directSelect.add(new Option(name, code));
        searchSelect.add(new Option(name, code));
    }
}

function updateTermCodesByStore() {
    const storeCode = document.getElementById('store_code_direct').value;
    const termSelect = document.getElementById('term_code_direct');
    if (!termSelect) return;
    termSelect.innerHTML = '';

    const terms = STORE_TERM_CODES[storeCode] || {};
    for (const [label, value] of Object.entries(terms)) {
        termSelect.add(new Option(label, value));
    }
}

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

// --- 1. 강의 링크 생성 로직 ---
function generateDirectLink() {
    const stCd = document.getElementById('store_code_direct').value;
    const termSelect = document.getElementById('term_code_direct');
    const manualInput = document.getElementById('term_code_manual_direct');
    const sqCd = manualInput.style.display === 'none' ? termSelect.value : manualInput.value;
    const crsSqNo = document.getElementById('course_number_direct').value;

    if (!crsSqNo) {
        alert("전단 번호를 입력해주세요.");
        return;
    }

    // ① PC 링크
    const pcLink = `${BASE_URL_DIRECT_PC}?stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    updateDisplay('generated_link_pc', pcLink);

    // ② 모바일 링크
    const mobileLink = `${BASE_URL_DIRECT_MOBILE}?stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    updateDisplay('generated_link_mobile', mobileLink);

    // ③ APP 링크 (Web Bridge 활용)
    const webBridgeParams = `n=ACC-A01-002&stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    const webBridgeLink = `${BASE_URL_DIRECT_WEB}?${webBridgeParams}`;
    updateDisplay('generated_link_web', webBridgeLink);

    // ④ 프리즘 '버튼' 링크 (Deep Link 프로토콜 활용)
    const appDeepLink = `${BASE_URL_DIRECT_APP}?${webBridgeParams}`;
    updateDisplay('generated_link_app', appDeepLink);
}

// --- 2. 앱카드 페이지 링크 생성 로직 (프리즘) ---
function generatePrismAppcardLink() {
    const appcardNo = document.getElementById('appcard_number_prism').value;
    if (!appcardNo) {
        alert("앱카드 번호를 입력해주세요.");
        return;
    }
    
    // 앱카드 상세 페이지 URL 구성 (순수 웹 URL)
    const targetUrl = `${BASE_URL_APPCARD}?evntCrdCd=${appcardNo}`;
    
    // 프리즘 앱 내부 웹뷰를 호출하기 위해 전체 URL을 'w' 파라미터에 담아 인코딩
    const fullLink = `${BASE_URL_DIRECT_APP}?w=${encodeURIComponent(targetUrl)}`;
    
    updateDisplay('generated_link_prism', fullLink);
}

// --- 3. 검색 결과 페이지 링크 생성 로직 ---
function generateSearchLink() {
    const baseUrl = document.getElementById('base_url_search').value;
    const stCd = document.getElementById('store_code_search').value;
    const ctGubn = document.getElementById('category_type').value;
    const searchType = document.getElementById('search_type').value;
    
    let params = `stCd=${stCd}`;
    if (ctGubn