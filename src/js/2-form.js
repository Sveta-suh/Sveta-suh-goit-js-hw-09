const STORAGE_KEY = 'feedback-form-state';

// 1. Объект formData с пустыми полями
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

// 3. При загрузке страницы заполняем форму, если есть данные
populateForm();

// 2. Слушаем input и обновляем formData + localStorage
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. При submit проверяем поля и очищаем
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form data submitted:', formData);

  // Очистка
  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
});

// Функция заполнения формы из localStorage
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}
