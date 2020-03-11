// export class HomeController{
//   constructor(){
//     this.welcomeMessage();
//
//   }
//   welcomeMessage(){
//     alert("This website is under construction, Please be paitent.")
//   }
// }
export class HomeController{
  constructor(){
    this.itemClassName = "carousel__photo";
    this.items = document.getElementsByClassName(this.itemClassName);
    this.totalItems = this.items.length;
    this.moving = false;
    this.slide = 0;
    this.items[this.totalItems - 1].classList.add("prev");
    this.items[0].classList.add("active");
    this.items[1].classList.add("next");
  }
  //carousel Next button
  nextSlide(){
    if(this.moving){
    }
      if (this.moving == false) {
        // If it's the last slide, reset to 0, else +1
        if (this.slide === (this.totalItems - 1)) {
          this.slide = 0;
        } else {
          this.slide++;
        }
        // Move carousel to updated slide
        this.moveCarouselTo();
      }
    }
  // Carousel Previous Button
  movePrev() {
      if (!this.moving) {
        // If it's the first slide, set as the last slide, else -1
        if (this.slide === 0) {
          this.slide = (this.totalItems - 1);
        } else {
          this.slide--;
        }

        // Move carousel to updated slide
        this.moveCarouselTo();
      }
    }

  moveCarouselTo() {
    // Check if carousel is moving, if not, allow interaction
        if(!this.moving) {
          this.disableInteraction();
          // Update the "old" adjacent slides with "new" ones
          var newPrevious = this.slide - 1,
              newNext = this.slide + 1,
              oldPrevious = this.slide - 2,
              oldNext = this.slide + 2;
          // Test if carousel has more than three items
          if ((this.totalItems - 1) > 3) {
            // Checks and updates if the new slides are out of bounds
            if (newPrevious <= 0) {
              oldPrevious = (this.totalItems - 1);
            } else if (newNext >= (this.totalItems - 1)){
              oldNext = 0;
            }
            // Checks and updates if slide is at the beginning/end
            if (this.slide === 0) {
              newPrevious = (this.totalItems - 1);
              oldPrevious = (this.totalItems - 2);
              oldNext = (this.slide + 1);
            } else if (this.slide === (this.totalItems -1)) {
              newPrevious = (this.slide - 1);
              newNext = 0;
              oldNext = 1;
            }
            this.items[oldPrevious].className = this.itemClassName;
            this.items[oldNext].className = this.itemClassName;
            // Add new classes
            this.items[newPrevious].className = this.itemClassName + " prev";
            this.items[this.slide].className = this.itemClassName + " active";
            this.items[newNext].className = this.itemClassName + " next";
          }
       }
    }
    disableInteraction() {
      this.moving = true;
      setTimeout(() => {
        return this.moving = false;
      }, 500);
    }
}

export class PortfolioController{
  constructor(){

  }
  reverseText(){
        var myString = document.getElementById('myString').value;
        var arr = myString.split('');
            arr.reverse();
        var newString = arr.join('');
            document.getElementById('newString').innerHTML = newString;
  }
  encrypt(){
    var originalText = document.getElementById('originalText').value.toLowerCase();
    var arrEncrypt = originalText.split('');
    var arrLowAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var cypher =     ["J", "O", "F", "E", "*", "#", ")", "K", "D", "A", "W", "G", "@", "&", "$", "B", "M", "P", "U", "=", "L", "N", "C", "V", "?", "%", ":", "!", "Q", "(", "/", "A", "+", "}", "^", "H"];
    var length = arrEncrypt.length * arrLowAlph.length
    for(let i=0;i< length;i++){
      var y = 0;
     for(let x = 0;x < arrLowAlph.length;x++ ){
       // console.log(arrEncrypt[i])
       // console.log(arrLowAlph[x])
       if(arrEncrypt[i] == arrLowAlph[x]){
         var num = arrLowAlph.indexOf(arrLowAlph[x]);
         arrEncrypt[i] = cypher[num];
         console.log(arrEncrypt);
       }
      var endString = arrEncrypt.join('');
       document.getElementById('encrypted-text').innerHTML = endString;

     }
    }
  }
  decrypt(){
    var encryptedText = document.getElementById('originalText').value;
    var arrDecrypt = encryptedText.split('');
    var arrLowAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var cypher =     ["J", "O", "F", "E", "*", "#", ")", "K", "D", "A", "W", "G", "@", "&", "$", "B", "M", "P", "U", "=", "L", "N", "C", "V", "?", "%", ":", "!", "Q", "(", "/", "A", "+", "}", "^", "H"];
    var length = arrDecrypt.length * arrLowAlph.length;
    for(let i=0;i< length;i++){
      var y = 0;
     for(let x = 0;x < cypher.length;x++ ){
       // console.log(arrEncrypt[i])
       // console.log(arrLowAlph[x])
       if(arrDecrypt[i] == cypher[x]){
         var num = cypher.indexOf(cypher[x]);
         arrDecrypt[i] = arrLowAlph[num];
         console.log(arrDecrypt);
       }
      var endString = arrDecrypt.join('');
       document.getElementById('encrypted-text').innerHTML = endString;

     }
    }
  }

}

export class ExperienceController{
  constructor(){

  }
}

export class ContactController{
  constructor(ContactService){
    this.ContactService = ContactService;

  }
  sendContactEmail(){
    let contact = JSON.stringify(this.contact);
    //console.log(contact);
    this.ContactService.sendEmail(contact)
  }
}


export class NotFoundController{
  constructor(){

  }
}
