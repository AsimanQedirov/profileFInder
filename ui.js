class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.errorText = "this user not found"
        this.error = ''
    }
    clear() {
        this.profileContainer.innerHTML = ""
    }
    showText() {
        document.querySelector('.alert').innerHTML = this.errorText;
        document.querySelector('.alert').className = "alert alert-danger mt-3"
    }
    showAlert(error) {
        this.error = error
    }
    showToDo(todo) {
        let html = ""
        todo.forEach(element => {
            if (element.completed) {
                html += `
               <li class="list-group-item bg-success">
                ${element.title}
               </li>
               `
            }
            else {
                html += `
            <li class="list-group-item bg-secondary">
             ${element.title}
            </li>
            `
            }
        });
        this.profileContainer.querySelector('#todo').innerHTML = html
    }
    showProfile(profile) {
        this.profileContainer.innerHTML = `
        
        <div class='card card-body'>
            <div class='row'>
                <div class="col-md-3">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/200" class="img-thumbnail"></a>
                </div>
                <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group>
                <li class="list-group-item">
                name : ${profile.name}
                </li>
                <li class="list-group-item">
                username : ${profile.username}
                </li>
                <li class="list-group-item">
                email : ${profile.email}
                </li>
                <li class="list-group-item">
                address :
                ${profile.address.street}
                ${profile.address.city}
                ${profile.address.zipcode}
                ${profile.address.suite}
                </li>
                <li class="list-group-item">
                username : ${profile.phone}
                </li>
                <li class="list-group-item">
                website : ${profile.website}
                </li>
                <li class="list-group-item">
                company : ${profile.company.name}
                </li>
                </ul>
                <h4>To Do list</h4>
                <ul id="todo" class="list-group">

                </ul>
                </div>
            </div>
        </div>
        
        
        `
    }
}