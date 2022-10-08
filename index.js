// QUERIES
const dashboardButton= document.querySelector('.dashboard-logo');
const sidebarReveal = document.querySelector('.sidebar');
const sidebarDashboardLogo = document.querySelector('.sidebar-dashboard-logo');
const logoSidebarReveal = document.querySelector('.logo-sidebar');
const sidebarDashboardPReveal = document.querySelector('.sidebar-dashboard-p');

// EVENT LISTENERS
dashboardButton.addEventListener('click', () => {
  sidebarReveal.classList.add('sidebar-active');
  logoSidebarReveal.classList.add('logo-sidebar-active');
  sidebarDashboardLogo.classList.add('sidebar-dashboard-logo-active');
  sidebarDashboardPReveal.classList.add('sidebar-dashboard-p-active');
 });

sidebarDashboardLogo.addEventListener('click', () => { 
  sidebarReveal.classList.remove('sidebar-active');
  logoSidebarReveal.classList.remove('logo-sidebar-active');
  sidebarDashboardLogo.classList.remove('sidebar-dashboard-logo-active');
  sidebarDashboardPReveal.classList.remove('sidebar-dashboard-p-active');
});








