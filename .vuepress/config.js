module.exports = {
  "title": "禅房花木",
  "description": "你简单，世界就对你简单。",
  // "base":"/public/", 静态资源路径
  "dest": "public",
  locales: {
    '/': {
        lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://blog.jdqiong.cn/weblogo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "script", {src: 'https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/file/tongji.js'}
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    valineConfig: {
      appId: 'W17Uh61KSwIixePrQpvyWKqt-gzGzoHsz',// your appId
      appKey: 'CMMcsJ5RpCSxyw7oIpdtjpwm', // your appKey
    },
    codeTheme: 'funky',
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
      {
        "text": "记录",
        "items": [
          {
            "text": "生活",
            link: '/docs/nav/photos.md',
            "icon": "reco-npm"
          },
          {
            "text": "游戏",
            "link": "/docs/nav/games.md",
            "icon": "reco-other"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-account",
        link: '/docs/nav/about.md'
      },
      {
        "text": "Contact",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/ddshiyu",
            "icon": "reco-github"
          },
          {
            "text": "rss",
            "link": "https://read.jdqiong.cn/rss.xml",
            "icon": "reco-bokeyuan"
          }
        ]
      }
    ],
    "sidebar": {
      "/blogs/read/": [
        "",
        "first",
        "second",
      ],
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
        title: '阮一峰',
        desc: '',
        logo: '',
        link: 'https://www.ruanyifeng.com/'
      },
      {
        title: '张鑫旭',
        desc: '',
        logo: '',
        link: 'https://www.zhangxinxu.com/'
      },
      {
        title: '小孙同学',
        desc: '一个理性的浪漫主义者！',
        logo: 'https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210723133309.jpg',
        link: 'https://sunguoqi.com'
      },
      {
        title: 'itsNekoDeng',
        desc: '十万伏特皮卡丘，梦想是世界和平，想要发光发热',
        logo: 'https://dyfa.top/medias/avatar.jpg',
        link: 'https://dyfa.top'
      },
      {
        title: 'Sianx\'s Blog',
        desc: '总之岁月漫长, 然而值得等待。',
        logo: ' https://unpkg.zhimg.com/picture-sianx@1.0.0/Blog/logo.png',
        link: ' https://sianx.com'
      },
    ],
    "logo": "https://blog.jdqiong.cn/weblogo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "jiandong",
    "authorAvatar": "https://blog.jdqiong.cn/202203041203297.jpg",
    "record": "禅房花木",
    "recordLink": 'https://jdqiong.cn',
    "cyberSecurityRecord": "粤ICP备20061533号-1",
    "cyberSecurityLink": "http://beian.miit.gov.cn/",
    "startYear": "2021"
  },
  plugins: [
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
      "dynamic-title",
      {
        showIcon: "https://blog.jdqiong.cn/weblogo.png",
        showText: "(/≧▽≦/)咦！又好了哦！！！",
        hideIcon: "https://blog.jdqiong.cn/weblogo.png",
        hideText: "(●—●)喔哟，崩溃了啦！",
        recoverTime: 2000
      }
    ],
    ['permalink-pinyin'],
    ['one-click-copy'],
    [
      'rss-feed',
      {
        username: 'jiandong',
        hostname: 'https://read.jdqiong.cn',
        selector: '.content__post', // extract content to content:encoded
        count: 10,
        filter: (page) => /^blog/.test(page.relativePath),
      },
    ],
  ],
  "markdown": {
    "lineNumbers": true,
    plugins: ['task-lists']
  }
}