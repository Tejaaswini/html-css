// (function($) { 
//     $(function() { 
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.nav-dropdown').toggle();
//         $('.dropdown').not($(this).siblings()).hide();
//         e.stopPropagation();
//       });
//       $('html').click(function() {
//         $('.nav-dropdown').hide();
//       });
//       $('#nav-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
//       $('#nav-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
//     }); 
//   })(jQuery);


var searchbar = document.getElementById("search-bar");
var menu = document.getElementById("arrowsphere-dropdown");
var icon = document.getElementsByClassName("search-btn")[0];
icon.onclick = function () {
  searchbar.classList.toggle("active");
  // menu.style.display = "none";
  menu.classList.toggle("hide");
};


const BusinessData = [
    {
      name: "Businesses",
      bussiness: [
        "Electronic Components",
        "Enterprise Computing solutions",
        "Arrow Services",
      ],
    },
  ];
  function BusinessTemplate(b) {
    return `
    <div class="drop-content" id="myDropdown1">
        <a href="#" class="list-items"> ${b.bussiness[0]}</a>
        <a href="#" class="list-items"> ${b.bussiness[1]}</a>
        <a href="#" class="list-items"> ${b.bussiness[2]}</a>
    </div>
    `;
  }
  const SocialData = [
    {
      name: "Social Media",
      social: ["Instagram", "Facebook", "Twitter"],
    },
  ];
  function SocialTemplate(s) {
    return `
    <div class="drop-content" id="myDropdown1">
        <a href="#" class="list-items">${s.social[0]}</a>
        <a href="#" class="list-items">${s.social[1]}</a>
        <a href="#" class="list-items">${s.social[2]}</a>
    </div>
    `;
  }

  const ArrowData = [
    {
      name: "Arrow",
      arrow: ["Sign In", "Login In"],
    },
  ];
  function ArrowTemplate(a) {
    return `
    <div class="drop-content" id="myDropdown1">
        <a href="#" class="list-items">${a.arrow[0]}</a>
        <a href="#" class="list-items">${a.arrow[1]}</a>
     </div>
    `;
  }

  const RegionData = [
    {
      name: "Region",
      subname:"Select Region",
      first: ["North America", "Israel","Austria","Crech Republic","Finland","Italy","Netherlands","Portugal","Switzerland (EN)"],
      second: ["Brazil","Australia","Baltics","Denmark","France","Ireland","Norway","Spain","Switzerland (DE)"],
      third: ["Morocco","New Zealand","Belgium","Deutschland","Hungary","Luxembourg","Poland","Sweden","United Kingdom"],
    },
  ];
 
  function region(region){
    return ` 
    <ul>
  ${region.map(function(r){
    return `
    <li>${r}</li>`
    }).join("")}
    </ul>
    `
  }
   
  function RegionTemplate(r) {
    return `
    <div class="region-content" id="myDropdown2">
    <h3>${r.subname}</h3>
    <div class="line"></div>
    <div class="content">
      <div class="first">
      ${region(r.first)}
      </div>
      <div class="second">
      ${region(r.second)}
      </div>
      <div class="third">
      ${region(r.third)}
      </div>
    </div>
  </div>
    `;
  }

  document.getElementById("app").innerHTML = `${BusinessData.map(
    BusinessTemplate
  ).join("")}`;
  document.getElementById("arrow-down").innerHTML = `${SocialData.map(
    SocialTemplate
  ).join("")}`;
  document.getElementById("dropdown-json").innerHTML = `${ArrowData.map(
    ArrowTemplate
  ).join("")}`;

  document.getElementById("arrow-dropdown").innerHTML = `${RegionData.map(
    RegionTemplate
  ).join("")}`;