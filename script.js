document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll(".dropdown-submenu .dropdown-toggle");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function(e) {
            e.stopPropagation();
            let nextMenu = this.nextElementSibling;
            if (nextMenu) {
                nextMenu.classList.toggle("show");
            }

            // Tancar altres submenús quan s'obri un de nou
            document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach(menu => {
                if (menu !== nextMenu) {
                    menu.classList.remove("show");
                }
            });
        });
    });

    // Tancar el menú si es fa clic fora
    document.addEventListener("click", function() {
        document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
            menu.classList.remove("show");
        });
    });
});