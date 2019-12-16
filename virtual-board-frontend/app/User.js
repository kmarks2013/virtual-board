class User {

  constructor(id, name, age, bio, whiteboard, color = 'red') {
    this.id = id;
    this.name = name;
    this.age = age;
    this.bio = bio;
    this.whiteboard = whiteboard
    this.color = color
  };

  renderProfile() {
    sideBar.content.innerHTML = '';

    // Labels and values for name, age, bio
    let nameLabel = document.createElement('h1');
    nameLabel.innerText = 'Name';
    nameLabel.style.paddingTop = '20%'

    let nameValue = document.createElement('h2');
    nameValue.innerText = this.name;
    nameValue.style.padding = '10%'

    let ageLabel = document.createElement('h1');
    ageLabel.innerText = 'Age';

    let ageValue = document.createElement('h2');
    ageValue.innerText = this.age;
    ageValue.style.padding = '10%'

    let bioLabel = document.createElement('h1');
    bioLabel.innerText = 'Bio';

    let bioValue = document.createElement('h2');
    bioValue.innerText = this.bio;
    bioValue.style.padding = '10%'

    sideBar.content.append(nameLabel, nameValue, ageLabel, ageValue, bioLabel, bioValue);

    let updateUserButton = document.createElement('button');
    updateUserButton.innerText = 'Update Profile';
    updateUserButton.classList.add('user-action');
    updateUserButton.addEventListener('click', () => {
      sideBar.content.innerHTML = '';
      let updateHeader = document.createElement('h1')
      updateHeader.innerText = 'Edit Info'
      updateHeader.style.margin = '10% 0 10% 0'
      sideBar.content.append(updateHeader)
      let updateUserForm = new UserForm(UserAdapter.updateUser, this);
      sideBar.content.append(updateUserForm.form);
    })
    sideBar.content.append(updateUserButton)

    let deleteUserButton = document.createElement('button');
    deleteUserButton.innerText = 'Delete Profile';
    deleteUserButton.classList.add('user-action');
    deleteUserButton.addEventListener('click', () => {
      UserAdapter.deleteUser(this.id);
      // reset main container
      document.querySelector('#to-do-list').innerHTML = ''
      document.querySelector('#quote-list').innerHTML = ''
      document.querySelector('#doodles').innerHTML = ''
      document.querySelector('#krazy-thought-list').innerHTML = ''
      document.querySelector('#wb-title').innerHTML = ''

      document.querySelector('#to-dos button').remove()
      document.querySelector('#quotes button').remove()
      document.querySelector('#krazy-thoughts button').remove()

      document.querySelector('#to-dos h2').remove()
      document.querySelector('#quotes h2').remove()
      document.querySelector('#krazy-thoughts h2').remove()

    });
    sideBar.content.append(deleteUserButton);

    let signOutButton = document.createElement('button');
    signOutButton.innerText = 'Sign Out';
    signOutButton.classList.add('user-action');
    signOutButton.addEventListener('click', () => {
      sideBar = new SideBar()
      // reset main container
      document.querySelector('#to-do-list').innerHTML = ''
      document.querySelector('#quote-list').innerHTML = ''
      document.querySelector('#doodles').innerHTML = ''
      document.querySelector('#krazy-thought-list').innerHTML = ''
      document.querySelector('#wb-title').innerHTML = ''

      document.querySelector('#to-dos button').remove()
      document.querySelector('#quotes button').remove()
      document.querySelector('#krazy-thoughts button').remove()

      document.querySelector('#to-dos h2').remove()
      document.querySelector('#quotes h2').remove()
      document.querySelector('#krazy-thoughts h2').remove()

      if (!!document.querySelector('#close-button')) {
        document.querySelector('#close-button').remove();
      }
    });
    sideBar.content.append(signOutButton);

    document.querySelector('#markers').style.opacity = '1';

    this.renderWhiteboard()
    this.renderMarkers()
  }

  renderWhiteboard() {
    // debugger;
    let whiteboard = new WhiteBoard(this.whiteboard.id, this.whiteboard.title, this.whiteboard.to_dos, this.whiteboard.quotes, this.whiteboard.thoughts, this.whiteboard.doodle, this.id, this.color)
    whiteboard.renderTitle()
    whiteboard.renderToDos()
    whiteboard.renderQuotes()
    whiteboard.renderThoughts()
    whiteboard.renderCanvas()
    // whiteboard.renderMarkers()
  }

  renderMarkers() {
    console.log("It happened again")
    document.querySelector('#markers').style.opacity = '1';
    const markers = document.querySelectorAll('.marker')
    let thisUser = this
    // console.log(this);
    markers.forEach(marker => {
      marker.addEventListener('click', function(e) {
        // debugger;
        // console.log(that);
        // e.preventDefault()
        // console.log(whiteboard)
        //
        document.querySelector('#white-board').style.color = this.id
        thisUser.color = this.id
        // UserAdapter.getUser(thisUser.id, thisUser.color)
      })
    })
  }

  makePTag() {
    let pTag = document.createElement('p');
    pTag.innerText = this.name;

    pTag.addEventListener('click', () => {
      this.renderProfile()
      // this.renderWhiteboard()

    })
    return pTag
  }

}
