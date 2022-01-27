function calculator(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    document.write(`The are of the box is :${area} <br> The volume of the box is:${volume}`)
}
calculator(20, 20, 30);