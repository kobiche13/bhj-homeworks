const hasTooltip = document.querySelectorAll('.has-tooltip');
let positionElement;
let toogle = false;
const tooltip = document.querySelector('.tooltip');
for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', function(event) {
        event.preventDefault();
        if (toogle) {
            tooltip.classList.remove('tooltip_active');
            toogle = false;
        } else {
            tooltip.classList.add('tooltip_active');
            positionElement = hasTooltip[i].getBoundingClientRect();
            tooltip.style.left = positionElement.left + 'px';
            tooltip.style.top = positionElement.top + 20 + 'px';
            tooltip.textContent = hasTooltip[i].title;
            toogle = true;
        }
    })
}