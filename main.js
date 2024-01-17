function scrollView(id) {
    let card = document.getElementById(id);
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
}
