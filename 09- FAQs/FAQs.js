const dataArry = [
    {
        title: 'why is javascript cool',
        detail: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores vitae quos corrupti explicabo, itaque earum accusantium eveniet sit quibusdam voluptatibus consequuntur iusto, voluptas totam temporibus perspiciatis. Officiis, eligendi cumque.'
    },
    {
        title: 'what is javascript ',
        detail: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores vitae quos corrupti explicabo, itaque earum accusantium eveniet sit quibusdam voluptatibus consequuntur iusto, voluptas totam temporibus perspiciatis. Officiis, eligendi cumque.'
    },
    {
        title: 'how can I LEARN javascript ',
        detail: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores vitae quos corrupti explicabo, itaque earum accusantium eveniet sit quibusdam voluptatibus consequuntur iusto, voluptas totam temporibus perspiciatis. Officiis, eligendi cumque.'
    }
];

const makeHTML = data => {
    return ` <details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>`
}
const containerElement=document.getElementById('faq-container')
containerElement.innerHTML = dataArry.map(dataItem => makeHTML(dataItem)).join('')