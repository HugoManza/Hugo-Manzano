// Get DOM elements - using your existing navigation buttons
const aboutButton = document.querySelector('.aboutBut.sel');
const portfolioButton = document.querySelector('.proyects.sel');
const contactButton = document.querySelector('.contact.sel');

// Get the sections inside your home div
const aboutSection = document.querySelector('.home .about');
const portfolioSection = document.querySelector('.home .portfolio');
const contactSection = document.querySelector('.home .contact');

// Array of projects (already defined in your code)
const proyects = [
    {
        ID: 0,
        Name: "De la Huerta a tu Puerta",
        Folder: "DLHaTP",
        Skill: ["Ilustración", "Photoshop"],
        Portfolio: ["Branding", "Ilustración"],
        Imgs: ["HTP (0).jpg", "HTP (1).jpg", "HTP (2).jpg", "HTP (3).jpg", "HTP (4).jpg", "HTP (5).jpg", "HTP (6).jpg"],
        Year: 2025,
        Subtitle: "Ilustraciones para una campaña ficticia",
        Description:
            "Un trabajo de Ilustración donde se nos propuso la creación de diferentes imagenes llevadas a un cartel para promover el consumo de vegetales locales y los pequeños negocios como las fruterias.",
    },
    {
        ID: 1,
        Name: "Baby Driver",
        Folder: "BabyDriver",
        Skill: ["Ilustración", "Video"],
        Portfolio: ["Motion"],
        Imgs: ["BabyDriver (0).JPG", "BabyDriver (1).JPG", "BabyDriver (2).JPG"],
        Year: 2024,
        Subtitle: "Rotoscopia Manual",
        Description: "Una rotoscopia manual sobre un montaje de la película Baby Driver, al ritmo de Igor´s Theme.",
    },
    //{
    //  ID: 2,
    //  Name: "IGOR",
    //  Folder: "IGOR",
    //  Skill: ["Photoshop", "InDesign"],
    //  Portfolio: ["Maquetación", "Ilustración"],
    //  Imgs: ["IGOR (0).jpg"],
    //  Year: 2024,
    //  Subtitle: "Libro del Album IGOR",
    //  Description: "Un libro maquetado y en arte final sobre el album IGOR.",
    //},
    {
        ID: 3,
        Name: "Web de Música",
        Folder: "WebMusica",
        Skill: ["Web"],
        Portfolio: ["Web"],
        Imgs: ["WebMusica (2).JPG", "WebMusica (3).JPG"],
        Year: 2024,
        Subtitle: "Web Interactiva a base de Javascript",
        Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum nunc ultricies aliquet aliquam, porttitor inceptos cubilia ridiculus in molestie varius habitasse phasellus fames. Felis praesent semper ultrices mus vehicula curabitur diam ornare cubilia, sem cum egestas dignissim vitae pretium nostra nisi. Litora euismod sagittis porttitor aenean eget fusce, et habitant montes velit hac scelerisque non, vivamus auctor a rhoncus.         Volutpat dictumst tempus elementum platea orci ridiculus, euismod vestibulum donec porttitor nisi blandit luctus, egestas sociis aliquet penatibus nisl. Massa mauris luctus eleifend varius in faucibus aliquet rutrum, suspendisse vel ultricies nam a nulla platea, sed hac auctor diam torquent id conubia. Maecenas est cum quis lacus primis vehicula, libero congue lectus diam egestas dignissim tellus, sollicitudin himenaeos luctus dictum felis.",
    },
    {
        ID: 4,
        Name: "ÑAÑAÑA",
        Folder: "ÑAÑAÑA",
        Skill: ["Photoshop", "InDesign", "Ilustrator"],
        Portfolio: ["Branding", "Maquetación"],
        Imgs: ["NA (1).jpg", "NA (2).jpg", "NA (3).jpg", "NA (4).jpg", "NA (5).jpg", "NA (6).jpg", "NA (7).jpg"],
        Year: 2025,
        Subtitle: "Creación de Marca y Revista gráfica",
        Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum nunc ultricies aliquet aliquam, porttitor inceptos cubilia ridiculus in molestie varius habitasse phasellus fames. Felis praesent semper ultrices mus vehicula curabitur diam ornare cubilia, sem cum egestas dignissim vitae pretium nostra nisi. Litora euismod sagittis porttitor aenean eget fusce, et habitant montes velit hac scelerisque non, vivamus auctor a rhoncus.         Volutpat dictumst tempus elementum platea orci ridiculus, euismod vestibulum donec porttitor nisi blandit luctus, egestas sociis aliquet penatibus nisl. Massa mauris luctus eleifend varius in faucibus aliquet rutrum, suspendisse vel ultricies nam a nulla platea, sed hac auctor diam torquent id conubia. Maecenas est cum quis lacus primis vehicula, libero congue lectus diam egestas dignissim tellus, sollicitudin himenaeos luctus dictum felis.",
    },
    {
        ID: 5,
        Name: "Teatros del Canal",
        Folder: "Teatros",
        Skill: ["Ilustrator", "Web"],
        Portfolio: ["Branding"],
        Imgs: ["Teatros (1).jpg", "Teatros (2).jpg"],
        Year: 2024,
        Subtitle: "Ideantidad de Marca y Web",
        Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum nunc ultricies aliquet aliquam, porttitor inceptos cubilia ridiculus in molestie varius habitasse phasellus fames. Felis praesent semper ultrices mus vehicula curabitur diam ornare cubilia, sem cum egestas dignissim vitae pretium nostra nisi. Litora euismod sagittis porttitor aenean eget fusce, et habitant montes velit hac scelerisque non, vivamus auctor a rhoncus.         Volutpat dictumst tempus elementum platea orci ridiculus, euismod vestibulum donec porttitor nisi blandit luctus, egestas sociis aliquet penatibus nisl. Massa mauris luctus eleifend varius in faucibus aliquet rutrum, suspendisse vel ultricies nam a nulla platea, sed hac auctor diam torquent id conubia. Maecenas est cum quis lacus primis vehicula, libero congue lectus diam egestas dignissim tellus, sollicitudin himenaeos luctus dictum felis.",
    },
];

// Function to show a section and hide others INSIDE the home div
function showSection(sectionToShow) {
    // Hide all sections inside the home div
    aboutSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';

    // Show the selected section
    sectionToShow.style.display = 'flex';

    // Update active button class
    aboutButton.classList.remove('activeSel');
    portfolioButton.classList.remove('activeSel');
    contactButton.classList.remove('activeSel');

    // Add active class to the clicked button
    if (sectionToShow === aboutSection) {
        aboutButton.classList.add('activeSel');
    } else if (sectionToShow === portfolioSection) {
        portfolioButton.classList.add('activeSel');
    } else if (sectionToShow === contactSection) {
        contactButton.classList.add('activeSel');
    }
}

// Add event listeners to navigation buttons
aboutButton.addEventListener('click', () => showSection(aboutSection));
portfolioButton.addEventListener('click', () => showSection(portfolioSection));
contactButton.addEventListener('click', () => showSection(contactSection));





// Function to generate portfolio items
function generatePortfolioItems() {
    const portfolioList = document.querySelector('.portImgs');

    // Clear existing items
    portfolioList.innerHTML = '';

    // Generate items from the projects array
    proyects.forEach(project => {
        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'portItem';

        // Create image element
        const img = document.createElement('img');
        // Use the first image from the project's Imgs array
        img.src = `/assets/img/${project.Folder}/${project.Imgs[0]}`;
        img.alt = project.Name;

        // Create title overlay for hover effect
        const titleOverlay = document.createElement('div');
        titleOverlay.className = 'title-overlay';

        // Create title element
        const title = document.createElement('h3');
        title.textContent = project.Name;

        // Append elements
        titleOverlay.appendChild(title);
        listItem.appendChild(img);
        listItem.appendChild(titleOverlay);
        portfolioList.appendChild(listItem);
    });
}




// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // TypeIt init


    
    new TypeIt("#nameBox", {
        loop: false,
        afterComplete: function(instance) {
    instance.destroy(); // This removes the cursor and stops the animation
  }
    })
        .options({ speed: 100, lifeLike: true })
       
        .break()
        .type('<span class="more">Manzano</>')
        .options({ speed: 245 })
        .pause(1782)
        .delete('.more')
        .pause(1946)
        .type('<span class="prog">Programa?</span>')
        .pause(1782)
        .delete('.prog')
        .pause(1746)
        .options({ speed: 215 })
        .type('<span class="maq">Maqueta?</span>')
        .pause(1782)
        .delete('.maq')
        .pause(1446)
        .options({ speed: 185 })
        .type('<span class="cre">Crea?</span>')
        .pause(1782)
        .delete('.cre')
        .pause(1446)
        .options({ speed: 185 })
        .type('Manzano')
        .pause(1446)
        
       


        .go()


        
    //Generar Portfolio
    generatePortfolioItems();

});

