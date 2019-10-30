function Foo() {
  var self = this;
  const privateMethod = function() {
        console.log(self);
  }
  this.greet = function() {
        console.log('Hello!');
        privateMethod();
  }
}
const joe = new Foo();
joe.greet();