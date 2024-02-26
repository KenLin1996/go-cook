import gojyo from "./picture/gojyo.jpeg";
import geto from "./picture/geto.jpeg";
import kid from "./picture/kid.jpeg";
import director from "./picture/director.png";

const recipes = [
  {
    id: "111",
    title: "清炒高麗菜",
    category: "17",
    picture:
      "https://img-global.cpcdn.com/recipes/ab6f71303b661abf/1360x964cq70/%E6%B8%85%E7%82%92%E9%AB%98%E9%BA%97%E8%8F%9C-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",

    ingredients: ["高麗菜", "紅蘿蔔", "蒜"],
    time: "15 分鐘",
    servings: "3 人份",
    author: "五條悟",
    headshot: gojyo,
    steps: [
      {
        id: 1,
        name: "步驟一",
        content:
          "熱油鍋，下大蒜，先炒紅蘿蔔絲，再下高麗菜，加一點水，蓋鍋蓋悶熟，加鹽，翻炒一下即可上菜。",
        images: [
          "https://img-global.cpcdn.com/steps/76f8c1a4018657b6/320x256cq70/%E6%B8%85%E7%82%92%E9%AB%98%E9%BA%97%E8%8F%9C-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/1f46aac3f1df0b75/320x256cq70/%E6%B8%85%E7%82%92%E9%AB%98%E9%BA%97%E8%8F%9C-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/84d86f33dffd8e69/320x256cq70/%E6%B8%85%E7%82%92%E9%AB%98%E9%BA%97%E8%8F%9C-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
        ],
      },
    ],
  },
  {
    id: "222",
    title: "高麗菜捲",
    category: "17",
    picture:
      "https://img-global.cpcdn.com/recipes/a772124ca805a06c/1360x964cq70/%E9%AB%98%E9%BA%97%E8%8F%9C%E6%8D%B2-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",

    ingredients: [
      "高麗菜葉 8-9 片",
      "義大利麵 5 條",
      "豬絞肉 300 克",
      "鹽 1 小匙",
      "白胡椒粉 少許",
      "燕麥片 1/2 杯",
      "洋蔥 (切丁) 1/2 個",
    ],
    time: "30 分鐘",
    servings: "1 人份",
    author: "夏油傑",
    headshot: geto,
    steps: [
      {
        id: 3,
        name: "步驟一",
        content:
          "先用刀子切斷葉片與根部的連結，小心將高麗菜葉撥出來。取決於葉片的大小，此食譜的肉餡可做約8~9個高麗菜捲。 (註) 外側的葉片較大片，用來作高麗菜捲較合適。",
        images: [
          "https://img-global.cpcdn.com/steps/df561be58e6e875b/320x256cq70/%E9%AB%98%E9%BA%97%E8%8F%9C%E6%8D%B2-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
        ],
      },
      {
        id: 4,
        name: "步驟二",
        content:
          "燒一小鍋水，將每片高麗菜葉燙 60-80秒至軟。用筷子輕壓葉片，確定整片高麗菜葉都接觸到熱水。",
        images: [
          "https://img-global.cpcdn.com/steps/8036d63aabc4665a/320x256cq70/%E9%AB%98%E9%BA%97%E8%8F%9C%E6%8D%B2-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-2-%E7%85%A7%E7%89%87.webp",
        ],
      },
      {
        id: 5,
        name: "步驟三",
        content: "用刀子將高麗菜葉中心凸起的硬梗片走。",
        images: [
          "https://img-global.cpcdn.com/steps/6fc65dc499e61ff5/320x256cq70/%E9%AB%98%E9%BA%97%E8%8F%9C%E6%8D%B2-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-3-%E7%85%A7%E7%89%87.webp",
        ],
      },
    ],
  },
  {
    // 範例連結: https://cookpad.com/tw/%E9%A3%9F%E8%AD%9C/17161024-%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8?ref=search&search_term=%E9%9B%9E%E8%83%B8%E8%82%89
    id: "333",
    title: "醜豆炒雞胸肉",
    category: "21",
    picture:
      "https://img-global.cpcdn.com/recipes/fef9ed9d53dd0e3f/1360x964cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
    ingredients: [
      "醜豆 300 g",
      "雞胸 1 塊",
      "蒜頭 2 瓣",
      "辣椒 半根",
      "醬油 0.5湯匙",
      "黑胡椒粉 少許",
      "玉米粉 1.5 匙",
      "香油 少許",
      "醬油 0.5 湯匙",
    ],
    time: "30 分鐘",
    servings: "4 人份",
    author: "野原新之助",
    headshot: kid,
    steps: [
      {
        id: 3,
        name: "步驟一",
        content:
          "雞胸切調，用醃料抓勻；醜豆洗淨斜切；蒜頭拍扁去皮切片；辣椒斜切；鍋熱下油，放雞胸肉和蒜頭；煎炒上色；",
        images: [
          "https://img-global.cpcdn.com/steps/7f0733e9ba64bba1/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/c1c47e0988ba9388/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/da75623814c74ece/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
        ],
      },
      {
        id: 4,
        name: "步驟二",
        content: "放入醜豆；加半湯匙醬油，拌炒到醜豆變色，加2～3湯匙的水；",
        images: [
          "https://img-global.cpcdn.com/steps/bb880e83c5b7808f/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-2-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/f8719109b16bb945/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-2-%E7%85%A7%E7%89%87.webp",
        ],
      },
      {
        id: 5,
        name: "步驟三",
        content: "蓋鍋蓋燜煮2分鐘；試味道微調，下辣椒拌勻即可。",
        images: [
          "https://img-global.cpcdn.com/steps/33ea589410d0abb6/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-3-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/f39747c7d8bdcde9/320x256cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-3-%E7%85%A7%E7%89%87.webp",
        ],
      },
    ],
  },
  {
    // 範例連結: https://cookpad.com/tw/%E9%A3%9F%E8%AD%9C/15224727-%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89?ref=search&search_term=%E9%9B%9E%E8%83%B8%E8%82%89
    id: "444",
    title: "蒜味雞胸肉",
    category: "21",
    picture:
      "https://img-global.cpcdn.com/recipes/17af24581d8d0604/1360x964cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
    ingredients: ["雞肉胸肉 3 片", "蒜蓉 3 大匙", "鹽 2 大匙", "橄欖油 1 大匙"],
    time: " 30 分鐘",
    servings: "3 人份",
    author: "園長先生",
    headshot: director,
    steps: [
      {
        id: 6,
        name: "步驟一",
        content:
          "雞肉洗凈後，用濃鹽水浸泡1小時（200ml的水加入2大匙鹽）浸泡。鍋中加入橄欖油放入雞胸肉煎，靜置三分鐘待雞肉變色",
        images: [
          "https://img-global.cpcdn.com/steps/0edc5ce3b8d64f3a/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/693e6ad58edf6e88/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/843eac30af0fcde9/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-1-%E7%85%A7%E7%89%87.webp",
        ],
      },
      {
        id: 7,
        name: "步驟二",
        content: "翻面煎至金黃色後，加入蒜蓉翻勻",
        images: [
          "https://img-global.cpcdn.com/steps/0b700f46949af07f/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-2-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/02cef708e8a4b4fe/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-2-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/0220f123d5f24677/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-2-%E7%85%A7%E7%89%87.webp",
        ],
      },
      {
        id: 8,
        name: "步驟三",
        content: "即可 熄火了 蓋上鍋蓋悶20分鐘 取出切片食用",
        images: [
          "https://img-global.cpcdn.com/steps/eea38f29c573a61f/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-3-%E7%85%A7%E7%89%87.webp",
          "https://img-global.cpcdn.com/steps/79e27ff93d97888c/320x256cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%AD%A5%E9%A9%9F-3-%E7%85%A7%E7%89%87.webp",
        ],
      },
    ],
  },
];

export default recipes;
