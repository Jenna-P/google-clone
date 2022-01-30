const searchInput = document.querySelector('#search-input');


searchInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        search();
    }
})

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input +"&sxsrf=APq-WBvfKk1AzWOJd8l7OUAwXFaale5NyQ%3A1643553038786&source=hp&ei=DqH2YdnTLKWGxc8PgviUgAE&iflsig=AHkkrS4AAAAAYfavHjMv0xjnkeDIqx1bX-6l-X8jyNrj&ved=0ahUKEwjZkqyY2Nn1AhUlQ_EDHQI8BRAQ4dUDCAc&uact=5&oq=" + input +"&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMggILhCxAxCDATIICAAQsQMQgwEyCAguEIAEELEDMggIABCxAxCDATIICAAQsQMQgwEyCwgAEIAEELEDEIMBMggIABCxAxCDATIICAAQgAQQsQMyCwguEIAEEMcBEK8BOgcIIxDqAhAnOg0ILhDHARCvARDqAhAnOhEILhCABBCxAxCDARDHARDRAzoRCC4QgAQQsQMQgwEQxwEQowI6BQgAEIAEOgYIIxAnEBM6BAgjECc6CggAELEDEIMBEAo6BwguEAoQywE6BwguELEDEAo6BwgAELEDEAo6CgguEMcBEK8BEApQ7uCfAVj-9p8BYLL8nwFoB3AAeACAAXKIAdQGkgEDNS40mAEAoAEBsAEK&sclient=gws-wiz"
}