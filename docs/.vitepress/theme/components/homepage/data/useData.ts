/**
 * 数据管理 Composable
 * 管理页面所需的各种数据
 */

import { ref, reactive } from "vue";
import type {
  PersonalInfo,
  StatisticData,
  SkillIcon,
  CareerItem,
  AuthorTag,
  AnimeItem,
  MenuItem,
} from "../types/index";

/**
 * 个人信息数据
 */
export function usePersonalData() {
  const personalInfo = reactive<PersonalInfo>({
    name: "Alowree XU",
    title: "探索 Marketing 边界，记录成长的点滴",
    description: "生活明朗，万物可爱✨",
    birthYear: 2025,
    school: "HKUST",
    major: "MBA",
    currentJob: "Brand Marketing",
    location: "Shenzhen, GD, China",
    avatar: "https://marapython.com/avatar/avatar.webp",
  });

  const authorTags = ref<AuthorTag[]>([
    { id: "1", text: "数码科技爱好者", emoji: "🤖️" },
    { id: "2", text: "分享与热心帮助", emoji: "🔍" },
    { id: "3", text: "智能家居小能手", emoji: "🏠" },
    { id: "4", text: "设计开发一条龙", emoji: "🔨" },
    { id: "5", text: "专修交互与设计", emoji: "🤝" },
    { id: "6", text: "脚踏实地行动派", emoji: "🏃" },
    { id: "7", text: "团队小组发动机", emoji: "🧱" },
    { id: "8", text: "壮汉人狠话不多", emoji: "💢" },
  ]);

  const leftTags = ref(authorTags.value.slice(0, 4));
  const rightTags = ref(authorTags.value.slice(4, 8));

  return {
    personalInfo,
    authorTags,
    leftTags,
    rightTags,
  };
}

/**
 * 技能数据
 */
export function useSkillsData() {
  const skillIcons = ref<SkillIcon[]>([
    {
      id: "java",
      title: "Java",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/633005bf0fd1e.jpg",
      background: "#fff",
      category: "backend",
    },
    {
      id: "docker",
      title: "Docker",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/63300647df7fa.png",
      background: "#57b6e6",
      category: "devops",
    },
    {
      id: "photoshop",
      title: "Photoshop",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/63300647e1f10.png",
      background: "#4082c3",
      category: "design",
    },
    {
      id: "node",
      title: "Node.js",
      image:
        "https://npm.elemecdn.com/anzhiyu-blog@2.1.1/img/svg/node-logo.svg",
      background: "#333",
      category: "backend",
    },
    {
      id: "webpack",
      title: "Webpack",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/26/6330ff27e5c9b.png",
      background: "#2e3a41",
      category: "build",
    },
    {
      id: "pinia",
      title: "Pinia",
      image:
        "https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/pinia-logo.svg",
      background: "#fff",
      category: "frontend",
    },
    {
      id: "python",
      title: "Python",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/63300647dea51.png",
      background: "#fff",
      category: "backend",
    },
    {
      id: "vite",
      title: "Vite",
      image:
        "https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/vite-logo.svg",
      background: "#937df7",
      category: "build",
    },
    {
      id: "flutter",
      title: "Flutter",
      image:
        "https://img02.anheyu.com/adminuploads/1/2023/05/09/645a45854e093.png",
      background: "#4499e4",
      category: "mobile",
    },
    {
      id: "vue",
      title: "Vue.js",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/633001374747b.png",
      background: "#b8f0ae",
      category: "frontend",
    },
    {
      id: "react",
      title: "React",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      background: "#222",
      category: "frontend",
    },
    {
      id: "css3",
      title: "CSS3",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/633006cc55e07.png",
      background: "#2c51db",
      category: "frontend",
    },
    {
      id: "javascript",
      title: "JavaScript",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/633006eee047b.png",
      background: "#f7cb4f",
      category: "frontend",
    },
    {
      id: "html",
      title: "HTML",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/633006f9ab27d.png",
      background: "#e9572b",
      category: "frontend",
    },
    {
      id: "git",
      title: "Git",
      image:
        "https://img02.anheyu.com/adminuploads/1/2023/04/11/6434a635e9726.webp",
      background: "#df5b40",
      category: "tools",
    },
    {
      id: "apifox",
      title: "Apifox",
      image:
        "https://img02.anheyu.com/adminuploads/1/2022/09/25/633007087a4dc.webp",
      background: "#e65164",
      category: "tools",
    },
  ]);

  // 创建重复的技能图标用于无限滚动
  const scrollingSkills = ref([...skillIcons.value, ...skillIcons.value]);

  return {
    skillIcons,
    scrollingSkills,
  };
}

/**
 * 生涯数据
 */
export function useCareersData() {
  const careers = ref<CareerItem[]>([
    {
      id: "1",
      name: "NEU, Industrial Automation Engieering",
      period: "xxxx-yyyy",
      description: "NEU",
      color: "#357ef5",
    },
    {
      id: "2",
      name: "HKUST, MBA",
      period: "mmmm-nnnn",
      description: "HKUST",
      color: "#357ef5",
    },
  ]);

  return {
    careers,
  };
}

/**
 * 统计数据
 */
export function useStatisticData() {
  const statistics = reactive<StatisticData>({
    todayVisitors: 0,
    todayViews: 0,
    yesterdayVisitors: 0,
    yesterdayViews: 0,
    monthViews: 0,
    totalViews: 0,
  });

  // 模拟获取统计数据
  const fetchStatistics = async () => {
    // 这里可以调用真实的API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    statistics.todayVisitors = 156;
    statistics.todayViews = 234;
    statistics.yesterdayVisitors = 142;
    statistics.yesterdayViews = 198;
    statistics.monthViews = 4521;
    statistics.totalViews = 28940;
  };

  return {
    statistics,
    fetchStatistics,
  };
}

/**
 * 动漫数据
 */
export function useAnimeData() {
  const animeList = ref<AnimeItem[]>([
    {
      id: "1",
      title: "约定的梦幻岛",
      cover: "https://pixpro.coul.top/i/2025/04/17/817598.webp",
      url: "https://www.bilibili.com/bangumi/media/md5267750/",
    },
    {
      id: "2",
      title: "咒术回战",
      cover: "https://pixpro.coul.top/i/2025/04/17/884369.webp",
      url: "https://www.bilibili.com/bangumi/media/md28229899/",
    },
    {
      id: "3",
      title: "紫罗兰永恒花园",
      cover: "https://pixpro.coul.top/i/2025/04/17/868605.webp",
      url: "https://www.bilibili.com/bangumi/media/md8892/",
    },
    {
      id: "4",
      title: "鬼灭之刃",
      cover: "https://pixpro.coul.top/i/2025/04/17/016773.webp",
      url: "https://www.bilibili.com/bangumi/media/md22718131/",
    },
    {
      id: "5",
      title: "JOJO的奇妙冒险 黄金之风",
      cover: "https://pixpro.coul.top/i/2025/04/17/375755.webp",
      url: "https://www.bilibili.com/bangumi/media/md135652/",
    },
  ]);

  return {
    animeList,
  };
}

/**
 * 导航菜单数据
 */
export function useMenuData() {
  const menuItems = ref<MenuItem[]>([
    {
      id: "about",
      title: "关于",
      children: [
        {
          id: "about-me",
          title: "关于本人",
          url: "/About",
          icon: "anzhiyu-icon-paper-plane",
        },
        {
          id: "projects",
          title: "个人项目",
          url: "/About",
          icon: "anzhiyu-icon-lightbulb",
        },
      ],
    },
    {
      id: "contact",
      title: "联系",
      children: [
        {
          id: "email",
          title: "邮箱联系",
          url: "mailto:alowree@gmail.com",
          icon: "anzhiyu-icon-envelope",
        },
        {
          id: "微信",
          title: "微信交流",
          url: "https://resource-ai.helplook.net/docker_production/qkknm3s7/article/sOZHg5pK/67fe1ccc4ad95.jpg",
          icon: "anzhiyu-icon-qq",
        },
      ],
    },
  ]);

  return {
    menuItems,
  };
}

/**
 * 心路历程数据
 */
export function useJourneyData() {
  const journeyContent = ref(`
    欢迎来到我的个人主页 😝，这里是我记笔记的地方 🙌，目前毕业于济南 山东协和学院 的 计算机科学与技术 专业，
    虽然有时候常常会忘记更新笔记，咕咕 ✋~ 但是记笔记真的是一个很棒的习惯 💪，能把学下来的知识进行积累，沉淀，
    有一句话说的好，能教给别人的知识，才是真正学会了的知识 ⚡ 每周我都会尽量进行更新 ☁️，如果没更的话，
    可能是我忘了，也可能是我在钻研某个东西的时候太入迷了。
  `);

  const recommendedAnime = ref({
    title: "紫罗兰的永恒花园",
    description: "一部感人至深的动画作品",
    cover: "img/anime-cover.jpg",
    url: "https://www.bilibili.com/bangumi/play/ss21542/",
  });

  return {
    journeyContent,
    recommendedAnime,
  };
}

