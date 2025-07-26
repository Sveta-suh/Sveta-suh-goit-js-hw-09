const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form data submitted:', formData);

  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
});

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}
