const textarea = document.getElementById('task_description');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

const inputBack = document.getElementById('input_back');
const inputTask = document.getElementById('input_task');
const cancelBtn = document.getElementById('cancel_btn');
const addBtn = document.getElementById('add_btn');
const asideAddTaskBtn = document.getElementById('aside_add_task');
const dashboardBtn = document.getElementById('aside_dashboard_task');
const todayBtn = document.getElementById('aside_today_task');
const tomorrowBtn = document.getElementById('aside_tmr_task');
const upcomingBtn = document.getElementById('aside_upcomming_task');
const completedBtn = document.getElementById('aside_completed_task');
const allTasksBtn = document.getElementById('aside_all_task');
const dashboard = document.getElementById('dashboard');
const task_show = document.querySelector('.task');
const task_title = document.querySelector('#task_input');
const task_description = document.querySelector('#task_description');


asideAddTaskBtn.addEventListener('click', function() {
  inputTask.classList.add('active');
});

cancelBtn.addEventListener('click', function() {
  inputTask.classList.remove('active');
  task_description.value = "";
  task_title.value = "";
  priorityBtns.forEach((item) => {
    item.classList.remove("clickBtn");
  });
});

inputBack.addEventListener("click", (e) => {

    if (e.target === inputBack) {
        inputTask.classList.remove("active");
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

function innexhtml () {

  const task_list_add = document.createElement("div");
  task_list_add.classList.add("task_list");

  const task_title_val = task_title.value;
  const task_description_val = task_description.value;

  task_list_add.innerHTML = `
    <h2 class="task_tit_js">${task_title_val}</h2>
    <p class="task_des_js">${task_description_val}</p>
    <h3 class="form_due_js"> From: ${date_making_from ()} - ${time_from()} To: ${date_making_to()} - ${time_due()}</h3>
    <h3 class="priority_js">Priority : ${selectedPriority}</h3>
    <h3 class="cato_js">Catogery : ${prio_in ()}</h3>
  `;

  task_show.appendChild(task_list_add);

  inputTask.classList.remove('active');
  


}

addBtn.addEventListener ("click", () => {

  innexhtml ();

  task_description.value = "";
  task_title.value = "";
});
