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
const task_show = document.querySelector('.task');
const task_title = document.querySelector('#task_input');
const task_description = document.querySelector('#task_description');


asideAddTaskBtn.addEventListener('click', function() {
  inputTask.classList.add('active');
});

cancelBtn.addEventListener('click', function() {
  inputTask.classList.remove('active');
  resetForm ();
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

function button_color () {
  const Btncolor = document.querySelector('prio_under');

  let btn_color;

  if ( selectedPriority == 'low') {

    btn_color = 'prio_under_green'

  } else if ( selectedPriority == 'high') {

    btn_color = 'prio_under_red'

  } else if ( selectedPriority == 'medium' ) {

    btn_color = 'prio_under_yellow'

  }

  return btn_color;
}

function innexhtml () {

  const task_list_add = document.createElement("div");
  task_list_add.classList.add("task_list");

  const task_title_val = task_title.value;
  const task_description_val = task_description.value;

  task_list_add.innerHTML = `
    <button class="prio_under ${button_color()}"></button>
    <h2 class="task_tit_js">${task_title_val}</h2>
    <p class="task_des_js">${task_description_val}</p>
    <h3 class="form_due_js"> From: ${date_making_from ()} - ${time_from()} To: ${date_making_to()} - ${time_due()}</h3>
    <h3 class="priority_js">Priority : ${selectedPriority}</h3>
    <h3 class="cato_js">Catogery : ${prio_in ()}</h3>
  `;

  task_show.appendChild(task_list_add);

  inputTask.classList.remove('active');
  
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

addBtn.addEventListener ("click", () => {

  innexhtml ();
  resetForm ()
});

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