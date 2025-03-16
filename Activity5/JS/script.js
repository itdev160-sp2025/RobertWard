var packageData = [
    {
    name: "Path Intellisense",
    description: "Visual Studio Code extension that autocompletes filenames, saving you time while coding.",
    author: "Christian Kohler",
    downloads: 15657613,
    stars: 4.8
    },

    {
        name: "Open in Browser",
        description: "Easily open your current file in your default browser with a single click.",
        author: "TechER",
        downloads: 11480710,
        stars: 3.5
    }
];

function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads;
    this.stars = data.stars;
}

Package.prototype.getFormattedDownloads = function () {
    return this.downloads.toLocaleString();
};
var packages = packageData.map(function (item){
    return new Package(item);
});

document.getElementById("article-title").textContent = "The 20 Best VSCode Extensions for Front End Developers";
document.getElementById("article-author").textContent = "by Robert Ward";
document.getElementById("article-date").textContent = "March 15, 2025";
 

function updatePackageDOM(pkg, index){
    var pkgIndex = index + 1;
    document.getElementById("package" + pkgIndex + "-name").textContent = pkg.name;
    document.getElementById("package" + pkgIndex + "-description").textContent = pkg.description;
    document.getElementById("package" + pkgIndex + "-author").textContent = "Author: " + pkg.author;
    document.getElementById("package" + pkgIndex + "-downloads").textContent = "Downloads: " + pkg.getFormattedDownloads();
    document.getElementById("package" + pkgIndex + "-stars").textContent = "Stars: " + pkg.stars;
}

packages.forEach(function (pkg, index){
    updatePackageDOM(pkg, index);
});