function snapCrackle(maxValue) {
    let string =  " ";
    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 == 0) {
            string += "SnapCrackle, "
        } else if (i % 2 !== 0) {
            string += "Snap, "
        } else if (i % 5 == 0) {
            string += "Crackle, "
        } else if (i % 2 == 0) {
            string += i + ", "
        }
        // adicionar na variavel string
        // string = "Snap"
        // string = "Snap, 2"
        // string += i
    }
    return string
}