// linking the blog page
document.getElementById("blog-btn").addEventListener('click', function(){
    window.location.href = "blog.html";
})

// adding functionalities for the first card
donateBtn("card1-btn", "card1-inp", "card1-balance");

// adding functionalities for the second card
donateBtn("card2-btn", "card2-inp", "card2-balance");

// adding functionalities for the third card
donateBtn("card3-btn", "card3-inp", "card3-balance");