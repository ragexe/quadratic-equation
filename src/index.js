module.exports = function solveEquation(equation) {
    let result = [];
    equation = equation
        .replace(/\s/g, '')
        .toLowerCase()
        .split(/\*x\^2|\*x/)
        .map((elem) => parseInt(elem));

    const D = equation[1] ** 2 - 4 * equation[0] * equation[2];

    result[0] = Math.round((-equation[1] + D ** 0.5) / (2 * equation[0]));
    result[1] = Math.round((-equation[1] - D ** 0.5) / (2 * equation[0]));

    return result.sort((a,b) => a - b)
};
