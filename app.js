const profile = new Profile()
const ui = new UI();
const searchProfile = document.getElementById('searchProfile');

searchProfile.addEventListener('keyup',(event)=>{
    ui.clear();
    ui.showText();
   let text = event.target.value;
   if(text!==""){
       profile.getProfile(text)
       .then(res => {
           if(res.profile.length===0){

           }
           else{
                ui.showProfile(res.profile[0]);
                ui.showToDo(res.todo);
                document.querySelector('.alert').className = "alert alert-danger mt-3 alert-box"
           }
       }).catch(error => ui.showAlert(error))
   }
})

window.onload = function(){
    const api = 'https://jsonplaceholder.typicode.com/users';
    fetch(api)
    .then(response=> response.json())
    .then(res => {
        let cardFooter = document.querySelector('.card-footer')
        res.forEach(element => {
            cardFooter.innerHTML+=`
                <div class='chip'>
                ${element.username}
                <i class="close material-icons">close</i>
                </div>
            `
        });
    })
    .catch(error => console.log(error))
    // document.querySelector('#card').insertAdjacentElement('beforeend','hiiii')
}