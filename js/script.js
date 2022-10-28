const $inputSearch = document.querySelector("#input-search")
const $pagination = document.querySelector("#pagination")

const pagination = {
    limit: 8, 
    current: 1,
}

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
    },
    {
        name: "ReactJS",
        icon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png",
    },
    {
        name: "Jest",
        icon: "https://cdn-icons-png.flaticon.com/512/6402/6402320.png",
    },
    {
        name: "Cypress",
        icon: "https://cdn-icons-png.flaticon.com/512/2033/2033413.png",
    },
]

const renderPagination = (data) => {
   labelsToRender = Math.round((data.length / pagination.limit) + .49999)
   $pagination.innerHTML = Array.from(Array(labelsToRender).keys()).reduce((acc, label) => acc + `
        <span index=${label+1} ${label+1 == pagination.current ? 'class="active"':''}>
            ${label+1}
        </span>
   `, '')
}

const renderCompetencies = (data) => {
    competenciesToRender = getCompetenciesToRender(data)
    $competenciesList = document.querySelector("#competencies-list")
    $competenciesList.innerHTML = competenciesToRender.reduce((acc,competence) => acc + `
            <div class="item">
                <img src=${competence.icon} class="icon">
                <span class="name">
                    ${competence.name}
                </span>
            </div>
    `, '')
}

const getCompetenciesToRender = (competencies) => competencies.slice(
    (pagination.current - 1) * pagination.limit,
    pagination.current * pagination.limit
)

const getFilteredCompetencies = (value) => competencies
    .filter(competence => 
        competence
        .name
        .toUpperCase()
        .includes(value)
    )

window.addEventListener("load", () => {
    renderCompetencies(competencies)
    renderPagination(competencies)
})

$inputSearch.addEventListener("keyup", (e) => {
    value = e.target.value.replace(" ", "").toUpperCase() 
    filteredCompetencies = getFilteredCompetencies(value)
    renderCompetencies(filteredCompetencies)
    renderPagination(filteredCompetencies)
})

$pagination.addEventListener("click", (e) => {
    if(e.target.nodeName == "SPAN") {
        labelIndex = e.target.getAttribute("index")
        value = $inputSearch.value.replace(" ", "").toUpperCase()
        filteredCompetencies = getFilteredCompetencies(value)
        pagination.current = labelIndex
        renderPagination(filteredCompetencies)
        renderCompetencies(filteredCompetencies)
    }
})