import { isEmpty } from "../theme/utils/WwUtils";
import type { DefaultTheme } from "vitepress/theme";

function getNav(text: string, svgPath: string | null) {
  let imgTemplate = "";
  if (!isEmpty(svgPath)) {
    imgTemplate = `<img src="${svgPath}" alt="" style="width: 16px; height: 16px;">`;
  }

  return `
            <div style="display: flex; align-items: center; gap: 4px;">
             ${imgTemplate}
              <span>${text}</span>
            </div>
            `;
}

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: "🏡首页", link: "/",
  },
  {
    text: "📖笔记专栏",
    items: [
      {
        text: getNav("Teek主题", "/svg/NavIcon/teek-logo-mini.svg"),
        link: "/Teek",
      },
      {
        text: getNav("Firefly主题", "/svg/NavIcon/teek-logo-mini.svg"),
        link: "/Firefly",
      },
      {
        text: getNav(
          "VitePress",
          "https://vitepress.dev/vitepress-logo-large.svg"
        ),
        link: "/VitePress",
      },
      {
        text: getNav(
          "Vdoing主题",
          "https://vuepress.vuejs.org/images/hero.png"
        ),
        link: "/Vdoing",
      },
      {
        text: getNav(
          "Docusaurus主题",
          "https://www.docusaurus.cn/img/docusaurus_keytar.png"
        ),
        link: "/Docusaurus",
      },
      {
        text: getNav("博客搭建", "/svg/NavIcon/Blog.svg"),
        link: "/Blog",
      }
    ],
  },
  {
    text: "🧰工具资源", // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: getNav("Linux", "/svg/NavIcon/linux.svg"),
        link: "/Linux",
      },
      {
        text: getNav("Nginx", "/svg/NavIcon/nginx.svg"),
        link: "/Nginx",
      },
      {
        text: getNav("Git", "/svg/NavIcon/git.svg"),
        link: "/Git",
      },
      {
        text: getNav("Docker", "/svg/NavIcon/docker.svg"),
        link: "/Docker",
      },
      {
        text: getNav("实用软件", "/svg/NavIcon/appstore.svg"),
        link: "/Appstore",
      },
      {
        text: getNav("SSL证书", "/svg/NavIcon/allinssl.svg"),
        link: "/SSL",
      },
    ],
  },
  {
    text: "🏙️生活娱乐",
    items: [
      {
        text: getNav("相册", "/svg/NavIcon/photo.svg"),
        link: "/photo",
      },
      {
        text: getNav("音乐", "/svg/NavIcon/music.svg"),
        link: "/music",
      },
      {
        text: getNav("电影", "/svg/NavIcon/movie.svg"),
        link: "/movie",
      },
    ],
  },
  {
    text: "🗂️文章索引",
    items: [
      {
        text: getNav("📃文章分类", null),
        link: "/categories",
      },
      {
        text: getNav("🔖文章标签", null),
        link: "/tags",
      },
      {
        text: getNav("文章归档", "/svg/NavIcon/归档.svg"),
        link: "/archives",
      },
      {
        text: getNav("文章清单", "/svg/NavIcon/清单.svg"),
        link: "/articleOverview",
      },
      {
        text: getNav("站点登录", "/svg/NavIcon/登录.svg"),
        link: "/login",
      },
      {
        text: getNav("风险提示", "/svg/NavIcon/风险提示.svg"),
        link: "/risk-link?target=https://teek.seasir.top/guide/quickstart",
      },
    ],
  },
  {
    text: "🌐站点信息",
    items: [
      {
        text: getNav("关于本站", "/svg/NavIcon/about.svg"),
        link: "/About",
      },
      {
        text: getNav("个人主页", "/svg/NavIcon/homepage.svg"),
        link: "/homepage",
      },
      {
        text: getNav("友链链接", "/svg/NavIcon/link.svg"),
        link: "/friend-link",
      },
      {
        text: getNav("网站导航", "/svg/NavIcon/nav.svg"),
        link: "/nav",
      },
      {
        text: getNav("站点统计", "/svg/NavIcon/siteAnalytics.svg"),
        link: "https://umami.seasir.top/share/9Pa3wB79cHKsoAyT/teek.seasir.top",
      },
      {
        text: getNav("站点状态", "/svg/NavIcon/status.svg"),
        link: "https://status.seasir.top/",
      },
      { text: "👂畅所欲言", link: "/message-area/" },
    ],
  },
];
