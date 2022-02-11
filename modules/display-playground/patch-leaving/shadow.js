export function initialize() {
    function rn(from, to) {
        return ~~(Math.random() * (to - from + 1)) + from;
    }

    function rs() {
        return arguments[rn(1, arguments.length) - 1];
    }

    function boxShadows(max) {
        let ret = [];
        for (let i = 0; i < max; ++i) {
            ret.push(`
        ${rn(1, 100)}vw ${rn(1, 100)}vh ${rn(20, 40)}vmin ${rn(1, 20)}vmin
        ${rs("#808080", "#696969", "#A9A9A9", "#C0C0C0", "#D3D3D3")}
      `);
        }
        return ret.join(",");
    }

    const cloud = document.querySelector("#cloud");
    function update() {
        cloud.style.boxShadow = boxShadows(100);
    }

    window.addEventListener("load", update);
    document.addEventListener("click", update);
}
