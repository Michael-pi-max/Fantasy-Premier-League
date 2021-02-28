const checkBox = document.getElementById('checkbox');
const wrapper = document.getElementById("wrapper");
checkBox.addEventListener('change', () => {
    wrapper.classList.toggle('dark')

})