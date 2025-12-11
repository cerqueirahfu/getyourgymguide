document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".category-btn");
    const posts = document.querySelectorAll(".post-card");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            const category = btn.getAttribute("data-filter");

            posts.forEach(post => {
                const postCategory = post.getAttribute("data-category");

                if (category === "all" || category === postCategory) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });

});

