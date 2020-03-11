export class ContactService {
  constructor($http){
    this.$http = $http;
  }
  sendEmail(contact){
    console.log(contact);
    this.$http.post('/api/contact', contact, {headers: {'Content-Type': 'application/json'}});

}
}
