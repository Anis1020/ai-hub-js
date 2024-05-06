const loadAllTools = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tools?search=${searchText}`
  );
  const data = await res.json();
  const aiTools = data.data.tools;
  displayAllTools(aiTools);
};

const displayAllTools = (aiTools) => {
  const aiToolsContainer = document.getElementById("aiToolsContainer");
  aiToolsContainer.innerHTML = "";

  aiTools = aiTools.slice(0, 8);
  aiTools.forEach((aiTool) => {
    console.log(aiTool);
    const aiToolsDiv = document.createElement("div");
    aiToolsDiv.classList = `card  bg-base-100 shadow-xl`;
    aiToolsDiv.innerHTML = `
    <figure class="px-10 pt-10">
    <img src="${aiTool.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${aiTool.name}</h2>
    <p>${aiTool.description}</p>
    <div class="card-actions">
      <button onclick="showDetails('${aiTool.id}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
    `;
    aiToolsContainer.appendChild(aiToolsDiv);
  });
};
loadAllTools();

// search functionality added
const handleSearch = () => {
  const inputFieldText = document.getElementById("searchField");
  const searchText = inputFieldText.value;
  loadAllTools(searchText);
};

// show details
const showDetails = (id) => {
  console.log("showDetails is clicked", id);
};
