<template>
    <div>
        <nav class="navbar is-active" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item" tag="a">
                    <img src="https://www.mariowiki.com/images/thumb/f/f5/StarMK8.png/200px-StarMK8.png" alt=" Rate your movie!" width="30" height="30">
                    <strong> RATE YOUR MOVIE! </strong>
                </router-link>
                <div class="navbar-burger burger" data-target="navmenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navmenu" class="navbar-menu">
                <div @click="reload" class="navbar-end">
                    <router-link class="navbar-item " to="/" active-class="is-active" exact>SEARCH</router-link>
                    <router-link class="navbar-item" to="/categories" active-class="is-active">CATEGORIES</router-link>
                    <router-link class="navbar-item" to="/about" active-class="is-active">ABOUT</router-link>

                </div>
            </div>
        </nav>

    </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {
                // Get the target from the "data-target" attribute

                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');


            });
        });
    }

});




export default {
    methods: {
        reload() {
            var $toggle = $(".navbar-menu")
            var $menu = $(".navbar-burger")

            $toggle.toggleClass('is-active');
            $menu.toggleClass('is-active');
        }

    }
}

</script>

