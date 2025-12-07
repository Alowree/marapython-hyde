<!-- 网易云迷你播放器 -->
<template>
    <!-- 创建播放器容器 -->
    <div 
      class="netease-mini-player"
      data-playlist-id="14273792576"
      data-embed="false"
      data-position="bottom-left"
      data-lyric="true"
      data-theme="auto"
      data-default-minimized="true"
    ></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// 动态引入播放器的 CSS 和 JS 文件
onMounted(() => {
  // 引入 CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://api.hypcvgm.top/NeteaseMiniPlayer/netease-mini-player-v2.css';
  document.head.appendChild(cssLink);

  // 引入 JS 并确保加载完成后初始化
  const script = document.createElement('script');
  script.src = 'https://api.hypcvgm.top/NeteaseMiniPlayer/netease-mini-player-v2.js';
  script.async = true;
  script.onload = () => {
    console.log('网易云迷你播放器资源加载完成');
  };
  script.onerror = () => {
    console.error('网易云迷你播放器资源加载失败');
  };
  document.body.appendChild(script);
});

// 组件卸载时清理动态引入的资源
onUnmounted(() => {
  // 移除 CSS
  const cssLinks = document.head.querySelectorAll('link[href*="netease-mini-player-v2.css"]');
  cssLinks.forEach(link => document.head.removeChild(link));

  // 移除 JS
  const scripts = document.body.querySelectorAll('script[src*="netease-mini-player-v2.js"]');
  scripts.forEach(script => document.body.removeChild(script));

  // 清理播放器实例（如果播放器提供了销毁方法）
  if (window.neteaseMiniPlayer?.destroy) {
    window.neteaseMiniPlayer.destroy();
  }
});
</script>