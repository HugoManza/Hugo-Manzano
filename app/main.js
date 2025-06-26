const track = document.querySelector(".words-track")
const slide = document.querySelector(".words-slide")

while (track.scrollWidth < window.innerWidth * 2) {
    const clone = slide.cloneNode(true)
    track.appendChild(clone)
}

//Proyectos
const proyects = [

    {
        ID: 1,
        Name: "Re-Branding CESIDA",
        Folder: "CESIDA Re",
        Skill: ["Photoshop"],
        Portfolio: ["Branding", "Ilustración"],
        Imgs: ["CESIDA (1).jfif", "CESIDA.jfif", "CESIDA (6).jpg", "CESIDA.gif", "CESIDA (5.1).jpg", "CESIDA (8).JPG",],
        Year: 2025,
        Subtitle: "Ilustraciones para una campaña ficticia",
        Description: "A proyect made for a real life association that works at a National level in Spain, we were able to gain feedback on real time and work hand in hand with their designers. A fun proyect that does an excellent job on taking on an issue as important as HIV and AIDS and manages to come out with a very friendly and aprochable brand redisign.",

    },
    {
        ID: 2,
        Name: "ÑAÑAÑA",
        Folder: "ÑAÑAÑA",
        Skill: ["Photoshop", "InDesign", "Ilustrator"],
        Portfolio: ["Branding", "Maquetación"],
        Imgs: ["NA (1).jpg", "NA (2).jpg", "NA (3).jpg", "NA (4).jpg", "NA (5).jpg", "NA (6).jpg", "NA (7).jpg", "NA (1).jfif"],
        Year: 2025,
        Subtitle: "Creación de Marca y Revista gráfica",
        Description:
            "An experimental magazine where I seeked to <b>push my comfort zone as a designer,</b> experimenting with weird colors and mixing fonts, as well as bending some of those rules we have as designers. It really allowed us to focus more on how the CMYK pallets mix with one another and what we can do when we are focusing on more that just legilibility.\n Overall a really solid proyect made possible with InDesign and that really started to get me working on new ideas thanks to collaboarting with some of my peers.",
    },
    {
        ID: 3,
        Name: "Flavors Of Japan",
        Folder: "Japan",
        Skill: ["InDesign", "Photoshop"],
        Portfolio: ["Layout",],
        Imgs: ["Japan (2).JPG", "Japan (7).jpg", "Japan (8).jpg", "Japan (6).jpg", "Japan (1).JPG", "Japan (5).jpg", "Japan (3).jpg", "Japan (4).JPG"],
        Year: 2024,
        Subtitle: "",
        Description:
            "Charged with making a <b>high end cooking book</b>, I decided to focus on Japan. I drew inspiration from its traditional art and way of writing, as well as desingers such as <b>Ikko Tanaka.</b> \n I also got the chance to <b>print</b> the actual finished product to see the changes that happen from the screen to print. This resulted in making sure the files were correctly exported for the pressman to work with them.",
    },
    {
        ID: 8,
        Name: "IGOR",
        Folder: "IGOR",
        Skill: ["Ilustrator", "Web"],
        Portfolio: ["Branding"],
        Imgs: ["IGOR (1).jpg", "IGOR (2).jpg" , "IGOR (3).jpg", "IGOR (4).jpg", "IGOR (5).jpg", "IGOR (6).jpg", "IGOR (7).jpg", "IGOR (8).jpg"],
        Year: 2024,
        Subtitle: "Layout and Composition",
        Description:
            "Creative proyects are always fun to do, and being able to print a <b>booklet of 64 pages</b> was certainly an achivement at the time. Taking inspiration from the album by the same name, this proyect made me work on a system that would have to be used throughout the book. From the different paragraph styles to the compositions of the pages following a strict layout, everything had to have been thought about. \n The last challange would be sending it off to <b>print.</b> This meant we had to once again make sure the document was correctly formated for offset printing and check and mistakes that could ruin our work.",
    },
    {
        ID: 5,
        Name: "Teatros del Canal",
        Folder: "Teatros",
        Skill: ["Ilustrator", "Web"],
        Portfolio: ["Branding"],
        Imgs: ["Teatros (1).jpg", "Teatros (6).jpg", "Teatros (3).jpg", "Teatros (1).gif", "Teatros (5).jpg", "Teatros (2).JPG"],
        Year: 2024,
        Subtitle: "Ideantidad de Marca y Web",
        Description:
            "A branding proyect for one of the most important theaters in Madrid, this proyect posed the challange of rebranding a well know location with an already established audiance. \n This was one of the first proyects where I worked on brand identity, and worked on a lot of my essentials, leading to a clean finished result that fits well with the professional undertone of the brand.",
    },
    {
        ID: 4,
        Name: "De la Huerta a tu Puerta",
        Folder: "DLHaTP",
        Skill: ["Ilustración", "Photoshop"],
        Portfolio: ["Branding", "Ilustración"],
        Imgs: ["HTP (0).jpg", "HTP (1).jpg", "HTP (3).jpg", "HTP (2).jpg", "HTP (4).jpg", "HTP (5).jpg", "HTP (6).jpg", "HTP (0).jpg"],
        Year: 2025,
        Subtitle: "Ilustraciones para una campaña ficticia",
        Description:
            "A collaborative ilustration campagin done as a proposal to promote the purchases in local buisnesses and products. It was a proyect that really helped me expand a little more my horizons and get a real feeling for what it's like to work in a group with ideas so different to your own yet still being able to combine them to achive an <b>excellent result</b>.",
    },



    {
        ID: 6,
        Name: "Cata La Lata",
        Folder: "CataLaLata",
        Skill: ["Ilustrator", "Web"],
        Portfolio: ["Branding"],
        Imgs: ["Box (1).jpg", "Box (2).jpg", "Box (1).jpg", "Box (3).jpg",],
        Year: 2024,
        Subtitle: "Ideantidad de Marca y Web",
        Description:
            "One of my early design during my studies. It got me placed as a <b>finalist in the international competition, VI Design Award ANFACO-Fundación Banco Sabadell.</b> A basic design that pulls from the fundementals of the job and rules such as figure and background, or just using more simple geometry. \n I managed to pull ahead through a series of different proposals and stuck with one I felt would work to bring a brand to live. At the same time, the idea that the waves could be joined one next to another would make it attractive to consumers who aren't looking to have an eye sore in their home. ",
    }


]



// Datos
function showProjectDetails(projectId) {
    const project = proyects.find((p) => p.ID === projectId)
    if (!project) return

    const proyectExp = document.getElementById("proyectExp")
    const mainProjectImg = document.getElementById("mainProjectImg")
    const proTitle = document.getElementById("proTitle")
    const proDescription = document.getElementById("proDescription")
    const imgsProContainer = document.getElementById("imgsProContainer")

    // Actualizar la imagen principal
    mainProjectImg.src = `./assets/img/${project.Folder}/${project.Imgs[0]}`
    mainProjectImg.alt = project.Name

    // Actualizar título y descripción
    proTitle.textContent = project.Name
    proDescription.innerHTML = project.Description.replace(/\n/g, "<br>")

    // Actualizar las imágenes del proyecto (empezar desde la segunda imagen)
    const imgElements = imgsProContainer.querySelectorAll(".examp img")
    imgElements.forEach((img, index) => {
        // Empezar desde la segunda imagen (índice 1)
        const projectImgIndex = index + 1
        if (projectImgIndex < project.Imgs.length) {
            img.src = `./assets/img/${project.Folder}/${project.Imgs[projectImgIndex]}`
            img.alt = `${project.Name} - Imagen ${projectImgIndex + 1}`
            img.parentElement.style.display = "block"
        } else {
            img.parentElement.style.display = "none"
        }
    })

    // Mostrar el panel con animación
    proyectExp.classList.add("active")

    // Prevenir scroll del body cuando el panel está abierto
    document.body.style.overflow = "hidden"
}

// Función para cerrar los detalles del proyecto
function closeProjectDetails() {
    const proyectExp = document.getElementById("proyectExp")

    // Ocultar el panel
    proyectExp.classList.remove("active")

    // Restaurar scroll del body
    document.body.style.overflow = "auto"
}

// Función para renderizar los proyectos
function renderProyects() {
    const proyectsContainer = document.getElementById("proyectsContainer")
    proyectsContainer.innerHTML = ""

    proyects.forEach((proyecto) => {
        const proyectButton = document.createElement("button")
        proyectButton.className = "proyect"
        proyectButton.setAttribute("data-id", proyecto.ID)

        const proyectImg = document.createElement("img")
        proyectImg.className = "proyectImg"
        proyectImg.src = `./assets/img/${proyecto.Folder}/${proyecto.Imgs[0]}`
        proyectImg.alt = proyecto.Name

        proyectButton.appendChild(proyectImg)

        // Event listener para mostrar detalles
        proyectButton.addEventListener("click", () => {
            showProjectDetails(proyecto.ID)
        })

        proyectsContainer.appendChild(proyectButton)
    })
}

// Función para manejar el evento de tecla Escape
function handleEscapeKey(event) {
    if (event.key === "Escape") {
        const proyectExp = document.getElementById("proyectExp")
        if (proyectExp.classList.contains("active")) {
            closeProjectDetails()
        }
    }
}

// Inicialización
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        renderProyects()

        new TypeIt("#interact", {
            loop: false,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
            .options({ showCursor: false, speed: 300, lifeLike: true, })


            .pause(1782)

            .type('<span class="more">Hugo Manzano</>')
            .options({ speed: 245 })
            .pause(1782)


            .go();


        // Event listener para el botón de cerrar
        const closeBtn = document.getElementById("closeBtn")
        if (closeBtn) {
            closeBtn.addEventListener("click", closeProjectDetails)
        }

        // Event listener para cerrar con tecla Escape
        document.addEventListener("keydown", handleEscapeKey)
    })
} else {
    renderProyects()

    // Event listener para el botón de cerrar
    const closeBtn = document.getElementById("closeBtn")
    if (closeBtn) {
        closeBtn.addEventListener("click", closeProjectDetails)
    }

    // Event listener para cerrar con tecla Escape
    document.addEventListener("keydown", handleEscapeKey)
}
