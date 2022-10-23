const $inputSearch = document.querySelector("#input-search")

const competencies = [
    {
        name: "HTML",
        icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    },
    {
        name: "CSS",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
        name: "JavaScript",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
        name: "GIT",
        icon: "https://cdn-icons-png.flaticon.com/512/4494/4494748.png",
    },
    {
        name: "GitHub",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968846.png",
    },
    {
        name: "Python",
        icon: "https://cdn-icons-png.flaticon.com/512/1387/1387537.png",
    }
]

const renderCompetencies = (data) => {
    $competenciesList = document.querySelector("#competencies-list")
    $competenciesList.innerHTML = data.map(competence => `
            <div class="item">
                <img src=${competence.icon} class="icon">
                <span class="name">
                    ${competence.name}
                </span>
            </div>
    `)
}

window.addEventListener("load", () => {
    renderCompetencies(competencies)
})

$inputSearch.addEventListener("keyup", (e) => {
   value = e.target.value.toUpperCase()
    console.log(value)
})