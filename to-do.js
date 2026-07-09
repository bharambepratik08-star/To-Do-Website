const textarea = document.getElementById('task_description');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

const inputBack = document.getElementById('input_back');
const inputTask = document.getElementById('input_task');
const cancelBtn = document.getElementById('cancel_btn');
const addBtn = document.getElementById('add_btn');
const asideAddTaskBtn = document.getElementById('aside_add_task');
const task_show = document.querySelector('.task');
const task_title = document.querySelector('#task_input');
const task_description = document.querySelector('#task_description');


asideAddTaskBtn.addEventListener("click", () => {
    inputBack.style.display = "flex";
    inputTask.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
    inputTask.classList.remove("active");
    inputBack.style.display = "none";
    resetForm();
});

inputBack.addEventListener("click",(e)=>{
    if(e.target===inputBack){
        inputTask.classList.remove("active");
        inputBack.style.display="none";
        resetForm();
    }
});


const selects = document.querySelectorAll(".task_date_to");

let select_date_to = "";

selects.forEach(select => {

    select.addEventListener("change", function () {

        const dateInput = this.nextElementSibling;
        select_date_to = this.value;

        if (this.value === "select_date") {

            dateInput.style.display = "block";
            this.style.display = "none";

        }

    });

});

const selectsc = document.querySelectorAll(".task_date_from");

let select_date_from = "";

selectsc.forEach(selectc => {

    selectc.addEventListener("change", function () {

        const dateInput = this.nextElementSibling;
        select_date_from = this.value;

        if (this.value === "select_date") {

            dateInput.style.display = "block";
            this.style.display = "none";

        }

    });

});


let selectedPriority = "";

const priorityBtns = document.querySelectorAll(".task_priority");

priorityBtns.forEach((btn) => {

    btn.addEventListener("click", function () {

        priorityBtns.forEach((item) => {
            item.classList.remove("clickBtn");
        });

        this.classList.add("clickBtn");

        selectedPriority = this.id;  

    });

});

const cato = document.querySelectorAll(".cato_sel");

let cato_type = "";

cato.forEach(cat => {

    cat.addEventListener("change", function () {

        const dateInput = this.nextElementSibling;

        if (this.value === "your_own") {

            dateInput.style.display = "block";
            this.style.display = "none";

        }

        cato_type = this.value;

    });

});

function date_making_from () {
  let final_date_from;

  if (select_date_from == 'today') {

    final_date_from = new Date().toLocaleDateString();

  } else if (select_date_from == 'tomorrow') {

    let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      final_date_from = tomorrow.toLocaleDateString();

  } else {

    final_date_from = document.querySelector('.date_from').value;

  }

  return final_date_from;
}

function date_making_to () {
  let final_date_to;

  if (select_date_to == 'today') {

    final_date_to = new Date().toLocaleDateString();

  } else if (select_date_to == 'tomorrow') {

    let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      final_date_to = tomorrow.toLocaleDateString();

  } else {

    final_date_to = document.querySelector('.date_to').value;

  }

  return final_date_to;
}

function prio_in () {

  let cato_in_f;

  if ( cato_type == "your_own") {

    cato_in_f = document.querySelector('.own').value;

  } else if ( cato_type == "gym") {

    cato_in_f = "Gym"

  } else if ( cato_type == "school") {

    cato_in_f = "School"

  } else if ( cato_type == "wrk") {

    cato_in_f = "Work"

  } else if ( cato_type == "shopping") {

    cato_in_f = "Shopping"

  } else if ( cato_type == "personal") {

    cato_in_f = "Personal"

  } else if ( cato_type == "game") {

    cato_in_f = "Game"

  } else if ( cato_type == "meeting") {

    cato_in_f = "Meeting"

  } else if ( cato_type == "none" ) {

    cato_in_f = "None"

  }

  return cato_in_f;
}

function time_from () {

  const time_from_task = document.querySelector('.task_time_from').value
  return time_from_task

}

function time_due () {

  const time_to_task = document.querySelector('.task_time_to').value
  return time_to_task
  
}

function resetForm() {

    task_title.value = "";
    task_description.value = "";

    selectedPriority = "";
    priorityBtns.forEach(btn => {
        btn.classList.remove("clickBtn");
    });

    document.querySelector(".task_date_from").selectedIndex = 0;
    document.querySelector(".task_date_to").selectedIndex = 0;

    document.querySelector(".date_from").value = "";
    document.querySelector(".date_to").value = "";

    document.querySelectorAll(".task_time").forEach(time => {
        time.value = "";
    });

    document.querySelector(".cato_sel").selectedIndex = 0;
    document.querySelector(".own").value = "";

    cato_type = "";
    select_date_from = "";
    select_date_to = "";


}

addBtn.addEventListener("click", () => {

    const task = {
        title: task_title.value,
        description: task_description.value,
        from: date_making_from(),
        to: date_making_to(),
        priority: selectedPriority,
        category: prio_in(),
        completed: false
    };

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

renderTasks();
inputTask.classList.remove("active");
inputBack.style.display = "none";
resetForm();

});

function renderTasks() {

    const todayContainer = document.querySelector(".today_task_list");
    const tmrContainer = document.querySelector(".tmr_task_print");
    const upcomingContainer = document.querySelector(".upcoming_task_print");
    const alltask_list = document.querySelector(".all_task_lis");
    const complete_done = document.querySelector('.compl_task');
    const task_show = document.querySelector('.task');

    console.log(document.querySelector(".task"));
console.log(document.querySelector(".today_task_list"));
console.log(document.querySelector(".tmr_task_print"));
console.log(document.querySelector(".upcoming_task_print"));
console.log(document.querySelector(".compl_task"));
console.log(document.querySelector(".all_task_lis"));
    
    task_show.innerHTML = "";
    todayContainer.innerHTML = "";
    tmrContainer.innerHTML = "";
    upcomingContainer.innerHTML = "";
    complete_done.innerHTML = "";
    alltask_list.innerHTML = "";

    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    tasks.forEach(task => {

        if (!task.completed) {
            createTask(task, task_show);
        }

        if (!task.completed &&
            task.to === new Date().toLocaleDateString()) {

            createTask(task, todayContainer);
        }

        if (!task.completed &&
            task.to === tomorrow.toLocaleDateString()) {

            createTask(task, tmrContainer);
        }

        if (!task.completed &&
            task.to !== new Date().toLocaleDateString() &&
            task.to !== tomorrow.toLocaleDateString()) {

            createTask(task, upcomingContainer);
        }

        if (task.completed) {
            createTask(task, complete_done);
        }

        createTask(task, alltask_list);

    });

}

const dashboardBtn = document.querySelector('.aside_dashboard_task');
const todayBtn = document.querySelector('.aside_today_task');
const tomorrowBtn = document.querySelector('.aside_tmr_task');
const upcomingBtn = document.querySelector('.aside_upcomming_task');
const completedBtn = document.querySelector('.aside_completed_task');
const allTasksBtn = document.querySelector('.aside_all_task');
const dashboard_task = document.querySelector('.dashboard');
const today_task = document.querySelector('.today_task');
const tomorrow_task = document.querySelector('.tmr_task');
const upcoming_task = document.querySelector('.upcomming_task');
const completed_task = document.querySelector('.completed_task');
const allTasks = document.querySelector('.all_task');


dashboardBtn.addEventListener ("click", () => {

  dashboard_task.style.opacity = '1';
  dashboard_task.style.display = 'block';
  today_task.style.opacity = '0';
  today_task.style.display = 'none';
  tomorrow_task.style.opacity = '0';
  tomorrow_task.style.display = 'none';
  upcoming_task.style.opacity = '0';
  upcoming_task.style.display = 'none';
  completed_task.style.opacity = '0';
  completed_task.style.display = 'none';
  allTasks.style.opacity = '0';
  allTasks.style.display = 'none';

})

todayBtn.addEventListener ("click", () => {

  dashboard_task.style.opacity = '0';
  dashboard_task.style.display = 'none';
  today_task.style.opacity = '1';
  today_task.style.display = 'block';
  tomorrow_task.style.opacity = '0';
  tomorrow_task.style.display = 'none';
  upcoming_task.style.opacity = '0';
  upcoming_task.style.display = 'none';
  completed_task.style.opacity = '0';
  completed_task.style.display = 'none';
  allTasks.style.opacity = '0';
  allTasks.style.display = 'none';
  
})

tomorrowBtn.addEventListener ("click", () => {

  dashboard_task.style.opacity = '0';
  dashboard_task.style.display = 'none';
  today_task.style.opacity = '0';
  today_task.style.display = 'none';
  tomorrow_task.style.opacity = '1';
  tomorrow_task.style.display = 'block';
  upcoming_task.style.opacity = '0';
  upcoming_task.style.display = 'none';
  completed_task.style.opacity = '0';
  completed_task.style.display = 'none';
  allTasks.style.opacity = '0';
  allTasks.style.display = 'none';
  
})

upcomingBtn.addEventListener ("click", () => {

  dashboard_task.style.opacity = '0';
  dashboard_task.style.display = 'none';
  today_task.style.opacity = '0';
  today_task.style.display = 'none';
  tomorrow_task.style.opacity = '0';
  tomorrow_task.style.display = 'none';
  upcoming_task.style.opacity = '1';
  upcoming_task.style.display = 'block';
  completed_task.style.opacity = '0';
  completed_task.style.display = 'none';
  allTasks.style.opacity = '0';
  allTasks.style.display = 'none';
  
})

completedBtn.addEventListener ("click", () => {

  dashboard_task.style.opacity = '0';
  dashboard_task.style.display = 'none';
  today_task.style.opacity = '0';
  today_task.style.display = 'none';
  tomorrow_task.style.opacity = '0';
  tomorrow_task.style.display = 'none';
  upcoming_task.style.opacity = '0';
  upcoming_task.style.display = 'none';
  completed_task.style.opacity = '1';
  completed_task.style.display = 'block';
  allTasks.style.opacity = '0';
  allTasks.style.display = 'none';
  
})

allTasksBtn.addEventListener ("click", () => {

  dashboard_task.style.opacity = '0';
  dashboard_task.style.display = 'none';
  today_task.style.opacity = '0';
  today_task.style.display = 'none';
  tomorrow_task.style.opacity = '0';
  tomorrow_task.style.display = 'none';
  upcoming_task.style.opacity = '0';
  upcoming_task.style.display = 'none';
  completed_task.style.opacity = '0';
  completed_task.style.display = 'none';
  allTasks.style.opacity = '1';
  allTasks.style.display = 'block';
  
})

function createTask(task, container) {

    const card = document.createElement("div");
    const index = tasks.indexOf(task);
    card.classList.add("task_list");

    card.innerHTML = `
      <button class="prio_under ${
      task.priority==="high"
      ?"prio_under_red"
      :task.priority==="medium"
      ?"prio_under_yellow"
      :"prio_under_green"
      }"></button>

      <h2>${task.title}</h2>

      <p>${task.description}</p>

      <h3>From : ${task.from}</h3>

      <h3>To : ${task.to}</h3>

      <h3>Priority : ${task.priority}</h3>

      <h3>Category : ${task.category}</h3>

      <button class="complete_btn">
      ${task.completed ? "Undo" : "Complete"}
      </button>

      <button class="delete_btn">
      Delete
      </button>
      `;

    container.appendChild(card);

    card.querySelector(".complete_btn").addEventListener("click", () => {

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    });
    card.querySelector(".delete_btn").addEventListener("click", () => {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    });
}
renderTasks();

const clearData = document.querySelector(".clearMain") 

clearData.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
})