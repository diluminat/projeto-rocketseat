function toggleMode() {
    const html = document.documentElement
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // }
    // else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatarlight.png');
        img.setAttribute('alt', 'foto do jonathan joestar timeskip sorrindo')
    }
    else {
        img.setAttribute('src', 'assets/avatar.png')
        img.setAttribute('alt', 'foto do Jotaro Kujo de lado segurando o chapeu com cara de serio, brilhando e fundo preto')
    }

}