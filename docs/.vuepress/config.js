module.exports = {
    base: '/',
    title: 'Musora UI',
    description: 'A CSS package for styling Musora\'s websites and web applications with ease. Includes Tailwind CSS as well as custom patterns for rapid prototyping and development.',
    evergreen: true,
    themeConfig: {
        logo: '/img/logo-color.svg',
        displayAllHeaders: true,
        nav: [
            {
                text: 'Stylesora',
                link: '/stylesora/'
            },
            {
                text: 'Vuesora',
                link: 'https://railroadmedia.github.io/vuesora/'
            },
            {
                text: 'Bladesora',
                link: 'https://github.com/railroadmedia/bladesora'
            },
        ],
        sidebar: {
            '/stylesora/': [
                '',
                {
                    title: 'Getting Started',
                    path: '/stylesora/usage/',
                    collapsable: false,
                    sidebarDepth: -1,
                },
                {
                    title: 'Themes',
                    path: '/stylesora/themes/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/themes/logos',
                        '/stylesora/themes/colors',
                    ]
                },
                {
                    title: 'Base',
                    path: '/stylesora/base/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/base/site'
                    ]
                },
                {
                    title: 'Utilities',
                    path: '/stylesora/utilities/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/utilities/extensions',
                    ]
                },
                {
                    title: 'Layout',
                    path: '/stylesora/layout/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/layout/containers',
                        '/stylesora/layout/grid',
                        '/stylesora/layout/navigation'
                    ]
                },
                {
                    title: 'Components',
                    path: '/stylesora/components/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        ['/stylesora/components/', 'Overview'],
                        ['/stylesora/components/icons', 'Icons'],
                        '/stylesora/components/buttons',
                        '/stylesora/components/forms',
                        '/stylesora/components/modals',
                        '/stylesora/components/breadcrumbs',
                        '/stylesora/components/cards',
                        '/stylesora/components/tooltips',
                        '/stylesora/components/search',
                        '/stylesora/components/tags',
                        '/stylesora/components/lists',
                    ]
                },
                {
                    title: 'Modules',
                    path: '/stylesora/modules/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        ['/stylesora/modules/', 'Overview']
                    ]
                },
                {
                    title: 'Templates',
                    path: '/stylesora/templates/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        ['/stylesora/templates/', 'Overview']
                    ]
                }
            ],
        },
        lastUpdated: 'Last Updated',
    },
};