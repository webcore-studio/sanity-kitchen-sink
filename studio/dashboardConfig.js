export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6030bffdf3ce85edaba01cf6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oasdzmxf',
                  apiId: 'f7999888-59c4-4e3a-b462-3d761ae4d00a'
                },
                {
                  buildHookId: '6030bffdc0734814b7eb67a1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z6e1qeq7',
                  apiId: 'cf29ea70-2dde-4412-84a5-98bdda7395fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webcore-studio/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z6e1qeq7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
