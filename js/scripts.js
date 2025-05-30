    const btnBurger = document.getElementById("btnBurger");
    const modal = document.getElementById("modal");
    const btnClose = document.getElementById("btnClose");

    btnBurger.addEventListener("click", function () {
      modal.classList.add("active");
    });

    btnClose.addEventListener("click", function () {
      modal.classList.remove("active");
    });
