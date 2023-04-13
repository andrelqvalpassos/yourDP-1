
function handleSubmit(event) {
    event.preventDefault();
    updateDate();
    updateTime();

    fetch("https://api.sheetmonkey.io/form/5CPujYT8YuoeVfAH2Luerx", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                nome: 'Carlão',
                dia: dateString,
                entrada: timeString,
                saida: ""
            }
        )

    })
}


document.querySelector("form").addEventListener('submit', handleSubmit)