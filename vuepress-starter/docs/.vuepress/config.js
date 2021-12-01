module.exports = {
    themeConfig: {
        logo: '/assets/img/hero.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/home/home'
            },
            {
                text: 'Languages',
                items: [{
                        text: 'Group1',
                        items: [{
                                text: 'Home',
                                link: '/'
                            },
                            {
                                text: 'Guide',
                                link: '/home/home'
                            },
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [{
                                text: 'Home',
                                link: '/'
                            },
                            {
                                text: 'Guide',
                                link: '/home/home'
                            },
                        ]
                    }
                ]
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
        ],
        sidebar: {
            '/css/': [
                '/css/style',
                "/css/float",
                "/css/position"
            ],
            '/javascript/': [
                '/javascript/BOM',
                "/javascript/DOM",
            ],
        }
        // sidebar: [
        //     {
        //         title: 'css',   // 必要的
        //         path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/css/style',
        //             "/css/float",
        //             "/css/position"
        //         ]
        //     },
        //     {
        //         title: 'javascript',
        //         path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/javascript/BOM',
        //             "/javascript/DOM",
        //         ]
        //     }
        // ],
    }
}