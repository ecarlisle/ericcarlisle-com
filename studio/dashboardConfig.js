export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '636a6cc907e514269834803b',
                  title: 'Sanity Studio',
                  name: 'ericcarlisle-com-studio',
                  apiId: 'ee777bc0-d409-4923-a484-fa69fff7ad59'
                },
                {
                  buildHookId: '636a6cc9ab042425f9b5f547',
                  title: 'Blog Website',
                  name: 'ericcarlisle-com',
                  apiId: 'bfa849e4-2484-4f17-b1f0-aadf1abdf97c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ecarlisle/ericcarlisle-com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ericcarlisle-com.netlify.app', category: 'apps'}
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
