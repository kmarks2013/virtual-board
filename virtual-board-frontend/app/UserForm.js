class UserForm{

    constructor(callback, user = null){
        this.formDiv = document.createElement('div')
        this.formDiv.id = 'user-form'
        this.formTitle = document.createElement('h1')
        this.formTitle.innerText = user ? 'Edit Info' : 'Sign Up'
        this.form = document.createElement('form')
        this.form.classList.add('user-form')
        // Label/input for name, age, bio submit button for submit
        this.nameLabel = document.createElement('label')
        this.nameLabel.innerText = 'Name'
        this.nameLabel.setAttribute('for', 'user-name')
        this.nameInput = document.createElement('input')
        this.nameInput.name = "name"
        this.nameInput.id = 'user-name'
        this.nameInput.style.width = '90%'
        user ? this.nameInput.value = user.name : this.nameInput.placeholder = "Name";
        this.ageLabel = document.createElement('label')
        this.ageLabel.innerText = 'Age'
        this.ageLabel.setAttribute('for', 'user-age')
        this.ageInput = document.createElement('input')
        this.ageInput.name = "age"
        this.ageInput.id = 'user-age'
        this.ageInput.style.width = '90%'
        user ? this.ageInput.value = user.age : this.ageInput.placeholder = "Age";
        this.bioLabel = document.createElement('label')
        this.bioLabel.innerText = 'Bio'
        this.bioLabel.setAttribute('for', 'user-bio')
        this.bioInput = document.createElement('input')
        this.bioInput.name = "bio"
        this.bioInput.id = 'user-bio'
        this.bioInput.style.width = '90%'
        user ? this.bioInput.value = user.bio : this.bioInput.placeholder = "Bio";
        this.submit = document.createElement('button')
        this.submit.innerText = user ? 'Save Changes' : 'Create Account'
        this.submit.style.marginTop = '5%'
        this.submit.type = 'submit'

        this.form.append(this.nameLabel, this.nameInput, this.ageLabel, this.ageInput, this.bioLabel, this.bioInput, this.submit)
        this.formDiv.append(this.formTitle, this.form)

        this.form.addEventListener('submit', function(e) {
            e.preventDefault()
            const name = this.name.value
            const age = this.age.value
            const bio = this.bio.value
            const id = user ? user.id : null
            callback(name, age, bio, id)
        })

    }


}
