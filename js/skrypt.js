document.addEventListener('DOMContentLoaded', function(){
    const Navwigacja = document.querySelector('.navbar')
    const NavLink = document.querySelectorAll('.nav-link')
    const NavbarCollapse = document.querySelector('.navbar-collapse')
    const NavOne = document.querySelector('.one')

    function addShadow() {
        if (window.scrollY >= 100) {
            Navwigacja.classList.add('shadow-bg')
        }
        else {
            Navwigacja.classList.remove('shadow-bg')
        }
    }

    function addColorOne() {
        if (window.scrollY >= 0 && window.scrollY < 230) {
            NavOne.classList.add('active')
        }
        else {
            NavOne.classList.remove('active')
        }
    }

    NavLink.forEach(item => item.addEventListener('click', () => NavbarCollapse.classList.remove('show')))

    window.addEventListener('scroll',addShadow)
    window.addEventListener('scroll',addColorOne)

})


