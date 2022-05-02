var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var search__amount = $('.header-search__amount')

search__amount.onclick = function(){
    
    if($('.header-search__amount-people').style.display != "block"){
        $('.header-search__amount-people').style.display = "block"
        headerDayBox.style.display = "none "
    }else{
        $('.header-search__amount-people').style.display = "none"
    }
}

const people__items = $$(".amount-people__item")
var amountGuest = 0;

Array.from(people__items).forEach(function(people__item){
    const people__item__input = people__item.querySelector(".amount-people__item--amount")

    const people__item__up = people__item.querySelector(".ti-plus")
    people__item__up.onclick = function(){
        people__item__down.style.opacity = "1"
        amountGuest += 1
        uiAmount(amountGuest)
        people__item__input.value = (Number(people__item__input.value) + 1)
    }
    var people__item__down = people__item.querySelector(".ti-minus")
    people__item__down.onclick = function(){
        if(people__item__input.value > 0){
            people__item__down.classList.add("active")
            amountGuest -= 1
            uiAmount(amountGuest)
            people__item__input.value = (Number(people__item__input.value) - 1)
        }
        if(people__item__input.value == 0){
            people__item__down.classList.remove("active")
            people__item__input.disabled
            people__item__down.style.opacity = "0.4"
        }
    }
})

var resetPeopleItems = $(".amount-people__confirm-delete")
resetPeopleItems.onclick = function(even){
    even.preventDefault()
    Array.from(people__items).forEach(function(people__item){
        const people__item__input = people__item.querySelector(".amount-people__item--amount")
        people__item__input.value = 0
        amountGuest = 0
        uiAmount(amountGuest)
    })
}

function uiAmount(value){
    var search__amount__text = $('.header-search__amount--text')
    value >= 1 ? search__amount__text.innerText = `${value} Khách` : search__amount__text.innerText = "Số khách"
}

// Language Monne
var language = $(".header--navbar__pointer--img")
var money = $(".header--navbar__pointer--text")

var languageMoney = $(".header--navbar__pointer")
var languageMoneyList = $(".pointer")
languageMoney.onclick = function(){
    if(languageMoneyList.style.display == "flex"){
        languageMoneyList.style.display = "none"
    }else{
        languageMoneyList.style.display = "flex"
        languageMoneyList.style.transform = "translateY(0%)"
    }
}

// Language

var languageList = $$(".pointer__item--language")
Array.from(languageList).forEach(function(languageItem){
    languageItem.onclick = function(){
        Array.from(languageList).forEach(function(languageItem){
            if(languageItem.classList.contains('active')){
                languageItem.classList.remove('active')
            }
        },)
        languageItem.classList.add('active')
        language.src = languageItem.querySelector(".pointer__lis--language--img").src
    }
})

var moneyList = $$(".pointer__item--money")
Array.from(moneyList).forEach(function(moneyItem){
    moneyItem.onclick = function(){
        Array.from(moneyList).forEach(function(moneyItem){
            if(moneyItem.classList.contains('active')){
                moneyItem.classList.remove('active')
            }
        },)
        moneyItem.classList.add('active')
        money.innerText = moneyItem.querySelector(".pointer__item--money--unit").innerText
    }
})

// History seach
// const inputSearch = $(".header-search__input")
// inputSearch.onclick= function(){
//     if($(".header-search--history").style.display != block){
//         $(".header-search--history").style.display = block
//     }else{
//         document
//     }
// }

// Date

var headerDay = $(".header-search__day")
var headerDayBox = $(".header-search__day--box")

headerDay.onclick = function(){
    if(headerDayBox.style.display == "block"){
        headerDayBox.style.display = "none"
    }else{
        headerDayBox.style.display = "block "
        $('.header-search__amount-people').style.display = "none"
    }
}