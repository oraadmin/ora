let loader = document.getElementById('loader');
function Loades_Site_Content(){
    
    loader.classList.add('fade-in')

}

function views_content_none(){

    setTimeout(
        (Loades_Site_Content),
        9000
    )
}
views_content_none()