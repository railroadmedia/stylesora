module.exports = {
    title: 'Musroa UI',
    base: '/stylesora/',
    description: 'A CSS package for styling Musora\'s websites and web applications with ease. Includes Tailwind CSS as well as custom patterns for rapid prototyping and development.',
    evergreen: true,
    themeConfig: {
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
        sidebar: [
            {
                title: 'Stylesora',
                path: '/stylesora/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/stylesora/', 'Introduction'],
                    '/stylesora/usage'
                ]
            },
            {
                title: 'Utilities',
                path: '/utilities/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/utilities/logos',
                    '/utilities/themes',
                    '/utilities/typography'
                ]
            },
            {
                title: 'Layout',
                path: '/layout/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/layout/containers',
                    '/layout/grid',
                    '/layout/navigation'
                ]
            },
            {
                title: 'Components',
                path: '/components/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/components/', 'Overview'],
                    ['/components/icons', 'Icons'],
                    '/components/buttons',
                    '/components/forms',
                    '/components/modals',
                    '/components/breadcrumbs',
                    '/components/cards',
                    '/components/tooltips',
                    '/components/search',
                    '/components/tags',
                    '/components/lists',
                ]
            },
            {
                title: 'Modules',
                path: '/modules/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/modules/', 'Overview']
                ]
            },
            {
                title: 'Templates',
                path: '/templates/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/templates/', 'Overview']
                ]
            }
        ],
        lastUpdated: 'Last Updated',
    },
};