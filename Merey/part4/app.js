const app = Vue.createApp({
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  computed: {
    isEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    isPasswordValid() {
      return this.password.length >= 6;
    },
    isFormValid() {
      return this.username && this.isEmailValid && this.isPasswordValid;
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        // Form submission logic goes here
        alert('Form submitted successfully!');
      } else {
        alert('Form contains errors. Please fix them before submitting.');
      }
    }
  }
});

app.mount('#app');