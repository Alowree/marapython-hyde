<template>
  <div class="my-links-container">
    <!-- 页面主标题区域 -->
    <div class="my-links-title">
      <h1>{{ title }}</h1>
    </div>
    <!-- 顶部Banner区域 -->
    <div v-if="bannerShow" class="flink-banner" id="banners">
      <!-- 左上角smallTitle -->
      <div class="banners-small-title">
        <svg
          t="1761472824402"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6414"
          width="24"
          height="24"
        >
          <path
            d="M704 128C833.621333 128 938.666667 234.666667 938.666667 384c0 298.666667-320 469.333333-426.666667 533.333333-84.394667-50.602667-302.250667-167.978667-389.589333-362.666666h200.405333l39.850667-66.389334 128 213.333334L578.816 554.666667H725.333333v-85.333334h-194.816l-39.850666 66.389334-128-213.333334L274.517333 469.333333H94.293333A407.552 407.552 0 0 1 85.333333 384c0-149.333333 106.666667-256 234.666667-256C399.36 128 469.333333 170.666667 512 213.333333c42.666667-42.666667 112.64-85.333333 192-85.333333z"
            fill="currentColor"
            p-id="6415"
          ></path>
        </svg>
        {{ smallTitle }}
      </div>

      <!-- 右上角功能按钮组 -->
      <div v-if="bannerButtonGroupShow" class="banner-button-group">
        <!-- 随机访问按钮 -->
        <button
          class="banner-button secondary"
          @click="handleRandomVisit"
          :disabled="allLinks.length === 0"
          aria-label="随机访问友链"
        >
          <svg
            t="1761473089094"
            class="icon"
            viewBox="0 0 1026 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8278"
            width="18"
            height="18"
          >
            <path
              d="M1024 153.6c7.314286-29.257143 0-51.2-14.628571-65.828571-14.628571-14.628571-29.257143-14.628571-51.2-7.314286L51.2 431.542857c-21.942857 7.314286-36.571429 14.628571-43.885714 21.942857s-7.314286 21.942857-7.314286 29.257143 14.628571 14.628571 36.571429 21.942857l234.057142 73.142857 541.257143-336.457142c14.628571-7.314286 29.257143-14.628571 36.571429-7.314286 7.314286 0 0 7.314286-7.314286 14.628571l-438.857143 394.971429-14.628571 234.057143c14.628571 0 29.257143-7.314286 43.885714-21.942857l117.028572-109.714286 234.057142 175.542857c43.885714 21.942857 73.142857 14.628571 87.771429-36.571429l153.6-731.428571z"
              fill="currentColor"
              p-id="8279"
            ></path>
          </svg>
          <span class="banner-button-text">随机访问</span>
        </button>

        <!-- 申请友链按钮 -->
        <a
          class="banner-button primary"
          href="#post-comment"
          :disabled="!shouldShow"
          aria-label="申请友链"
          @click="handleApplyFriendLink"
        >
          <svg
            t="1761473156222"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10543"
            width="18"
            height="18"
          >
            <path
              d="M535.630769 821.169231l-41.353846-5.907693s-27.569231-5.907692-41.353846-11.815384c-7.876923-1.969231-17.723077 0-23.630769 5.907692l-9.846154 9.846154c-57.107692 57.107692-149.661538 63.015385-208.738462 11.815385-66.953846-57.107692-68.923077-159.507692-7.876923-220.553847l149.661539-149.661538c19.692308-19.692308 43.323077-31.507692 66.953846-39.384615 31.507692-7.876923 64.984615-5.907692 94.523077 5.907692 17.723077 7.876923 35.446154 17.723077 51.2 33.476923 7.876923 7.876923 13.784615 15.753846 19.692307 25.6 7.876923 13.784615 25.6 15.753846 35.446154 3.938462l55.138462-55.138462c7.876923-7.876923 7.876923-19.692308 1.969231-29.538462-7.876923-11.815385-17.723077-21.661538-27.569231-31.507692-13.784615-13.784615-29.538462-27.569231-47.261539-37.415384-27.569231-17.723077-59.076923-29.538462-92.553846-35.446154-61.046154-11.815385-128-1.969231-183.138461 27.56923-21.661538 11.815385-43.323077 27.569231-61.046154 45.292308l-143.753846 143.753846C17.723077 622.276923 9.846154 791.630769 110.276923 897.969231c104.369231 114.215385 281.6 116.184615 389.907692 7.876923l49.23077-49.230769c13.784615-9.846154 3.938462-33.476923-13.784616-35.446154zM897.969231 114.215385c-108.307692-100.430769-277.661538-92.553846-380.061539 11.815384L472.615385 169.353846c-13.784615 13.784615-3.938462 37.415385 13.784615 39.384616 27.569231 1.969231 55.138462 7.876923 82.707692 15.753846 7.876923 1.969231 17.723077 0 23.63077-5.907693l9.846153-9.846153c57.107692-57.107692 149.661538-63.015385 208.738462-11.815385 66.953846 57.107692 68.923077 159.507692 7.876923 220.553846L669.538462 567.138462c-19.692308 19.692308-43.323077 31.507692-66.953847 39.384615-31.507692 7.876923-64.984615 5.907692-94.523077-5.907692-17.723077-7.876923-35.446154-17.723077-51.2-33.476923-7.876923-7.876923-13.784615-15.753846-19.692307-25.6-7.876923-13.784615-25.6-15.753846-35.446154-3.938462l-55.138462 55.138462c-7.876923 7.876923-7.876923 19.692308-1.96923 29.538461 7.876923 11.815385 17.723077 21.661538 27.56923 31.507692 13.784615 13.784615 31.507692 27.569231 47.261539 37.415385 27.569231 17.723077 59.076923 29.538462 90.584615 35.446154 61.046154 11.815385 128 1.969231 183.138462-27.569231 21.661538-11.815385 43.323077-27.569231 61.046154-45.292308l149.661538-149.661538c110.276923-108.307692 106.338462-285.538462-5.907692-389.907692z"
              fill="currentColor"
              p-id="10544"
            ></path>
          </svg>
          <span class="banner-button-text">申请友链</span>
        </a>
      </div>

      <!-- 两行头像横向无限滚动区域（错位排列） - 白木新增样式 -->
      <div class="tags-group-all">
        <!-- 星爆效果容器 - 白木新增样式 -->
        <div class="global-stars" ref="starsContainer">
          <svg
            v-for="(style, index) in starStyles"
            :key="index"
            class="star-item"
            :class="`gstar-${index + 1}`"
            :style="style"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            />
          </svg>
        </div>
        <div class="tags-group-wrapper">
          <!-- 第一行 -->
          <div
            class="tags-group-row"
            :class="{ 'offset-start': index % 2 === 0 }"
            v-for="(row, index) in avatarRows"
            :key="index"
          >
            <div class="tags-group-content">
              <!-- 白木新增样式 -->
              <a
                v-for="(link, linkIndex) in row"
                :key="linkIndex"
                class="tags-group-icon"
                target="_blank"
                :href="link.link"
                :title="link.name"
                rel="external nofollow noopener"
                @mouseenter="handleAvatarMouseEnter($event, link)"
                @mouseleave="handleAvatarMouseLeave"
              >
                <img
                  :src="link.avatar"
                  :alt="link.name"
                  loading="lazy"
                  :class="{ irregular: link.irregular }"
                />
                <!-- 毛玻璃半透明背景 - 白木新增样式 -->
                <div v-if="activeLink && activeLink.link === link.link" class="avatar-overlay">
                  <span class="avatar-text">{{ activeLink.name }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 友链分组列表，每个分组包含标题、描述和友链列表 -->
    <div v-for="(group, index) in linksData" :key="index" class="my-links-group">
      <!-- 分组标题容器 -->
      <div class="title-wrapper">
        <h3>{{ group.title }}</h3>
      </div>

      <!-- 分组描述文本 -->
      <p class="group-desc">{{ group.desc }}</p>

      <!-- 友链列表容器 -->
      <div class="links-grid">
        <!-- 每个友链项使用LinkItem子组件展示，通过:data传递友链信息 -->
        <div v-for="link in group.list" :key="link.link" class="links-grid__item">
          <LinkItem :data="link" />
        </div>
      </div>
    </div>

    <!-- 留言/评论区域，默认显示，可通过frontmatter隐藏 -->
    <div v-if="commentShow" class="my-message-section" id="post-comment">
      <div class="title-wrapper">
        <h3>申请友链</h3>
      </div>
      <p>想要和我交换友链？请在评论区按以下格式留言 💞</p>

      <!-- 留言卡片容器 -->
      <div class="message-card">
        <!-- 复制按钮区域 -->
        <div class="copy-button-container">
          <!-- 友链格格式示例 -->
          <div class="Friendship-link-format">友链格式：</div>
          <button class="copy-button" @click="copyMessageFormat" :aria-label="copyButtonText">
            <svg
              t="1761473315965"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="12400"
              width="16"
              height="16"
            >
              <path
                d="M480 0h248.2C753.6 0 778 10.2 796 28.2L931.8 164c18 18 28.2 42.4 28.2 67.8V672c0 53-43 96-96 96H480c-53 0-96-43-96-96V96c0-53 43-96 96-96zM160 256h160v128H192v512h384v-64h128v96c0 53-43 96-96 96H160c-53 0-96-43-96-96V352c0-53 43-96 96-96z"
                fill="currentColor"
                p-id="12401"
              ></path>
            </svg>
            <span class="copy-button-text">{{ copyButtonText }}</span>
          </button>
        </div>
        <pre ref="messageFormat">
网站名称: MaraPython
网站链接: https://marapython.com/
网站头像: https://marapython.com/avatar/avatar.webp
网站描述: Marketing Analytics with Python & Marathou</pre
        >
        <!-- 评论区插槽 -->
        <!-- 默认为Twikoo评论组件，可通过插槽自定义其他评论系统 -->
        <slot name="comments">
          <Twikoo />
        </slot>
      </div>
    </div>

    <!-- 滚动到评论区按钮 -->
    <ScrollToComment
      v-if="shouldShow"
      :show="showScrollButton"
      :scroll-to-comment="scrollToComment"
    />
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import LinkItem from "./LinkItem.vue";
// 导入Twikoo评论组件
import Twikoo from "../Twikoo/Twikoo.vue";
import { computed, ref, onMounted, onUnmounted } from "vue";
// 引入顶部区域头像星爆效果+毛玻璃背景功能  - 白木新增样式
import { useStarBurst } from "./DiySlinkShiroki.ts";
// 导入消息提示组件
import { TkMessage } from "vitepress-theme-teek";
import ScrollToComment from "../ScrollToComment.vue";

/**
 * 单个友链的数据结构定义
 * @typedef {Object} Link
 * @property {string} name - 友链网站名称
 * @property {string} link - 友链网站URL地址
 * @property {string} avatar - 友链网站头像/Logo的图片URL
 * @property {string} descr - 友链网站的简短描述
 * @property {boolean} [irregular] - 可选参数，默认值为false，为false时将把头像处理为圆形
 */

/**
 * 友链分组的数据结构定义
 * @typedef {Object} LinkGroup
 * @property {string} title - 分组标题
 * @property {string} desc - 分组描述文字
 * @property {Link[]} list - 该分组下的友链列表数组
 */

// 从页面frontmatter中获取配置数据
const { frontmatter } = useData();

// 从frontmatter中读取links字段，如果未定义则使用空数组
const linksData = computed(() => frontmatter.value.links || []);

// 从frontmatter中读取title字段，默认值为"我的友链"
const title = computed(() => frontmatter.value.title || "我的友链");

// 当frontmatter中comments为false时隐藏，默认显示
const commentShow = computed(() => frontmatter.value.comments !== false);
// 当frontmatter中banner为false时隐藏，默认显示
const bannerShow = computed(() => frontmatter.value.banner !== false);
// 当frontmatter中bannerButtonGroup为false时隐藏，默认显示
const bannerButtonGroupShow = computed(() => frontmatter.value.bannerButtonGroup !== false);
// 可自定义frontmatter中的smallTitle，作为banner的小标题，默认值为"与各位博主一起成长进步"
const smallTitle = computed(() => frontmatter.value.smallTitle || "与各位博主一起成长进步");

const allLinks = computed(() => {
  return linksData.value.reduce((acc, group) => {
    const processedLinks = group.list.map((link) => ({
      ...link,
      avatar: link.avatar,
    }));
    acc.push(...processedLinks);
    return acc;
  }, []);
});

// 将头像平均分成两行，并复制内容以实现无缝滚动
const avatarRows = computed(() => {
  const avatars = allLinks.value;
  if (avatars.length === 0) return [[], []];

  const mid = Math.ceil(avatars.length / 2);
  const row1 = avatars.slice(0, mid);
  const row2 = avatars.slice(mid);

  // 复制内容以实现无缝滚动
  return [
    [...row1, ...row1], // 第一行复制一份
    [...row2, ...row2], // 第二行复制一份
  ];
});

const handleRandomVisit = () => {
  if (allLinks.value.length === 0) return;
  const randomIndex = Math.floor(Math.random() * allLinks.value.length);
  const randomLink = allLinks.value[randomIndex];
  window.open(randomLink.link, "_blank");
};

// 处理申请友链按钮点击事件
const handleApplyFriendLink = (event) => {
  // 阻止默认的锚点跳转行为
  event.preventDefault();

  const commentElement = document.querySelector("#post-comment");

  if (commentElement) {
    commentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // 显示成功消息提示
    TkMessage({
      message: "已跳转到留链区，欢迎留下您的友链信息✨",
      type: "success",
    });
  } else {
    // 如果没有找到评论区域，显示提示
    TkMessage({
      message: "未找到留链区",
      type: "warning",
    });
  }
};

// 控制滚动到评论区按钮的显示逻辑
const shouldShow = computed(() => commentShow.value);
const showScrollButton = ref(true);

// 滚动到评论区函数
const scrollToComment = () => {
  const commentElement = document.querySelector("#twikoo, .my-message-section, .message-card");
  if (commentElement) {
    commentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // 显示成功消息提示
    TkMessage({
      message: "已抵达评论区✨",
      type: "success",
    });
  } else {
    // 如果没有找到评论区域，显示提示
    TkMessage({
      message: "未找到留链区",
      type: "warning",
    });
  }
};

// 智能显示/隐藏滚动按钮逻辑
const isScrolledToComment = ref(false);

// 节流函数 - 限制函数执行频率
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          func.apply(this, args);
          lastExecTime = Date.now();
        },
        delay - (currentTime - lastExecTime),
      );
    }
  };
};

// 缓存DOM查询结果
let cachedCommentElement = null;

// 优化后的滚动位置检查函数
const checkScrollPosition = () => {
  if (!cachedCommentElement) {
    cachedCommentElement = document.querySelector("#twikoo, .my-message-section, .message-card");
  }

  if (cachedCommentElement) {
    // 使用requestAnimationFrame避免强制重排
    requestAnimationFrame(() => {
      const rect = cachedCommentElement.getBoundingClientRect();
      // 如果评论区元素在视口顶部附近（距离顶部小于200px），则认为已经滚动到评论区
      isScrolledToComment.value = rect.top <= 200;

      // 根据是否滚动到评论区来显示/隐藏按钮
      showScrollButton.value = !isScrolledToComment.value;
    });
  }
};

// 节流版本的滚动检查（每100ms执行一次）
const throttledCheckScrollPosition = throttle(checkScrollPosition, 100);

// 添加滚动事件监听
onMounted(() => {
  if (starsContainer.value) {
    setWrap(starsContainer.value);
  }

  // 页面加载时检查一次
  checkScrollPosition();

  // 添加节流后的滚动事件监听
  window.addEventListener("scroll", throttledCheckScrollPosition, { passive: true });
});

// 组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener("scroll", throttledCheckScrollPosition);
  cachedCommentElement = null;
});

// 星爆效果相关 - 白木新增样式
const { gStarStyle, setWrap, onAvatarEnter, onAvatarLeave } = useStarBurst();
const starStyles = ref(gStarStyle);
const activeLink = ref(null);
const starsContainer = ref(null);

// 处理头像鼠标进入事件 - 白木新增样式
const handleAvatarMouseEnter = (event, link) => {
  // 调用星爆效果函数 - 白木新增样式
  onAvatarEnter(event);

  // 设置当前激活的链接 - 白木新增样式
  activeLink.value = link;
};

// 处理头像鼠标离开事件 - 白木新增样式
const handleAvatarMouseLeave = () => {
  // 调用星爆效果函数 - 白木新增样式
  onAvatarLeave();

  // 清除激活的链接 - 白木新增样式
  activeLink.value = null;
};

// 组件挂载后设置星星容器 - 白木新增样式
onMounted(() => {
  if (starsContainer.value) {
    setWrap(starsContainer.value);
  }
});

// 复制功能相关
const messageFormat = ref(null);
const copyButtonText = ref("复制格式");
const copyMessageFormat = async () => {
  if (!messageFormat.value) return;
  const text = messageFormat.value.textContent;
  await navigator.clipboard.writeText(text);
  // 复制成功反馈
  copyButtonText.value = "已复制 !";
  // 2秒后恢复原文本
  setTimeout(() => {
    copyButtonText.value = "复制格式";
  }, 2000);
};
</script>

<style scoped>
/* 导入自定义样式 - 包含白木新增样式 */
@import "./DiySlinkShiroki.scss";

/* 主容器样式 */
.my-links-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px 10px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
}

/* 标题区域样式 */
.my-links-title {
  margin-bottom: 50px;
  padding: 0 10px;
  text-align: center;
}

/* 主标题样式 */
.my-links-title h1 {
  font-size: 2rem;
  font-weight: 600;
  background: -webkit-linear-gradient(
    107deg,
    rgb(255, 182, 133) -30.6%,
    rgb(255, 111, 29) -1.11%,
    rgb(252, 181, 232) 39.14%,
    rgb(135, 148, 255) 73.35%,
    rgb(60, 112, 255) 97.07%,
    rgb(60, 112, 255) 118.97%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  line-height: 1.2;
  display: inline-block;
  font-size: 2rem;
}

/* Banner区域 */
.flink-banner {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  border-radius: 12px;
  padding: 50px 20px 30px;
  margin-bottom: 60px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

/* 左上角smallTitle */
.banners-small-title {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 左上角SVG图标样式 */
.banners-small-title svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.banners-small-title:hover svg {
  transform: scale(1.1);
}

/* 移动端水平居中 */
@media (max-width: 768px) {
  .banners-small-title {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: auto;
    white-space: nowrap;
  }
}

/* 右上角按钮组 */
.banner-button-group {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 16px;
  z-index: 2;
}

.banner-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
}

.banner-button.secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.banner-button.primary {
  background: var(--vp-c-brand-1);
  color: white;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

/* 按钮图标样式 */
.banner-button i {
  font-size: 18px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

/* 按钮文字样式 */
.banner-button-text {
  position: relative;
  z-index: 1;
}

/* 按钮悬停效果 */
.banner-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.banner-button.secondary:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(248, 250, 252, 1));
  border-color: rgba(255, 255, 255, 0.4);
  color: #1f2937;
  /* 确保在浅色背景上有足够的对比度 */
}

.banner-button.primary:hover {
  background: var(--vp-c-brand-1);
  border-color: rgba(59, 130, 246, 0.5);
}

.banner-button:hover i {
  transform: translateY(-1px) scale(1.1);
}

/* 按钮激活状态 */
.banner-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 禁用状态 */
.banner-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.banner-button:disabled:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* 闪光效果 */
.banner-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.banner-button:hover::before {
  left: 100%;
}

/* 按钮内发光效果 */
.banner-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.banner-button:hover::after {
  opacity: 1;
}

/* 两行头像横向滚动区域 */
.tags-group-all {
  width: 100%;
  overflow: hidden;
  padding: 40px 0 10px;
  position: relative;
}

/* 滚动包装器 */
.tags-group-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 每一行 */
.tags-group-row {
  display: flex;
  width: max-content;
  animation: scrollRow 60s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
}

/* 原本的悬停时停止滚动动画样式，
已移至DiySlinkShiroki.scss
- 白木新增样式
*/

/* 内容组 */
.tags-group-content {
  display: flex;
  gap: 20px;
  padding: 0 10px;
}

/* 上下行错位排列 */
.offset-start {
  margin-left: 60px;
  /* 错开半个头像 */
}

/* 滚动动画 */
@keyframes scrollRow {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-40%);
  }
}

/* 头像样式样式
已移至DiySlinkShiroki.scss
- 白木新增样式
*/

/* 头像覆盖层样式
已移至DiySlinkShiroki.scss
- 白木新增样式
*/

/* 确保内容在banner内部 - 白木新增样式后，修复一个bug */
.tags-group-all {
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

/* 星星相关样式
  已移至DiySlinkShiroki.scss
  - 白木新增样式
  */

.my-links-group {
  margin-bottom: 40px;
}

/* 分组标题装饰线样式 */
.title-wrapper {
  position: relative;
  margin: 40px 0;
  height: 1px;
  background: #ddd;
  transition: 0.3s;
}

/* 分组标题文字样式 */
.title-wrapper h3 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--vp-c-bg);
  padding: 0 20px;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  z-index: 1;
}

/* 分组描述文字样式 */
.group-desc {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin-bottom: 30px;
  padding: 0 10px;
}

/* 友链网格布局 - 核心响应式实现 */
.links-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* 让所有行的内容居中对齐 */
  gap: 24px;
  margin-bottom: 60px;
  padding: 0 8px;
}

/* 每个友链项的样式，设置基础宽度 */
.links-grid__item {
  flex: 0 0 calc(100% - 24px);
  /* 移动设备：每行1个 */
  break-inside: avoid;
}

/* 平板设备：每行2个 */
@media (min-width: 768px) {
  .links-grid__item {
    flex: 0 0 calc(50% - 24px);
  }
}

/* 桌面设备：每行最多4个 */
@media (min-width: 1024px) {
  .links-grid__item {
    flex: 0 0 calc(25% - 24px);
  }
}

/* 留言区样式 */
.my-message-section {
  text-align: center;
  margin-top: 20px;
}

/* 留言卡片样式 */
.message-card {
  width: 100%;
  max-width: 1500px;
  margin: 30px auto;
  padding: 32px;
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--vp-c-divider);
  text-align: left;
  position: relative;
}

/* 复制按钮容器 */
.copy-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 4px;
}

/* 友链格式文字样式 */
.Friendship-link-format {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  flex-shrink: 0;
}

/* 复制按钮样式 */
.copy-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  border: none;
}

.copy-button:hover::before {
  left: 100%;
}

.copy-button:hover {
  background: var(--vp-c-brand-1);
  color: white;
  /* 确保在品牌色背景上文字清晰可见 */
}

/* 修复错误的CSS选择器 */
.copy-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.copy-button:hover::after {
  opacity: 1;
}

.copy-button:active {
  transform: translateY(0);
}

/* 示例格式代码块样式 */
.message-card pre {
  background: var(--vp-code-block-bg);
  padding: 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  overflow-x: auto;
  margin: 20px 0;
  border: 1px solid var(--vp-c-divider);
  line-height: 1.5;
  position: relative;
}

/* 移动端留言卡片适配 */
@media (max-width: 768px) {
  .message-card {
    padding: 24px;
    margin: 24px auto;
  }

  .copy-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 4px;
    width: 100%;
  }

  /* 移动端友链格式文字样式 */
  .Friendship-link-format {
    font-size: 0.95rem;
    font-weight: 600;
  }

  .copy-button {
    padding: 6px 12px;
    font-size: 0.85rem;
  }

  .tags-group-icon {
    flex: 0 0 80px;
    width: 80px;
    height: 80px;
  }

  .tags-group-content {
    gap: 15px;
  }

  .offset-start {
    margin-left: 40px;
    /* 移动端适配 */
  }

  .flink-banner {
    padding: 30px 15px 20px;
  }

  .banner-button {
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  /* 移动端隐藏按钮 */
  .banner-button-group {
    display: none;
  }

  /* 移动端滚动速度调整 */
  .tags-group-row {
    animation-duration: 40s;
  }
}

/* 减少动画对性能的影响 */
@media (prefers-reduced-motion: reduce) {
  .tags-group-row {
    animation: none;
  }
}
</style>

