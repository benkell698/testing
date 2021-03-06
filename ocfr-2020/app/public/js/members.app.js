var waitingApp = new Vue({
  el: '#cardPaneLeft',
  data:{
    ptList: [],
    activePt: null,
      newPtForm: {
        fname: '',
        lname: '',
        address: '',
        mobilePhone: '',
        workPhone: '',
        email: '',
        dob: '',
        startDate: '',
        gender: '',
        position: '',
        radioNum: '',
        stationNum: '',
        active: '',
        certifications: ''
      }
  },
  methods:{
    fetchUser(){
      fetch('api/members/')
      .then(response => response.json())
      .then(json => {
        this.ptList=json;
        console.log(this.ptList);
      });
    },
    createUser( evt ){

      fetch('api/members/post.php', {
        method:'POST',
        body: JSON.stringify(this.newPtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.ptList.push(json[0]);
        this.newPtForm = this.newUserData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newPtForm);
    },
    newUserData() {
      return {
        fname: '',
        lname: '',
        address: '',
        mobilePhone: '',
        workPhone: '',
        email: '',
        dob: '',
        startDate: '',
        gender: '',
        position: '',
        radioNum: '',
        stationNum: '',
        active: '',
        certifications: ''
      }
    }
  },
  created(){
    this.fetchUser();
  }
});
