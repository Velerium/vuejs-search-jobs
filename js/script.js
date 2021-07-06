Vue.config.devtools = true;

new Vue(
    {
        el: '#app',

        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/10/2021',
                    logo: 'logo.jpg',
                    city: 'Bologna',
                    contract: 'Full Time'
                },
                
                {
                    id: 2,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/13/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Full Time'
                },

                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/15/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Part Time'
                },

                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Graphic Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/20/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                },

                {
                    id: 5,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Apprendistato'
                },
            ],

            starred: [],
            applied: []            
        },

        methods: {

        }
    }
)
