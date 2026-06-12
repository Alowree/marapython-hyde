// 卡片栏社交信息
import { gitee, email, WhatsApp, telegram } from "../theme/icon/icons";
import type { Social } from "vitepress-theme-teek/config";

export const SocialDate: Social[] = [
  {
    name: "Gitee",
    icon: gitee,
    iconType: "component", // 指定为组件类型
    link: "https://gitee.com/Alowree/marapython-teek",
  },
  {
    name: "邮件",
    icon: email,
    iconType: "component",
    link: "mailto:alowree@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: WhatsApp,
    iconType: "component", // 指定为组件类型
    link: "https://api.whatsapp.com/send/?phone=13828855925&text=Hello",
  },
  {
    name: "telegram",
    icon: telegram,
    iconType: "component", // 指定为组件类型
    link: "https://t.me/alowree_Bot",
  },
];
