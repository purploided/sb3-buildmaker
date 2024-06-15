let buildName = document.getElementById('buildname');
let buildDescription = document.getElementById('builddesc');
let buildItems = document.getElementById('buildauth');

let build = {
    name: buildName.value,
    description: buildDescription.value,
    items: buildItems.value
};

function downloadBuild() {
    build.name = buildName.value
    build.description = buildDescription.value
    build.items = buildItems.value
    console.log(build);
}
