const track = document.querySelector(".words-track")
const slide = document.querySelector(".words-slide")

while (track.scrollWidth < window.innerWidth * 2) {
    const clone = slide.cloneNode(true)
    track.appendChild(clone)
}

//Proyectos
const proyects = [
    {
        ID: 0,
        Name: "De la Huerta a tu Puerta",
        Folder: "DLHaTP",
        Skill: ["Ilustración", "Photoshop"],
        Portfolio: ["Branding", "Ilustración"],
        Imgs: ["HTP (0).jpg", "HTP (1).jpg", "HTP (3).jpg", "HTP (2).jpg", "HTP (4).jpg", "HTP (5).jpg", "HTP (6).jpg", "HTP (0).jpg"],
        Year: 2025,
        Subtitle: "Ilustraciones para una campaña ficticia",
        Description:
            "A collaborative ilustration campagin done as a proposal to promote the purchases in local buisnesses and products. It was a proyect that really helped me expand a little more my horizons and get a real feeling for what it´s like to work in a group with ideas so different to your own yet still being able to combine them to achive an excellent result.",
    },
    {
        ID: 1,
        Name: "Re-Branding CESIDA",
        Folder: "CESIDA Re",
        Skill: ["Photoshop"],
        Portfolio: ["Branding", "Ilustración"],
        Imgs: ["CESIDA (1).jfif", "CESIDA.jfif", "CESIDA (6).jpg", "CESIDA (3.1).jpg", "CESIDA (2).jpg", "CESIDA (5.1).jpg"],
        Year: 2025,
        Subtitle: "Ilustraciones para una campaña ficticia",
        Description: "A proyect made for a real life association that works at a National level in Spain, we were able to gain feedback on real time and work hand in hand with their designers. A fun proyect that does an excellent job on taking on an issue as important as HIV and AIDS and manages to come out with a very friendly and aprochable brand redisign.",

    }

    , {
        ID: 3,
        Name: "ÑAÑAÑA",
        Folder: "ÑAÑAÑA",
        Skill: ["Photoshop", "InDesign", "Ilustrator"],
        Portfolio: ["Branding", "Maquetación"],
        Imgs: ["NA (1).jpg", "NA (2).jpg", "NA (3).jpg", "NA (4).jpg", "NA (5).jpg", "NA (6).jpg", "NA (7).jpg", "NA (1).jfif"],
        Year: 2025,
        Subtitle: "Creación de Marca y Revista gráfica",
        Description:
            "An experimental magazine where I seeked to push my comfort zone as a designer, experimenting with weird colors and mixing fonts, as well as bending some of those rules we have as designers. Overall a really solid proyevt made possible with InDesign and that really started to get me working on new ideas.",
    },
    {
        ID: 4,
        Name: "Teatros del Canal",
        Folder: "Teatros",
        Skill: ["Ilustrator", "Web"],
        Portfolio: ["Branding"],
        Imgs: ["Teatros (1).jpg", "Teatros (2).jpg"],
        Year: 2024,
        Subtitle: "Ideantidad de Marca y Web",
        Description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum nunc ultricies aliquet aliquam, porttitor inceptos cubilia ridiculus in molestie varius habitasse phasellus fames. Felis praesent semper ultrices mus vehicula curabitur diam ornare cubilia, sem cum egestas dignissim vitae pretium nostra nisi. Litora euismod sagittis porttitor aenean eget fusce, et habitant montes velit hac scelerisque non, vivamus auctor a rhoncus. Volutpat dictumst tempus elementum platea orci ridiculus, euismod vestibulum donec porttitor nisi blandit luctus, egestas sociis aliquet penatibus nisl. Massa mauris luctus eleifend varius in faucibus aliquet rutrum, suspendisse vel ultricies nam a nulla platea, sed hac auctor diam torquent id conubia. Maecenas est cum quis lacus primis vehicula, libero congue lectus diam egestas dignissim tellus, sollicitudin himenaeos luctus dictum felis.",
    },
    {
        ID: 5,
        Name: "Cata La Lata",
        Folder: "CataLaLata",
        Skill: ["Ilustrator", "Web"],
        Portfolio: ["Branding"],
        Imgs: ["Box (1).jpg", "Box (2).jpg", "Box (1).jpg", "Box (3).jpg",],
        Year: 2024,
        Subtitle: "Ideantidad de Marca y Web",
        Description:
            "One of my early design during my studies. It got me placed as a finalist in the international competition, VI Design Award ANFACO-Fundación Banco Sabadell. A basic design that pulls from the fundementals of the job and tules such as figure and background, or just using more simple geometry.",
    }


]

// Función para mostrar los detalles del proyecto
function showProjectDetails(projectId) {
    const project = proyects.find((p) => p.ID === projectId)
    if (!project) return

    const proyectExp = document.getElementById("proyectExp")
    const mainProjectImg = document.getElementById("mainProjectImg")
    const proTitle = document.getElementById("proTitle")
    const proDescription = document.getElementById("proDescription")
    const imgsProContainer = document.getElementById("imgsProContainer")

    // Actualizar la imagen principal
    mainProjectImg.src = `/assets/img/${project.Folder}/${project.Imgs[0]}`
    mainProjectImg.alt = project.Name

    // Actualizar título y descripción
    proTitle.textContent = project.Name
    proDescription.textContent = project.Description

    // Actualizar las imágenes del proyecto (empezar desde la segunda imagen)
    const imgElements = imgsProContainer.querySelectorAll(".examp img")
    imgElements.forEach((img, index) => {
        // Empezar desde la segunda imagen (índice 1)
        const projectImgIndex = index + 1
        if (projectImgIndex < project.Imgs.length) {
            img.src = `/assets/img/${project.Folder}/${project.Imgs[projectImgIndex]}`
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
        proyectImg.src = `/assets/img/${proyecto.Folder}/${proyecto.Imgs[0]}`
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
            .options({showCursor: false, speed: 300, lifeLike: true , })
            
            
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
