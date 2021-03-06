const tabEvent = () => {


    var classActive = ["active", ""];
    var displayActive = ["block", "none"];

    var tab = document.querySelector(".tab");

    var tabButtons = document.querySelectorAll("button[data-index]");
    var tabContent = document.querySelectorAll("div[data-index]");

    const eventTab = (event) => {
        if (event.target instanceof HTMLDivElement) {
            return;
        }
        var index = parseInt(event.target.getAttribute("data-index"));
        var indexNext = index + 1;

        indexNext %= 2;

        tabButtons[index].removeAttribute("class");
        tabButtons[indexNext].removeAttribute("class");


        tabContent[index].style.display = "none";
        tabContent[indexNext].style.display = "none";

        tabContent[index].style.display = "block";
        tabButtons[index].className += "active";
    }

    tab.addEventListener("click", eventTab);
    

}




window.onload = tabEvent;

const evt = new Event('click')
window.dispatchEvent(evt)
