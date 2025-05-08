let proyects =

    [
        {
            "ID": 0,
            "Name": "De la Huerta a tu Puerta",
            "Folder": "DLHaTP",
            "Skill": ["Ilustración", "Photoshop"],
            "Portfolio": ["Branding","Ilustración"],
            "Imgs": ["HTP (0).jpg", "HTP (1).jpg", "HTP (2).jpg", "HTP (3).jpg", "HTP (4).jpg", "HTP (5).jpg", "HTP (6).jpg"],
            "Year": 2025,
            "Subtitle": "Ilustraciones para una campaña ficticia",
            "Description": "Un trabajo de Ilustración donde se nos propuso la creación de diferentes imagenes llevadas a un cartel para promover el consumo de vegetales locales y los pequeños negocios como las fruterias."
        },
        {
            "ID": 1,
            "Name": "Baby Driver",
            "Folder": "BabyDriver",
            "Skill": ["Ilustración", "Video"],
            "Portfolio": ["Motion"],
            "Imgs": [ "BabyDriver (0).JPG", "BabyDriver (1).JPG", "BabyDriver (2).JPG"],
            "Year": 2024,
            "Subtitle": "Rotoscopia Manual",
            "Description": "Una rotoscopia manual sobre un montaje de la película Baby Driver, al ritmo de Igor´s Theme."
        },
        {
            "ID": 2,
            "Name": "IGOR",
            "Folder": "IGOR",
            "Skill": ["Photoshop", "InDesign"],
            "Portfolio": ["Maquetación", "Ilustración"],
            "Imgs": ".",
            "Year": 2024,
            "Subtitle": "Libro del Album IGOR",
            "Description": "Un libro maquetado y en arte final sobre el album IGOR."
        },
        {
            "ID": 3,
            "Name": "Web de Música",
            "Folder": "WebMusica",
            "Skill": ["Web"],
            "Imgs": ["WebMusica (2).JPG", "WebMusica (3).JPG"],
            "Portfolio": ["Web"],
            "Year": 2024,
            "Subtitle": "Web Interactiva a base de Javascript",
            "Description": "Uso basico de JS, que nos permitio añadir albums a favoritos al igual que expandir y ver los detalles de cada albúm gracias a un archivo JSON"
        },
        {
            "ID": 4,
            "Name": "ÑAÑAÑA",
            "Folder": "ÑAÑAÑA",
            "Skill": ["Photoshop", "InDesign", "Ilustrator"],
            "Portfolio": ["Branding","Maquetación"],
            "Imgs": ["NA (1).jpg", "NA (2).jpg", "NA (3).jpg", "NA (4).jpg", "NA (5).jpg", "NA (6).jpg", "NA (7).jpg"],
            "Year": 2025,
            "Subtitle": "Creación de Marca y Revista gráfica"
        },
        {
            "ID": 5,
            "Name": "Teatros del Canal",
            "Folder": "Teatros",
            "Skill": ["Ilustrator", "Web", "Video"],
            "Portfolio": ["Branding"],
            "Imgs": ".",
            "Year": 2024,
            "Subtitle": "Ideantidad de Marca y Web"
        }
    ]

    //Only in Index
    {
    let skillLinks = document.querySelectorAll(".skillList a");
    let carouselInner = document.querySelector(".carousel-inner");
    
    function loadCarousel(skill) {
        let html = ``;
        let firstItem = true; // to mark the first carousel item as 'active'
    
        proyects.forEach(proyect => {
            if (Array.isArray(proyect.Imgs) && proyect.Imgs.length > 0) {
                if (skill === "" || proyect.Skill.some(projSkill => projSkill.toLowerCase().includes(skill.toLowerCase()))) {
                    let img = proyect.Imgs[0]; // Only take the FIRST image
                    html += `
                        <div class="carousel-item ${firstItem ? 'active' : ''}">
                            <img src="/assets/img/${proyect.Folder}/${img.replace('.JPG', '.jpg')}" class="d-block w-100" alt="${proyect.Name}">
                        </div>
                    `;
                    firstItem = false; // After first, others are not active
                }
            }
        });
    
        if (html === ``) {
            html = `
                <div class="carousel-item active">
                    <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
                        <h5>No hay proyectos para esta Skill</h5>
                    </div>
                </div>
            `;
        }
    
        carouselInner.innerHTML = html;
    }
    
    skillLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let skill = this.className;
            loadCarousel(skill);
        });
    });
    
    
    loadCarousel("");
}
    

//Para que funcione, meter todo en una funcion y cargar al final, exceptuando BARBA