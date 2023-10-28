/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

function formSubmission() {
    var pdfDownloadingForm = document.getElementById('pdfFinalForm');
    if (pdfDownloadingForm) {
        pdfDownloadingForm.style.display = 'block';
    }
    var nameInput = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('message').value;
    console.log("NAME INPUT : " , nameInput);
    console.log("DOB INPUT : " , dob);
    console.log("PHONE INPUT : " , phone);
    console.log("ADDRESS INPUT : " , address);
    document.querySelector(".col-8 > P:nth-child(1)").textContent = nameInput;
    document.querySelector(".col-8 > P:nth-child(2)").textContent = dob;
    document.querySelector(".col-8 > P:nth-child(3)").textContent = phone;
    document.querySelector(".col-8 > P:nth-child(4)").textContent = address;

    

        const elementToConvert = document.getElementById('pdfFinalForm');

        html2canvas(elementToConvert).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            const pdfWidth = canvas.width;
            const pdfHeight = canvas.height;
            console.log("CANVAS WIDTH : "  ,pdfWidth);
            console.log("CANVAS HEIGHT : "  ,pdfHeight);
            const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
            pdf.addImage(imgData, 'PNG', 0, -28, pdfWidth, pdfHeight);

            // Save or download the PDF
            pdf.save('asydoMemberCard.pdf');
        });
        document.getElementById('pdfFinalForm').style.display = 'none';
        document.getElementById('name').value = null;
        document.getElementById('dob').value = null;
        document.getElementById('phone').value = null;
        document.getElementById('message').value = null;
}



  

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
