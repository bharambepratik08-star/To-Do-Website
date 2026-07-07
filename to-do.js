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
