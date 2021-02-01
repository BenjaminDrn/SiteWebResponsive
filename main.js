/* ================ MENU SHOW ================ */
function showMenu(toggleId, navId){
    const toggle = document.getElementById(toggleId)
    const backgroundToggle = document.getElementById('nav-menu')
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
        if(backgroundToggle && nav){
            backgroundToggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
            })
        }
    }
    
}

showMenu('nav-toggle','nav-menu');

// window loader