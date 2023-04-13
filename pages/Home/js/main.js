var dateString = ""
var timeString = ""

//TIME HOME 
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeString = hours + ":" + minutes;
    document.getElementById("clockContent").innerHTML = timeString;
}



//DATE HOME

function updateDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    dateString = day + "/" + month + "/" + year;
    document.getElementById("dateContent").innerHTML = dateString;
}

window.onload = function () {
    updateTime();
    updateDate();
    setInterval(updateTime, 1000);
    setInterval(updateDate, 86400000); // atualiza a data a cada 24 horas
};



// //MODAL 
// const meuBotao = document.getElementById('button_user');

// meuBotao.addEventListener('click', () => {
//   Swal.fire({
//     title: 'Olá!',
//     text: 'Você clicou no botão!',
//     icon: 'success',
//     confirmButtonText: 'Ok'
//   })
// });


//ITEM ACTIVE

// let menuItem = document.querySelectorAll(".itemMenu");



// menuItem.forEach((item) => {


//     item.addEventListener("click", () => {
//         let menuSvg = document.querySelectorAll(".svgItem");

//         menuSvg.forEach((item) => {
//             item.addEventListener("click", () => {
//                 item.classList.add("active")
//             })
//         })
//     })




// })


//BOTTOMSHEET

// const bottomSheet = document.querySelector('.bottomOptionBar');

// const openButton = document.querySelector('#button_user');

// let isDragging = false;
// let startY = 0;
// let currentY = 0;
// let lastY = 0;
// let bottomSheetHeight = bottomSheet.clientHeight;

// // Função para atualizar a posição do bottom sheet
// function updatePosition(y) {
//     let diff = lastY - y;
//     currentY = Math.max(Math.min(currentY - diff, 0), -bottomSheetHeight);
//     bottomSheet.style.bottom = currentY + 'px';
//     lastY = y;
// }

// // Evento de início do arraste
// handle.addEventListener('mousedown', function (e) {
//     isDragging = true;
//     startY = e.clientY;
//     lastY = startY - currentY;
// });

// // Evento de fim do arraste
// document.addEventListener('mouseup', function () {
//     if (isDragging) {
//         isDragging = false;
//         if (currentY < -bottomSheetHeight / 2) {
//             bottomSheet.classList.add('open');
//             currentY = -bottomSheetHeight;
//         } else {
//             bottomSheet.classList.remove('open');
//             currentY = 0;
//         }
//     }
// });

// // Evento de arraste
// document.addEventListener('mousemove', function (e) {
//     if (isDragging) {
//         updatePosition(e.clientY);
//     }
// });

// // Atualiza a altura do bottom sheet quando a tela é redimensionada
// window.addEventListener('resize', function () {
//     bottomSheetHeight = bottomSheet.clientHeight;
// });

// // Evento de clique no botão
// openButton.addEventListener('click', function () {
//     bottomSheet.classList.add('open');
//     currentY = -bottomSheetHeight;
// });