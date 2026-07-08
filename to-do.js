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
});

inputBack.addEventListener("click", (e) => {

    if (e.target === inputBack) {
        inputTask.classList.remove("active");
    }

});


addBtn.addEventListener ("click", () => {

  const task_list_add = document.createElement("div");
  task_list_add.classList.add("task_list");

  const task_title_val = task_title.value;
  const task_description_val = task_description.value;

  task_list_add.innerHTML = `
    <h2 class="task_tit_js">${task_title_val}</h2>
    <p class="task_des_js">${task_description_val}</p>
    <h3 class="form_due_js></h3>
  `;

  task_show.appendChild(task_list_add);

  inputTask.classList.remove('active');
  
  task_description.value = "";
  task_title.value = "";
});

const selects = document.querySelectorAll(".task_date");

selects.forEach(select => {

    select.addEventListener("change", function () {

        const dateInput = this.nextElementSibling;

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