/*
 Hello Ravi                   
 Good Bye John
 Good Bye Jen
 Good Bye johari
 Hello Paul
 Hello Frank
 Hello Larry
 Hello Paula
 Hello Laura
 Good Bye Jim
 */

(function(window) {
    var names = ["Ravi", "John", "Jen", "Johari", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = ((names[i]).charAt(0)).toLowerCase();
        if (firstLetter === 'j') {
           window.byeSpeaker.speak(names[i]);
        } else {
            window.helloSpeaker.speak(names[i]);
        }
    }
})(window);