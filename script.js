const app = Vue.createApp({
    data() {
      return {
        searchQuery: '',
        userLoggedIn: false,
        profilePic: "https://static.vecteezy.com/system/resources/thumbnails/007/522/853/small_2x/business-man-icon-for-your-web-profile-free-vector.jpg",
        userName: 'Oz',
        userRole: 'student',
        courseActive: false,
        userActive: false,
        contactActive: false,
      };
    },
    methods: {
      searchCourse() {
        // Handle the search functionality here
        console.log('Searching for: ' + this.searchQuery);
      },

      toggleCourse() {
        this.courseActive = !this.courseActive;
      },
      toggleUser() {
        this.userActive = !this.userActive;
      },
      toggleContact() {
        this.contactActive = !this.contactActive;
      },
    },
  });
  
  app.mount('#app');
  