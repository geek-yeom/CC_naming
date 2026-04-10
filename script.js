/**
 * 현대백화점 문화센터 링크 생성기 - JavaScript
 * 수정사항: ② 앱카드 페이지 링크 생성기 딥링크 파라미터 및 인코딩 구조 최적화
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

// 점포별 기수 코드 데이터 (26년~27년 체계)
const STORE_TERM_CODES = {
    "400": { "2026년 3월 (031)": "031", "2026년 4월 (032)": "032", "2026년 5월 (033)": "033", "2026년 6월 (034)": "034", "2026년 7월 (035)": "035", "2026년 8월 (036)": "036", "2026년 9월 (037)": "037", "2026년 10월 (038)": "038", "2026년 11월 (039)": "039", "2026년 12월 (040)": "040", "2027년 1월 (041)": "041", "2027년 2월 (042)": "042" },
    "210": { "2026년 3월 (171)": "171", "2026년 4월 (172)": "172", "2026년 5월 (173)": "173", "2026년 6월 (174)": "174", "2026년 7월 (175)": "175", "2026년 8월 (176)": "176", "2026년 9월 (177)": "177", "2026년 10월 (178)": "178", "2026년 11월 (179)": "179", "2026년 12월 (180)": "180" },
    "410": { "2026년 3월 (109)": "109", "2026년 4월 (110)": "110", "2026년 5월 (111)": "111", "2026년 6월 (112)": "112", "2026년 7월 (113)": "113", "2026년 8월 (114)": "114", "2026년 9월 (115)": "115", "2026년 10월 (116)": "116", "2026년 11월 (117)": "117", "2026년 12월 (118)": "118", "2027년 1월 (119)": "119", "2027년 2월 (120)": "120" },
    "420": { "2026년 3월 (105)": "105", "2026년 4월 (106)": "106", "2026년 5월 (107)": "107", "2026년 6월 (108)": "108", "2026년 7월 (109)": "109", "2026년 8월 (110)": "110", "2026년 9월 (111)": "111", "2026년 10월 (112)": "112", "2026년 11월 (113)": "113", "2026년 12월 (114)": "114", "2027년 1월 (115)": "115", "2027년 2월 (116)": "116" },
    "480": { "2026년 3월 (053)": "053", "2026년 4월 (054)": "054", "2026년 5월 (055)": "055", "2026년 6월 (056)": "056", "2026년 7월 (057)": "057", "2026년 8월 (058)": "058", "2026년 9월 (059)": "059", "2026년 10월 (060)": "060", "2026년 11월 (061)": "061", "2026년 12월 (062)": "062", "2027년 1월 (063)": "063", "2027년 2월 (064)": "064" },
    "220": { "2026년 3월 (161)": "161", "2026년 4월 (162)": "162", "2026년 5월 (163)": "163", "2026년 6월 (164)": "164", "2026년 7월 (165)": "165", "2026년 8월 (166)": "166", "2026년 9월 (167)": "167", "2026년 10월 (168)": "168" },
    "260": { "2026년 3월 (125)": "125", "2026년 4월 (126)": "126", "2026년 5월 (127)": "127", "2026년 6월 (128)": "128", "2026년 7월 (129)": "129", "2026년 8월 (130)": "130" },
    "270": { "2026년 3월 (121)": "121", "2026년 4월 (122)": "122", "2026년 5월 (123)": "123", "2026년 6월 (124)": "124", "2026년 7월 (125)": "125", "2026년 8월 (126)": "126" },
    "430": { "2026년 3월 (101)": "101", "2026년 4월 (102)": "102", "2026년 5월 (103)": "103", "2026년 6월 (104)": "104", "2026년 7월 (105)": "105" },
    "450": { "2026년 3월 (074)": "074", "2026년 4월 (075)": "075", "2026년 5월 (076)": "076", "2026년 6월 (077)": "077" },
    "470": { "2026년 3월 (066)": "066", "2026년 4월 (067)": "067", "2026년 5월 (068)": "068", "2026년 6월 (069)": "069" },
    "750": { "2026년 3월 (047)": "047", "2026년 4월 (048)": "048", "2026년 5월 (049)": "049", "2026년 6월 (050)": "050" },
    "460": { "2026년 3월 (069)": "069", "2026년 4월 (070)": "070", "2026년 5월 (071)": "071", "2026년 6월 (072)": "072" },
    "240": { "2026년 3월 (161)": "161", "2026년 4월 (162)": "162", "2026년 5월 (163)": "163", "2026년 6월 (164)": "164" },
    "290": { "2026년 3월 (123)": "123", "2026년 4월 (124)": "124", "2026년 5월 (125)": "125", "2026년 6월 (126)": "126" }
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
    // hdswallet://ehyundai.com?w=[Encoded_URL] 구조
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
    if (ctGubn !== 'none') params += `&ctGubn=${ctGubn}`;

    if (searchType === 'nickname') {
        const nickNm = document.getElementById('nickname_search_term').value;
        if (nickNm) params += `&nickCrsNm=${encodeURIComponent(nickNm)}`;
    } else if (searchType === 'keyword') {
        const keyword = document.getElementById('keyword_search_term').value;
        if (keyword) params += `&keyword=${keyword}`;
    }

    const finalLink = baseUrl + (baseUrl.includes('?') ? '&' : '?') + params;
    updateDisplay('generated_link_search', finalLink);
}

// 공통 유틸리티
function updateDisplay(id, url) {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = url;
        el.href = url;
    }
}

function copyLink(type) {
    const idMap = { 
        'pc':'generated_link_pc', 
        'mobile':'generated_link_mobile', 
        'web':'generated_link_web', 
        'app':'generated_link_app', 
        'prism':'generated_link_prism', 
        'search':'generated_link_search' 
    };
    const linkText = document.getElementById(idMap[type])?.innerText;

    if (!linkText || linkText === '#' || linkText === '') {
        alert("먼저 링크를 생성해주세요.");
        return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = linkText;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert("클립보드에 복사되었습니다.");
    } catch (err) {
        alert("복사 실패");
    }
    document.body.removeChild(textArea);
}

function resetSection(id) {
    const section = document.getElementById(id);
    section.querySelectorAll('input').forEach(i => i.value = '');
    section.querySelectorAll('a').forEach(a => { a.innerText = ''; a.href = '#'; });
    updateTermCodesByStore();
}