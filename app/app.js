var indexBody = `
<div class="index-body">
<div class="decorating-ideas">
<h1>Decorating Ideas</h1>
<p>"Home is Where The Heart Is." Expressing Creativity Since 1994.</p>
<span class="index-box">Our Blog</span>
</div>
<div class="copyright">
<p>Copyright PrettierRooms 1994</p>
</div>
</div>
`
var blogBody = `    <div class="blog-body">
<div class="blog-left">
  <div class="blog-i"></div>
  <div class="blog-ii"></div>
</div>
<div class="blog-right">
  <h1>Blog Entry #1:</h1>
  <p>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
    tortor aliquam nulla facilisi. Mattis nunc sed blandit libero.
    Consequat mauris nunc congue nisi vitae suscipit tellus. Risus sed
    vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc aliquet.
    Enim ut tellus elementum sagittis vitae et leo duis ut. Turpis egestas
    integer eget aliquet nibh. Id diam vel quam elementum. Facilisi etiam
    dignissim diam quis enim lobortis scelerisque fermentum. Orci nulla
    pellentesque dignissim enim sit amet venenatis urna cursus. Massa
    placerat duis ultricies lacus. Nullam ac tortor vitae purus."
  </p>
  <h1>Blog Entry #2:</h1>
  <p>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
    tortor aliquam nulla facilisi. Mattis nunc sed blandit libero.
    Consequat mauris nunc congue nisi vitae suscipit tellus. Risus sed
    vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc aliquet.
    Enim ut tellus elementum sagittis vitae et leo duis ut. Turpis egestas
    integer eget aliquet nibh. Id diam vel quam elementum. Facilisi etiam
    dignissim diam quis enim lobortis scelerisque fermentum. Orci nulla
    pellentesque dignissim enim sit amet venenatis urna cursus. Massa
    placerat duis ultricies lacus. Nullam ac tortor vitae purus."
  </p>
</div>
</div>
`
var aboutBody = `    <div class="about-body">
<div class="about-left"></div>
<div class="about-right">
  <h1>About Us</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
    facilisis gravida neque convallis a. Tincidunt vitae semper quis
    lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea
    dictumst quisque sagittis purus. At consectetur lorem donec massa
    sapien faucibus et molestie ac. Euismod in pellentesque massa placerat
    duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras
    adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a
    lacus vestibulum sed arcu non odio. Ut tortor pretium viverra
    suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit
    ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est
    pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
    Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.
    Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
  </p>
</div>
</div>
`
var contactBody = `    <div class="contact-body">
<div class="contact-left"></div>
<div class="contact-right">
  <div class="contact-part">Contact Us</div>
  <div class="contact-form">
    <p>Name:</p>
    <input type="Name:" />
    <p>Email:</p>
    <input type="Email:" />
    <p>Phone:</p>
    <input type="Phone:" />
    <a href="#">Submit</a>
  </div>
</div>
</div>
`

function changeRoute() {
let hashTag = window.location.hash;
 let pageID = hashTag.replace('#', '');
// console.log(hashTag + ' ' + pageID);

if (pageID != '') {
$.get(`pages/pageID/pageID.html`, function (data) {
 console.log('data ' + data);
 $('#app').html(data);
});
} else {
$.get(`pages/home/home.html`, function (data) {
console.log('data ' + data);
 $('#app').html(data);
});
}
}

function initURLListener() {
$(window).on('hashchange', changeRoute);
changeRoute();
}

$(document).ready(function () {
initURLListener();
});