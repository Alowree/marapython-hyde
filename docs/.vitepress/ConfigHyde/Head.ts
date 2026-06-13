import { HeadConfig } from "vitepress";

const description = [
  "欢迎来到 MaraPython 🎉",
  "MaraPython 是一个基于 VitePress 框架 Teek 构建的主题，一个简洁、高效、易用的文档和博客写作工具",
  "轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();

const share: HeadConfig[] = [
  // 页面标题（分享时显示的标题）
  ["meta", { property: "og:title", content: "MaraPython" }],
  // 页面类型（网站类型，如 article、website）
  ["meta", { property: "og:type", content: "website" }],
  // 页面 URL（分享的原始链接，建议使用绝对地址）
  ["meta", { property: "og:url", content: "https://marapython.com/" }],
  // 描述信息（已配置，可保留）
  ["meta", { property: "og:description", content: "个人博客，记我所想" }],
  // 分享图片（已配置，建议图片尺寸为 1200x630px，提升展示效果）
  [
    "meta",
    {
      property: "og:image",
      // content: "https://marapython.com/avatar/avatar.jpg",
      content: "/avatar/avatar.jpg",
    },
  ],
  // 图片备选尺寸（可选，帮助平台识别图片）
  ["meta", { property: "og:image:width", content: "1200" }],
  ["meta", { property: "og:image:height", content: "630" }],
  // 网站名称（分享时显示的站点名称）
  ["meta", { property: "og:site_name", content: "博客" }],
];

const weChatShare: HeadConfig[] = [
  // 微信分享标题（优先级高于 og:title）
  ["meta", { name: "wechat-share-title", content: "威威 Blog" }],
  // 微信分享描述（优先级高于 og:description）
  ["meta", { name: "wechat-share-desc", content: "个人博客，全栈分享" }],
  // 微信分享图片（优先级高于 og:image）
  [
    "meta",
    {
      name: "wechat-share-img",
      // content: "https://marapython.com/avatar/avatar.jpg",
      content: "/avatar/avatar.jpg",
    },
  ],
];

// 导出head.ts
export const HeadData = [
  // 添加 51.la 统计脚本
  [
    "script",
    {
      charset: "UTF-8",
      id: "LA_COLLECT",
      src: "//sdk.51.la/js-sdk-pro.min.js",
    },
  ],
  // 灵雀应用监控平台
  [
    "script",
    {
      src: "https://sdk.51.la/perf/js-sdk-perf.min.js",
      crossorigin: "anonymous",
    },
  ],
  // 初始化灵雀监控脚本
  [
    "script",
    {},
    `
      new LingQue.Monitor().init({id:"3NwCrFSvL11gZEK6",sendSpaPv:true});
    `,
  ],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }], //不蒜子统计
  [
    "meta",
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    },
  ],
  ["meta", { name: "description", description }],
  ["meta", { name: "keywords", description }],
  ["meta", { name: "baidu-site-verification", content: "codeva-QnY1Xh758j" }], // 百度收录
  [
    "meta",
    { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" },
  ], // Bing 收录验证
  ["meta", { name: "algolia-site-verification", content: "E29EEBB136FD597D" }], // Algolia 站点验证 2026-06-12 marapython.com
  [
    "meta",
    {
      property: "og:description",
      content: "Do What You Love; Love What You Do",
    },
  ],
  [
    "meta",
    {
      property: "og:image",
      content: "https://marapython.com/avatar/avatar.jpg",
    },
  ],
  // 图标
  ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  // 作者信息
  ["meta", { name: "author", content: "Alowree" }],
  // 版权声明
  [
    "meta",
    { name: "copyright", content: "© 2026 MaraPython. All Rights Reserved." },
  ],
  // 规范网址，告诉搜索引擎站点的首选域名
  // remove hardcoded canonical URL that pointed all pages to homepage
  // ["link", { rel: "canonical", href: "https://marapython.com/" }],
  // Android 添加到主屏幕
  ["meta", { name: "application-name", content: "MaraPython" }],
  // 站点的索引策略，index:允许索引；follow:允许跟踪链接
  ["meta", { name: "robots", content: "index, follow" }],
  // 移动设备适配声明，向搜索引擎明确站点对移动设备友好
  [
    "meta",
    {
      name: "mobile-agent",
      content: "format=html5; url=https://marapython.com/",
    },
  ],
  // 防点击劫持，禁止其他网站通过 iframe 嵌入你的站点
  ["meta", { httpEquiv: "X-Frame-Options", content: "DENY" }],
  // 防 MIME 类型嗅探，阻止浏览器猜测资源类型，避免恶意文件执行
  ["meta", { httpEquiv: "X-Content-Type-Options", content: "nosniff" }],
  // 引荐来源策略
  ["meta", { name: "referrer", content: "strict-origin-when-cross-origin" }],
  // 声明适配深色模式
  ["meta", { name: "color-scheme", content: "light dark" }],
  // 站点语言
  ["meta", { httpEquiv: "Content-Language", content: "zh-CN" }],

  // 阿里在线矢量库
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2989306_w303erbip9.css",
    },
  ],
  [
    // 阿里图标库symbol 引用
    "script",
    {
      src: "https://at.alicdn.com/t/c/font_4899452_xj7acblxpxj.js",
      media: "print",
      onload: "this.media='all'",
    },
  ],
  // umami统计
  [
    "script",
    {
      src: "https://umami.marapython.com/script.js",
      "data-website-id": "4508c10d-79fd-4b94-bc06-590a4dc6d598",
      defer: "defer",
    },
  ],
  ...share,
  ...weChatShare,
  [
    "noscript",
    {},
    '<meta http-equiv="refresh" content="0; url={https://www.baidu.com/}">',
  ], // 禁用js跳转
  [
    "script",
    { type: "application/ld+json" },
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Marketing Analytics with Python",
      url: "https://marapython.com/",
      author: {
        "@type": "Person",
        name: "Alowree",
      },
      keywords: ["博客", "前端", "后端", "vitepress"],
      description: "个人博客，全栈分享",
      image: "https://marapython.com/avatar/avatar.jpg",
      publisher: {
        "@type": "Person",
        name: "Alowree",
      },
    }),
  ],
  //免费的音乐播放器
  // [
  //   "script",
  //   {
  //     type: "text/javascript",
  //     src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
  //     defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
  //   },
  // ], // 插入自定义脚本
  // [
  //   "script",
  //   {
  //     type: "text/javascript",
  //     id: "myhk",
  //     src: "https://myhkw.cn/api/player/174131850675",
  //     key: "174131850675",
  //     m: "",
  //     defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
  //   },
  // ],
];
