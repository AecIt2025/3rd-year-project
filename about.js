//  <----- Numbers Talk ----->
let counters = document.querySelectorAll("#counter");

let counterobs = new IntersectionObserver(
  (entries) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let speed = 40;
    counters.forEach((counter) => {
      function update_count() {
        let targetnum = +counter.dataset.target;
        let initialnum = +counter.innerText;
        let incPerCount = targetnum / speed;
        if (initialnum < targetnum) {
          counter.innerText = Math.ceil(initialnum + incPerCount);
          setTimeout(update_count, 40);
        }
      }
      update_count();
    });
  },
  {
    root: null,
    threshold: 0.4,
  }
);
counterobs.observe(document.querySelector(".count"));
