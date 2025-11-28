const addbtn=document.querySelector(".taskbtn");
const input=document.querySelector(".task");
const taskcontainer=document.querySelector(".tasklist")


addbtn.addEventListener("click",()=>{
    const taskdata=input.value;
    if (taskdata === '') {
      alert("Enter something you want to do !");
      return;
    };

  const checkbx = document.createElement("input");
  checkbx.type="checkbox";

  const li = document.createElement("li");
  li.textContent = taskdata;
  li.className="lino";

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className="deletbtn";
  deleteBtn.onclick = () => li.remove();
  
  li.prepend(checkbx);
  li.appendChild(deleteBtn);
  taskcontainer.appendChild(li);
  

  input.value = '';
}
)
