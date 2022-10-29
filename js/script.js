const $inputSearch = document.querySelector("#input-search")
const $pagination = document.querySelector("#pagination")

const pagination = {
    limit: 8, 
    current: 1,
}

const competencies = [
    {
        name: "HTML",
        icon: "assets/html-logo.png",
    },
    {
        name: "CSS",
        icon: "assets/css-logo.png",
    },
    {
        name: "JavaScript",
        icon: "assets/javascript-logo.png",
    },
    {
        name: "GIT",
        icon: "assets/git-logo.png",
    },
    {
        name: "GitHub",
        icon: "assets/github-logo.png",
    },
    {
        name: "Python",
        icon: "assets/python-logo.png",
    },
    {
        name: "ReactJS",
        icon: "assets/reactjs-logo.png",
    },
    {
        name: "Jest",
        icon: "assets/jest-logo.png",
    },
    {
        name: "Cypress",
        icon: "assets/cypress-logo.png",
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