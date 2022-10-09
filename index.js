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

// EVENT LISTENERS
dashboardButton.addEventListener('click', () => {
  sidebarReveal.classList.add('sidebar-active');
  logoSidebarReveal.classList.add('logo-sidebar-active');
  sidebarDashboardLogo.classList.add('sidebar-dashboard-logo-active');
  sidebarDashboardPReveal.classList.add('sidebar-dashboard-p-active');
  sidebarUlActive.classList.add('sidebar-ul-active');
  sidebarUlActive2.classList.add('sidebar-ul-active');
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
  svgReveal.forEach(svg => svg.classList.remove('sidebar-svg-active'));
  sidebarLiReveal.forEach(li => li.classList.remove('sidebar-li-active'));
});








