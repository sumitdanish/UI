import Ember from 'ember';

export default Ember.Service.extend({
  access_token:null,
  isAuthorized:false,
  store:Ember.inject.service(),
  authenticate(username,password){
      return Ember.$.ajax({
        method:'post',
        url:'http://localhost:8081/api/token',
        data:{username:username,password:password}
      }).then((response) => {

      },(error) => {
        let errorDetails = JSON.parse(JSON.stringify(error)).responseJSON;
        let errorStatusCode = errorDetails.statusCode;
        let errorMessage = errorDetails.error.error_description;
        this.set('errorCode',errorStatusCode);
        this.set('error_description',errorMessage);

        this.set('isAuthorized',false);
        this.set('access_token','none');
        this.set('refresh_token','none');
        this.set('expires_in','none');
        this.set('scope','none');
        this.set('bearer','none');
      });
  }
});
