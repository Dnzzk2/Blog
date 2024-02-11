// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "许留山";
export const SITE_DESCRIPTION =
  "欢迎来到我的个人博客, 这里记录了我的一些技术分享和生活感悟, 希望能给你带来一些帮助,我们一起进步。";
export const TWITTER_HANDLE = "undefined";
export const MY_NAME = "许留山";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
