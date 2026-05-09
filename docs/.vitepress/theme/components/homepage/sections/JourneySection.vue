<template>
  <div class="author-content">
    <div class="create-site-post author-content-item single">
      <div class="author-content-item-tips">心路历程</div>
      欢迎来到我的个人主页 😝，这里是我记笔记的地方 🙌，目前毕业于 
      <strong>{{ personalInfo.school }}</strong> 的 <strong>{{ personalInfo.major }}</strong> 专业，
      虽然有时候常常会忘记更新笔记，咕咕 ✋~ 但是记笔记真的是一个很棒的习惯 💪，
      能把学下来的知识进行积累，沉淀，有一句话说的好，能教给别人的知识，才是真正学会了的知识 ⚡ 
      每周我都会尽量进行更新 ☁️，如果没更的话，可能是我忘了，也可能是我在钻研某个东西的时候太入迷了 
      <span class="psw">肯定又熬夜了</span> 
      <del>同学们不要学我，老是熬夜会长痘</del> 
      给大家推荐一部番：
      <!-- <div class="site-card-group">
        <a class="site-card" target="_blank" href="https://www.bilibili.com/bangumi/play/ss21542/" @click.prevent>
          <img 
            class="no-lightbox" 
            src="https://pixpro.coul.top/i/2025/04/17/868605.webp" 
            alt="紫罗兰的永恒花园"
          >
          <div class="site-card-info">
            <div class="site-card-title">紫罗兰的永恒花园</div>
            <div class="site-card-desc">一部感人至深的动画作品</div>
          </div>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalData } from '../data/useData'

const { personalInfo } = usePersonalData()
</script>

<style scoped>
/* 心路历程样式 */
.author-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
  animation: slide-in 0.6s 0.5s backwards;
}

.create-site-post {
  grid-column: 1 / -1;
  font-size: 1.1rem;
  line-height: 1.8;
  /* color: #555; */
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9)); */
}

.create-site-post strong {
  color: var(--anzhiyu-main);
  font-weight: 600;
}

.psw {
  color: var(--anzhiyu-gray);
  font-style: italic;
}

del {
  color: var(--anzhiyu-red);
  text-decoration: line-through;
}

.site-card-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.site-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  max-width: 300px;
  /* animation: slide-in 0.6s 0.5s backwards; */
}

.site-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--anzhiyu-shadow-blackdeep);
}

.site-card img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.site-card-info {
  flex: 1;
}

.site-card-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.site-card-desc {
  font-size: 0.9rem;
  color: #666;
}

.author-content-item-tips {
  opacity: 0.8;
  font-size: 12px;
  margin-bottom: 0.5rem;
}

/* 动画效果 */
@keyframes slide-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .site-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>