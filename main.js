var newform = document.querySelector('.newform');
var user = document.querySelector('#user');
var amount = document.querySelector('#amount');
var newuser = document.querySelector('.newuser');


newform.addEventListener('submit', adduser);
newuser.addEventListener('click', removeandedituser);

// Add user to DOM and Local Storage

function adduser(e)
{
    e.preventDefault();

    var text = document.createTextNode(`${user.value} ${amount.value}`);
    
    var li = document.createElement(li);

    var btn = document.createElement('button');
    var txt = document.createTextNode('x');

    var edit = document.createElement('button');
    var t = document.createTextNode('edit');
    edit.appendChild(t);
    edit.className = 'edit';

    btn.className = 'btn btn-danger btn-sm delete' ;

    btn.appendChild(txt);

    li.appendChild(text);
    li.appendChild(btn);
    li.appendChild(edit);
    newuser.appendChild(li);
    localStorage.setItem(user.value, amount.value);
}


//Remove User from DOM amd Local Storage

function removeandedituser(e)
{
    var li = e.target.parentElement;
    var txt = li.innerHTML;
    
    var tobedeleted = "";

    for(var i=0; i<txt.length; i++)
    {
        if(txt.charAt(i)!=" ")
        {
            tobedeleted = tobedeleted + txt.charAt(i);
        }
        else
        {
            break;
        }
    }

    if(e.target.classList.contains('delete'))
    {
        if(confirm('Do you want to delete it?'))
        {
            //console.log(tobedeleted);

            localStorage.removeItem(tobedeleted);


            newuser.removeChild(li);
        }
    }

    if(e.target.classList.contains('edit'))
    {
        if(confirm('do you want to edit details?'))
        {
            var amt = localStorage.getItem(tobedeleted);
            user.value = tobedeleted;
            amount.value = amt;
        }
    }
}


//Edit User data into Local Storage

