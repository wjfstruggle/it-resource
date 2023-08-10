module.exports = {
    title: 'IT知识学院',
    description:"it知识学院，包含海量课程各类it学习视频教程，最新版，持续更新，java，c++，前端，后台，测试，python，图灵,享学,鲁班，小滴课堂,拉勾教育,马士兵教育,慕课网,极客时间,黑马博学谷,奈学,咕泡,爪哇,网易微专业,开课吧,小码哥,云析学院,极客小马哥,大厂学院,京程一灯,知播渔李南江,千锋,尚硅谷,珠峰,博学谷,幕课,金职位,奈学,扔物线,码牛学院,动脑学院,看雪,易锦零声学院,csdn,左程云,贪心学院,码同学,霍格沃兹,优点知识,李振良,老男孩,马哥教育,极客时间，coderwhy，王红元,零声教育,朝夕教育,九章算法,饥人谷",
    port: '8099', //端口号
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/WechatIMG12.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // theme: '@vuepress/blog',
    themeConfig: {
        logo: '/WechatIMG12.jpeg',  // 左上角logo
        nav: [ // 导航栏配置
            { text: '课程首页', link: '/' },
        ],
        sidebar: 'auto', // 侧边栏配置
    }
};