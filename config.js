/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이한솔",
    nameEn: "임다솜",
    father: "김성만",
    mother: "박수경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "임다솜",
    nameEn: "이한솔",
    father: "임종호",
    mother: "사미선",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-14",
    time: "13:40",
    venue: "더컨벤션 송파문정점",
    hall: "13층 아모르홀",
    address: "서울특별시 송파구 송파대로 155",
    tel: "02-6418-5000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/167068900",
      naver: "https://naver.me/F884QRmt"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "함께 있을 때 가장 편안하고\n행복한 사람을 만났습니다.\n작은 인연이 결실을 맺어\n부부로서 첫발을 내딛습니다.\n\n바쁘시더라도 오셔서\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "중학교 시절 짝꿍이었던 두 꼬맹이가\n이제 인생의 동반자가 됩니다.\n\n서로의 꿈을 응원하며 자라온 저희가\n이제 하나가 되어 새로운 길을 걷고자 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이한솔", bank: "우리은행", number: "1002-061-933715" },
      { role: "아버지", name: "김성만", bank: "국민은행", number: "003-24-0281-596" },
      { role: "어머니", name: "박수경", bank: "우리은행", number: "729-321508-001" }
    ],
    bride: [
      { role: "신부", name: "임다솜", bank: "우리은행", number: "1002-745-002705" },
      { role: "아버지", name: "임종호", bank: "우리은행", number: "1002-256-521765" },
      { role: "어머니", name: "사미선", bank: "국민은행", number: "483902-01-220415" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "결혼식에 초대합니다",
    description: ""
  }
};
