const tracingPoint = document.getElementById("tracing-point");
const heartPath = document.getElementById("heart-path");
const name = document.getElementById("name");

function animateTracingPoint() {
  const pathLength = heartPath.getTotalLength();
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    if (progress > pathLength) {
      clearInterval(interval);
      name.style.animation = "show-name 2s forwards";
    }
    const point = heartPath.getPointAtLength(progress);
    tracingPoint.setAttribute("cx", point.x);
    tracingPoint.setAttribute("cy", point.y);
  }, 30);
}

animateTracingPoint();
