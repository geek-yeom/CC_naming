/**
 * 현대백화점 문화센터 링크 생성기 - JavaScript
 * 수정사항: 드롭다운 초기화 및 Event Listener 자동 바인딩 보완
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
    "400": { "2026년 9월 (037)": "037", "2026년 10월 (038)": "038", "2026년 11월 (039)": "039", "2026년 12월 (040)": "040", "2027년 1월 (041)": "041", "2027년 2월 (042)": "042", "2027년 3월 (043)": "043", "2027년 4월 (044)": "044" },
    "210": { "2026년 9월 (177)": "177", "2026년 10월 (178)": "178", "2026년 11월 (179)": "179", "2026년 12월 (180)": "180", "2027년 1월 (181)": "181", "2027년 2월 (182)": "182", "2027년 3월 (183)": "183", "2027년 4월 (184)": "184" },
    "410": { "2026년 9월 (115)": "115", "2026년 10월 (116)": "116", "2026년 11월 (117)": "117", "2026년 12월 (118)": "118", "2027년 1월 (119)": "119", "2027년 2월 (120)": "120", "2027년 3월 (121)": "121", "2027년 4월 (122)": "122" },
    "420": { "2026년 9월 (111)": "111", "2026년 10월 (112)": "112", "2026년 11월 (113)": "113", "2026년 12월 (114)": "114", "2027년 1월 (115)": "115", "2027년 2월 (116)": "116", "2027년 3월 (117)": "117", "2027년 4월 (118)": "118" },
    "480": { "2026년 9월 (059)": "059", "2026년 10월 (060)": "060", "2026년 11월 (061)": "061", "2026년 12월 (062)": "062", "2027년 1월 (063)": "063", "2027년 2월 (064)": "064", "2027년 3월 (065)": "065", "2027년 4월 (066)": "066" },
    "220": { "2026년 9월 (167)": "167", "2026년 10월 (168)": "168", "2026년 11월 (169)": "169", "2026년 12월 (170)": "170", "2027년 1월 (171)": "171", "2027년 2월 (172)": "172", "2027년 3월 (173)": "173", "2027년 4월 (174)": "174" },
    "260": { "2026년 9월 (131)": "131", "2026년 10월 (132)": "132", "2026년 11월 (133)": "133", "2026년 12월 (134)": "134", "2027년 1월 (135)": "135", "2027년 2월 (136)": "136", "2027년 3월 (137)": "137", "2027년 4월 (138)": "138" },
    "270": { "2026년 9월 (127)": "127", "2026년 10월 (128)": "128", "2026년 11월 (129)": "129", "2026년 12월 (130)": "130", "2027년 1월 (131)": "131", "2027년 2월 (132)": "132", "2027년 3월 (133)": "133", "2027년 4월 (134)": "134" },
    "430": { "2026년 9월 (107)": "107", "2026년 10월 (108)": "108", "2026년 11월 (109)": "109", "2026년 12월 (110)": "110", "2027년 1월 (111)": "111", "2027년 2월 (112)": "112", "2027년 3월 (113)": "113", "2027년 4월 (114)": "114" },
    "450": { "2026년 9월 (080)": "080", "2026년 10월 (081)": "081", "2026년 11월 (082)": "082", "2026년 12월 (083)": "083", "2027년 1월 (084)": "084", "2027년 2월 (085)": "085", "2027년 3월 (086)": "086", "2027년 4월 (087)": "087" },
    "470": { "2026년 9월 (072)": "072", "2026년 10월 (073)": "073", "2026년 11월 (074)": "074", "2026년 12월 (075)": "075", "2027년 1월 (076)": "076", "2027년 2월 (077)": "077", "2027년 3월 (078)": "078", "2027년 4월 (079)": "079" },
    "750": { "2026년 9월 (053)": "053", "2026년 10월 (054)": "054", "2026년 11월 (055)": "055", "2026년 12월 (056)": "056", "2027년 1월 (057)": "057", "2027년 2월 (058)": "058", "2027년 3월 (059)": "059", "2027년 4월 (060)": "060" },
    "460": { "2026년 9월 (075)": "075", "2026년 10월 (076)": "076", "2026년 11월 (077)": "077", "2026년 12월 (078)": "078", "2027년 1월 (079)": "079", "2027년 2월 (080)": "080", "2027년 3월 (081)": "081", "2027년 4월 (082)": "082" },
    "240": { "2026년 9월 (167)": "167", "2026년 10월 (168)": "168", "2026년 11월 (169)": "169", "2026년 12월 (170)": "170", "2027년 1월 (171)": "171", "2027년 2월 (172)": "172", "2027년 3월 (173)": "173", "2027년 4월 (174)": "174" },
    "290": { "2026년 9월 (129)": "129", "2026년 10월 (130)": "130", "2026년 11월 (131)": "131", "2026년 12월 (132)": "132", "2027년 1월 (133)": "133", "2027년 2월 (134)": "134", "2027년 3월 (135)": "135", "2027년 4월 (136)": "136" }
};

// 키워드 옵션 (검색 카테고리용)
const KEYWORD_OPTIONS = {
    "CT": { "전체": "", "영유아": "101", "아동": "102", "자기계발/교양": "103", "요리/감성디저트": "104", "공예/취미": "105", "사진/디지털": "106", "뷰티/라이프": "107", "헬스/댄스": "108", "음악/아트": "109", "재테크/여행": "110" },
    "CH": { "CH1985": "201" },
    "CC": { "커넥트": "301" }
};

// --- 초기화 로직 ---
document.addEventListener("DOMContentLoaded", function() {
    initializeStoreSelects();
    updateTermCodesByStore();
    
    // 점포 변경 시 기수 코드 변경 이벤트 직접 연결
    const directStoreSelect = document.getElementById('store_code_direct');
    if (directStoreSelect) {
        directStoreSelect.addEventListener('change', updateTermCodesByStore);
    }
});

function initializeStoreSelects() {
    const directSelect = document.getElementById('store_code_direct');
    const searchSelect = document.getElementById('store_code_search');

    if (directSelect) {
        directSelect.innerHTML = '';
        for (const [name, code] of Object.entries(STORE_CODES_DIRECT)) {
            directSelect.add(new Option(name, code));
        }
    }

    if (searchSelect) {
        searchSelect.innerHTML = '';
        searchSelect.add(new Option("전체 지점 (ALL)", "ALL"));
        for (const [name, code] of Object.entries(STORE_CODES_DIRECT)) {
            searchSelect.add(new Option(name, code));
        }
    }
}

function updateTermCodesByStore() {
    const directSelect = document.getElementById('store_code_direct');
    const termSelect = document.getElementById('term_code_direct');
    if (!directSelect || !termSelect) return;

    const storeCode = directSelect.value;
    termSelect.innerHTML = '';

    const terms = STORE_TERM_CODES[storeCode] || {};
    for (const [label, value] of Object.entries(terms)) {
        termSelect.add(new Option(label, value));
    }
}

function toggleTermInput(section) {
    const select = document.getElementById(`term_code_${section}`);
    const manualInput = document.getElementById(`term_code_manual_${section}`);
    if (!select || !manualInput) return;

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

    // ③ APP 링크
    const webBridgeParams = `n=ACC-A01-002&stCd=${stCd}&sqCd=${sqCd}&crsSqNo=${crsSqNo}`;
    const webBridgeLink = `${BASE_URL_DIRECT_WEB}?${webBridgeParams}`;
    updateDisplay('generated_link_web', webBridgeLink);

    // ④ 프리즘 '버튼' 링크
    const appDeepLink = `${BASE_URL_DIRECT_APP}?${webBridgeParams}`;
    updateDisplay('generated_link_app', appDeepLink);
}

// --- 2. 앱카드 페이지 링크 생성 로직 ---
function generatePrismAppcardLink() {
    const appcardNo = document.getElementById('appcard_number_prism').value;
    if (!appcardNo) {
        alert("앱카드 번호를 입력해주세요.");
        return;
    }
    
    const targetUrl = `${BASE_URL_APPCARD}?evntCrdCd=${appcardNo}`;
    const fullLink = `${BASE_URL_DIRECT_APP}?w=${encodeURIComponent(targetUrl)}`;
    
    updateDisplay('generated_link_prism', fullLink);
}

// --- 3. 검색 결과 페이지 링크 생성 로직 ---
function updateBaseUrlSearch() {
    const device = document.getElementById('device_type').value;
    const baseUrlInput = document.getElementById('base_url_search');
    if (!baseUrlInput) return;

    if (device === 'pc') {
        baseUrlInput.value = "https://www.ehyundai.com/newCulture/CT/CT010100_L.do";
    } else {
        baseUrlInput.value = "https://www.ehyundai.com/mobile/culture/ct_01_01_00_01.do";
    }
}

function updateSearchKeywordOptions() {
    const cat = document.getElementById('category_type').value;
    const keywordSelect = document.getElementById('keyword_search_term');
    if (!keywordSelect) return;

    keywordSelect.innerHTML = '<option value="">-- 전단 분류 선택 안함 --</option>';
    if (cat === 'none') return;

    const options = KEYWORD_OPTIONS[cat] || {};
    for (const [label, val] of Object.entries(options)) {
        keywordSelect.add(new Option(`${label} (${val})`, val));
    }
}

function toggleSearchInputs() {
    const type = document.getElementById('search_type').value;
    const nickGroup = document.getElementById('nickname_search_group');
    const keyGroup = document.getElementById('keyword_search_group');

    if (nickGroup) nickGroup.style.display = type === 'nickname' ? 'block' : 'none';
    if (keyGroup) keyGroup.style.display = type === 'keyword' ? 'block' : 'none';
}

function generateSearchLink() {
    const baseUrl = document.getElementById('base_url_search').value;
    const stCd = document.getElementById('store_code_search').value;
    const ctGubn = document.getElementById('category_type').value;
    const searchType = document.getElementById('search_type').value;
    
    let params = [];
    if (ctGubn !== 'none') params.push(`ctGubn=${ctGubn}`);
    if (stCd) params.push(`stCd=${stCd}`);

    if (searchType === 'nickname') {
        const nickNm = document.getElementById('nickname_search_term').value;
        if (nickNm) params.push(`nickCrsNm=${encodeURIComponent(nickNm)}`);
    } else if (searchType === 'keyword') {
        const keyword = document.getElementById('keyword_search_term').value;
        if (keyword) params.push(`keyword=${keyword}`);
    }

    const finalLink = baseUrl + (params.length > 0 ? '?' + params.join('&') : '');
    updateDisplay('generated_link_search', finalLink);
}

// 유틸리티
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

    navigator.clipboard.writeText(linkText).then(() => {
        alert("클립보드에 복사되었습니다.");
    }).catch(err => {
        alert("복사 실패");
    });
}

function resetSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.querySelectorAll('input').forEach(i => {
        if (i.type === 'text') i.value = '';
    });
    section.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
    section.querySelectorAll('a').forEach(a => { a.innerText = ''; a.href = '#'; });

    if (id === 'section-1') {
        const manualInput = document.getElementById('term_code_manual_direct');
        if (manualInput && manualInput.style.display === 'block') {
            toggleTermInput('direct');
        }
    }
    updateTermCodesByStore();
}