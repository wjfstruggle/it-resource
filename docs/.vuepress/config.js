module.exports = {
    title: 'IT知识学院',
    description:"IT知识学院,java,前端,python,C++,极客时间,珠峰,coderwhy,马士兵,产品经理",
    port: '8099', //端口号
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/WechatIMG12.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/WechatIMG12.jpeg',  // 左上角logo
        nav: [ // 导航栏配置
            { text: '课程首页', link: '/' },
        ],
        sidebar: 'auto', // 侧边栏配置
    }
};