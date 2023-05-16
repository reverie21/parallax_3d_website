const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotatedegree = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = xValue / (window.innerWidth / 2) * 20;

    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;

        let zValue = e.clientX - parseFloat(getComputedStyle(el).left);

        let isInLeft = window.innerWidth / 2 > getComputedStyle(el).left ? 1 : 0;

        el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px)  translateZ(${zValue * isInLeft * speedz}px) rotateY(${rotateDegree * rotation}deg)`;
    })

    console.log(xValue, yValue);
})