let but = document.querySelector(".but");
let modal = document.querySelector(".modal");
let plus = document.querySelector(".plus");
let clos = document.querySelector(".close");
let form = document.querySelector("form");
let msnv = document.querySelector("#msnv");
let tennv = document.querySelector("#tennv");
let date = document.querySelector("#date");
// let cv = document.querySelector("")
let cv = document.getElementsByName("Chucvu");
// console.log(cv);
// console.log(cv[0].value)
let capbac = document.querySelector("#capbac");
let heso = document.querySelector("#heso");
let tab = document.querySelector("table");
let loimsnv = document.querySelector(".loimsnv");
let loitennv = document.querySelector(".loitennv");
let loidate = document.querySelector(".loidate");
let loicv = document.querySelector(".loicv");
but.addEventListener("click", function() {
    modal.classList.add("modal2");
    heso.value = 1.28;
})

function checkMsnv() {
    msnv.addEventListener("input", function(e) {
        let pattern3 = /^FIT-\d{5}$/;
        if (msnv.value.trim() === "" || !pattern3.test(msnv.value.trim())) {
            msnv.classList.add("bored");
            loimsnv.classList.add("loi");
            // valid1 = false;
        } else {
            msnv.classList.remove("bored");
            loimsnv.classList.remove("loi");
        }
    })
}
checkMsnv();

function checkTennv() {
    tennv.addEventListener("input", function(e) {
        let pattern4 = /^[A-Z][a-z à-ỵ]+(\s[A-z][a-z à-ỵ]+)+$/
        if (tennv.value.trim() === "" || !pattern4.test(tennv.value.trim())) {
            tennv.classList.add("bored");
            loitennv.classList.add("loi");
        } else {
            tennv.classList.remove("bored");
            loitennv.classList.remove("loi");
        }
    })
}
checkTennv();

function checkHeso() {
    capbac.addEventListener("input", function(e) {
        if (capbac.value == "Bac 1") {
            heso.value = 1.28;
        } else if (capbac.value == "Bac 2") {
            heso.value = 1.28 * 2;
        } else if (capbac.value == "Bac 3") {
            heso.value = 1.28 * 3;
        } else if (capbac.value == "Bac 4") {
            heso.value = 1.28 * 4;
        }
    })
}
checkHeso();

function checkDate() {
    date.addEventListener("input", function(e) {
        let testdate1 = parseInt(date.value.slice(0, 4));
        // console.log(testdate);
        if (testdate1 > 2020 || date.value.trim() == "") {
            date.classList.add("bored");
            loidate.classList.add("loi");
            // valid3 = false;
        } else {
            date.classList.remove("bored");
            loidate.classList.remove("loi");
        }
    })
}
checkDate();

function checkCV() {
    for (let k = 0; k < cv.length; k++) {
        cv[k].addEventListener("input", function() {
            if (cv[k].checked) {
                loicv.classList.remove("loi");
            }
        })
    }
}
checkCV();
let i = 1;
plus.addEventListener("click", function(e) {
    e.preventDefault();
    let valid1 = true;
    let valid2 = true;
    let valid3 = true;
    let valid4 = false;
    let pattern1 = /^FIT-\d{5}$/;
    let pattern2 = /^[A-Z][a-z à-ỵ]+(\s[A-z][a-z à-ỵ]+)+$/
    if (msnv.value.trim() === "" || !pattern1.test(msnv.value.trim())) {
        msnv.classList.add("bored");
        loimsnv.classList.add("loi");
        valid1 = false;
    }
    if (tennv.value.trim() === "" || !pattern2.test(tennv.value.trim())) {
        tennv.classList.add("bored");
        loitennv.classList.add("loi");
        valid2 = false;
    }
    let testdate = parseInt(date.value.slice(0, 4));
    console.log(testdate);
    if (testdate > 2020 || date.value.trim() == "") {
        date.classList.add("bored");
        loidate.classList.add("loi");
        valid3 = false;
    }
    if (!cv[0].checked && !cv[1].checked) {
        loicv.classList.add("loi");
    }
    if (valid1 == true && valid2 == true && valid3 == true) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        td1.textContent = i;
        i++;
        td2.textContent = msnv.value.trim();
        td3.textContent = tennv.value.trim();
        td4.textContent = date.value;
        for (let k = 0; k < 2; k++) {
            if (cv[k].checked) {
                td5.textContent = cv[k].value;
                break;
            }
        }
        td6.textContent = capbac.value;
        tr.append(td1, td2, td3, td4, td5, td6);
        tab.append(tr);
        modal.classList.remove("modal2");
        form.reset();
    }
})
clos.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("modal2");
    form.reset();
})
modal.addEventListener("click", function(e) {
    if (!form.contains(e.target)) {
        modal.classList.remove("modal2");
    }
    // form.reset();
})