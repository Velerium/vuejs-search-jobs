Vue.config.devtools = true;

new Vue(
    {
        el: '#app',

        data: {
            jobs: [
                {
                    id: 0,
                    company: 'Perferendis',
                    position: 'UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/10/2021',
                    logo: 'logo.jpg',
                    city: 'Bologna',
                    contract: 'Full Time'
                },
                
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/13/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Full Time'
                },

                {
                    id: 2,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/15/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Part Time'
                },

                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Graphic Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/20/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                },

                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Apprendistato'
                },
            ],

            starred: [1, 3, 4],
            applied: []            
        },

        methods: {
            star: function(index) {

                if (this.applied.includes(index)) {
                    alert("You can't star something you've already applied for!")
                    return;
                }

                if (this.starred.includes(index)) {

                    this.starred.forEach(number => {
                        let value = this.starred.indexOf(number)

                        if (number === index) {
                            this.starred.splice(value, 1);
                        }
                    });
            
                } else {
                    this.starred.push(index);

                }
            },

            apply: function(index) {

                // Change appearance and button when applied

                document.querySelectorAll('.apply')[index].disabled = true;
                document.querySelectorAll('.apply-alert')[index].style.display = 'inline-block'

                // push into applied

                this.applied.push(index)

                // remove from Starred

                this.starred.forEach(number => {
                    let value = this.starred.indexOf(number)

                    if (number === index) {
                        this.starred.splice(value, 1);
                    }
                });

            }
        }
    }
)
