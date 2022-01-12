module.exports = {
  "title": "禅房花木",
  "description": "你简单，世界就对你简单。",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    valineConfig: {
      appId: 'xaGXSjewuzULHEOanpcFJNMA-gzGzoHsz',// your appId
      appKey: 'IIMQuME3Ie8ryBzFObAabjs8', // your appKey
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "icon": "reco-message",
        link: '/docs/nav/message.md'
      },
      // {
      //   "text": "随笔",
      //   "icon": "reco-suggestion",
      //   link: '/docs/nav/message.md'
      // },
      {
        "text": "关于",
        "icon": "reco-account",
        link: '/docs/nav/about.md'
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "jiandong",
    "authorAvatar": "/mine.jpg",
    "record": "禅房花木",
    "startYear": "2021"
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'blackCat',  'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'z16'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { left: '128px', bottom: '290px' },
        modelStyle: { right: '-50px', bottom: '120px', opacity: '0.7' },
        btnStyle: { left: '90px', bottom: '40px' },
        clean: true,
        width: 250,
        height: 320
      }
    ],
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   title: '公告',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加我的博客 🎉🎉🎉',
    //       style: 'text-aligin: center;',
    //     },
    //     {
    //       type: 'text',
    //       content: 'QQ：925843934',
    //       style: 'text-align: center;'
    //     },
    //     {
    //       type: 'text',
    //       content: '喜欢的主题特效可以去个人信息',
    //       style: 'text-align: center;'
    //     },
    //     {
    //       type: 'text',
    //       content: '友链或疑问均可在留言板给我留言',
    //       style: 'text-align: center;'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '留印',
    //       link: '/docs/nav/message.html'
    //     },
    //   ]
    // }],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 3 ,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: `I'm Yours`,
            artist: 'Jason Mraz',
            url: `https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/I'm%20Yours%20(Album%20Version)_Jason%20Mraz.mp3`,
            cover: 'https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/2591641954357_.pic.jpg'
          }
        ],
        autoShrink: true
      }
    ],
  ],
  "markdown": {
    "lineNumbers": true
  }
}