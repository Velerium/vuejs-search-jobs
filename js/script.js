Vue.config.devtools = true;

new Vue(
    {
        el: '#app',

        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Google LLC',
                    position: 'UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/10/2021',
                    logo: 'logo.jpg',
                    city: 'Bologna',
                    contract: 'Full Time'
                },
                
                {
                    id: 2,
                    company: 'Innoteam Srl',
                    position: 'Mechanical Dev',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/13/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Full Time'
                },

                {
                    id: 3,
                    company: 'Prospecto Srl',
                    position: 'Frontend Dev',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/15/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Part Time'
                },

                {
                    id: 4,
                    company: 'Avangarde Consulting',
                    position: 'SASS Dev',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/20/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                },

                {
                    id: 5,
                    company: 'Electrolux',
                    position: 'Gomorra Dev (yeah right)',
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

                let id = this.jobs[index].id - 1;

                if (this.applied.includes(id)) {
                    alert("You can't star something you've already applied for!")
                    return;
                }

                if (this.starred.includes(id)) {

                    this.starRemove(id);
            
                } else {
                    this.starred.push(id);

                }
            },

            apply: function(index) {

                let id = this.jobs[index].id - 1;

                // Change appearance and button when applied

                document.querySelectorAll('.apply-button')[index].disabled = true;

                setTimeout(() => {

                    this.applied.push(id);
                    this.starRemove(id);
                    document.querySelectorAll('.apply-alert')[index].style.color = 'brown';
                }, 3500) 

                this.applyConfirm();

            },

            starRemove: function(index) {

                this.starred.forEach(number => {
                    let value = this.starred.indexOf(number);

                    if (number === index) {
                        this.starred.splice(value, 1);
                        return;
                    }
                });
            },

            applyConfirm: function() {
                setTimeout(() => {
                    document.querySelector('.modal').style.display = 'block'
                }, 1500)

                setTimeout(() => {
                    this.hideModal();
                }, 3500)
            },

            hideModal: function() {
                document.querySelector('.modal').style.display = 'none'
            }
        }
    }
)
