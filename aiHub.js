const loadAllTools = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const aiTools = data.data.tools;
  displayAllTools(aiTools);
};

const displayAllTools = (aiTools) => {
  const aiToolsContainer = document.getElementById("aiToolsContainer");

  aiTools.forEach((aiTool) => {
    const aiToolsDiv = document.createElement("div");
    aiToolsDiv.classList = `card  bg-base-100 shadow-xl`;
    aiToolsDiv.innerHTML = `
    <figure class="px-10 pt-10">
    <img src="${aiTool.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
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
};
