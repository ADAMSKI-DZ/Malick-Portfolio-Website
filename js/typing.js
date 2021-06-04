$(function () {
  $(".typewriter").typed({
    strings: [
      "Hello!🖐",
      ' My name is <a  class="me-type" href="https://www.facebook.com/abdelmalek.tammal/" style="color: #EE5A24">Malick</a>.👦🏽',
      "I am a web developer🚀",
      "And web designer✒️",
      "enjoy!😘",
    ],

    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    backSpeed: 40,
    // time before backspacing
    backDelay: 1500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});
