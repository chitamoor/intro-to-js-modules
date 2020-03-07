const PI = 3.14

function circumference(radius) {
    return 2 * PI * radius
}

function area(radius) {
    return PI * (radius ** 2)
}

module.exports = {circumference, area}

// alternate syntax
exports.circumference = circumference
exports.area = area

