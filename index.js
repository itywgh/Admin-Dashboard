// QUERIES
const dashboardButton= document.querySelector('.dashboard-logo');
const sidebarReveal = document.querySelector('.sidebar');
const sidebarDashboardLogo = document.querySelector('.sidebar-dashboard-logo');
const logoSidebarReveal = document.querySelector('.logo-sidebar');
const sidebarDashboardPReveal = document.querySelector('.sidebar-dashboard-p');
const sidebarUlActive = document.querySelector('.list-1-sidebar');
const sidebarUlActive2 = document.querySelector('.list-2-sidebar');
const svgReveal = document.querySelectorAll('svg');
const sidebarLiReveal = document.querySelectorAll('li');
const body1500 = document.body;
// const sidebarActive1500 = document.window;

// EVENT LISTENERS

window.addEventListener("resize", () => {
  if (body1500.clientWidth >= 1500) {
    sidebarReveal.classList.remove('sidebar-active');
    sidebarReveal.classList.remove('sidebar-active');
    logoSidebarReveal.classList.remove('logo-sidebar-active');
    sidebarDashboardLogo.classList.remove('sidebar-dashboard-logo-active');
    sidebarDashboardPReveal.classList.remove('sidebar-dashboard-p-active');
    sidebarUlActive.classList.remove('sidebar-ul-active');
    sidebarUlActive2.classList.remove('sidebar-ul-active');
    sidebarUlActive2.classList.remove('list-2-sidebar-active');
    svgReveal.forEach(svg => svg.classList.remove('sidebar-svg-active'));
    sidebarLiReveal.forEach(li => li.classList.remove('sidebar-li-active'));
  }
});

dashboardButton.addEventListener('click', () => {
  if (body1500.clientWidth >= 1500) {
    return;
  }

  // sidebarReveal.classList.add('sidebar-active');
  sidebarReveal.classList.toggle('sidebar-active');
  logoSidebarReveal.classList.add('logo-sidebar-active');
  sidebarDashboardLogo.classList.add('sidebar-dashboard-logo-active');
  sidebarDashboardPReveal.classList.add('sidebar-dashboard-p-active');
  sidebarUlActive.classList.add('sidebar-ul-active');
  sidebarUlActive2.classList.add('sidebar-ul-active');
  sidebarUlActive2.classList.add('list-2-sidebar-active');
  svgReveal.forEach(svg => svg.classList.add('sidebar-svg-active'));
  sidebarLiReveal.forEach(li => li.classList.add('sidebar-li-active'));
 });

sidebarDashboardLogo.addEventListener('click', () => { 
  sidebarReveal.classList.remove('sidebar-active');
  logoSidebarReveal.classList.remove('logo-sidebar-active');
  sidebarDashboardLogo.classList.remove('sidebar-dashboard-logo-active');
  sidebarDashboardPReveal.classList.remove('sidebar-dashboard-p-active');
  sidebarUlActive.classList.remove('sidebar-ul-active');
  sidebarUlActive2.classList.remove('sidebar-ul-active');
  sidebarUlActive2.classList.remove('list-2-sidebar-active');
  svgReveal.forEach(svg => svg.classList.remove('sidebar-svg-active'));
  sidebarLiReveal.forEach(li => li.classList.remove('sidebar-li-active'));
});




