// FUNCTIONS

const renderIcons = (array, renderElement) => {
  let template = "";

  array.forEach((element, index) => {
    const hasOffset = index % 5 === 0 ? "offset-lg-1" : "";

    template += `
        <div class="col-sm-4 col-lg-2 ${hasOffset} gy-3">
            <div class="p-3  bg-white rounded  icon">
                <i class="${element.family} ${element.prefix}${element.name} ${
      element.type
    } fa-2x"></i>
                <div class="mt-2">${element.name.toUpperCase()}</div>
            </div>
        </div>
        `;
  });
  renderElement.innerHTML = template;
};

const renderOptions = (array, renderElement) => {
  let types = [];
  const firstOption = '<option value="all" selected>all</option>';
  array.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });

  const options = types.reduce((options, element) => {
    return (options += `<option value="${element}">${element}</option>`);
  }, firstOption);

  renderElement.innerHTML = options;
};

// VARIABLES
const selectField = document.getElementById("type-filter");
const iconsSection = document.querySelector("#icons-section .row");

// RENDER
renderOptions(icons, selectField);
renderIcons(icons, iconsSection);

// FILTER

selectField.addEventListener("change", () => {
  if (selectField.value === "all") {
    renderIcons(icons, iconsSection);
    return;
  }

  const selectedIcons = icons.filter(
    (element) => element.type === selectField.value
  );

  renderIcons(selectedIcons, iconsSection);
});
