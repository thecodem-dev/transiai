/* ============================================
   TransiAI Main JavaScript
   Core functionality and utilities
   ============================================ */

// ============================================
// Mock Data Store
// ============================================
const TransiAI = {
  // Current user session
  currentUser: null,
  
  // Mock users database
  users: [
    {
      id: 1,
      name: 'Thabo Mbeki',
      email: 'thabo@example.com',
      password: 'password123',
      phone: '+27 82 123 4567',
      role: 'passenger',
      avatar: 'TM',
      wallet: 250.00
    },
    {
      id: 2,
      name: 'Nomsa Dlamini',
      email: 'nomsa@example.com',
      password: 'password123',
      phone: '+27 83 234 5678',
      role: 'driver',
      avatar: 'ND',
      earnings: 1250.00,
      vehicle: 'Toyota Quantum - CA 123 456'
    },
    {
      id: 3,
      name: 'Admin User',
      email: 'admin@transiai.com',
      password: 'admin123',
      phone: '+27 84 345 6789',
      role: 'admin',
      avatar: 'AU'
    }
  ],
  
  // Mock routes
  routes: [
    {
      id: 1,
      name: 'Johannesburg CBD to Soweto',
      from: 'Johannesburg CBD',
      to: 'Soweto',
      distance: '15 km',
      duration: '25 min',
      price: 25.00,
      type: 'bus',
      available: true
    },
    {
      id: 2,
      name: 'Sandton to Pretoria',
      from: 'Sandton',
      to: 'Pretoria',
      distance: '50 km',
      duration: '45 min',
      price: 65.00,
      type: 'taxi',
      available: true
    },
    {
      id: 3,
      name: 'Cape Town to Stellenbosch',
      from: 'Cape Town',
      to: 'Stellenbosch',
      distance: '45 km',
      duration: '40 min',
      price: 55.00,
      type: 'van',
      available: true
    },
    {
      id: 4,
      name: 'Durban to Umhlanga',
      from: 'Durban',
      to: 'Umhlanga',
      distance: '18 km',
      duration: '20 min',
      price: 30.00,
      type: 'shuttle',
      available: true
    }
  ],
  
  // Mock vehicles
  vehicles: [
    {
      id: 1,
      registration: 'CA 123 456',
      type: 'bus',
      capacity: 35,
      currentPassengers: 28,
      driver: 'Nomsa Dlamini',
      status: 'active',
      location: { lat: -26.2041, lng: 28.0473 },
      route: 'Johannesburg CBD to Soweto'
    },
    {
      id: 2,
      registration: 'CA 234 567',
      type: 'taxi',
      capacity: 15,
      currentPassengers: 12,
      driver: 'Sipho Khumalo',
      status: 'active',
      location: { lat: -26.1076, lng: 28.0567 },
      route: 'Sandton to Pretoria'
    },
    {
      id: 3,
      registration: 'CA 345 678',
      type: 'van',
      capacity: 12,
      currentPassengers: 8,
      driver: 'Zanele Ndlovu',
      status: 'active',
      location: { lat: -33.9249, lng: 18.4241 },
      route: 'Cape Town to Stellenbosch'
    }
  ],
  
  // Mock trips
  trips: [
    {
      id: 1001,
      userId: 1,
      route: 'Johannesburg CBD to Soweto',
      date: '2025-01-15',
      time: '08:30',
      price: 25.00,
      status: 'completed',
      queueNumber: 'A-045'
    },
    {
      id: 1002,
      userId: 1,
      route: 'Sandton to Pretoria',
      date: '2025-01-14',
      time: '17:45',
      price: 65.00,
      status: 'completed',
      queueNumber: 'B-023'
    },
    {
      id: 1003,
      userId: 1,
      route: 'Johannesburg CBD to Soweto',
      date: '2025-01-13',
      time: '07:15',
      price: 25.00,
      status: 'completed',
      queueNumber: 'A-012'
    }
  ],
  
  // Mock queue
  queue: [
    { number: 'A-045', passengers: 4, status: 'boarding', eta: '2 min' },
    { number: 'A-046', passengers: 3, status: 'waiting', eta: '8 min' },
    { number: 'A-047', passengers: 2, status: 'waiting', eta: '15 min' },
    { number: 'A-048', passengers: 1, status: 'waiting', eta: '22 min' }
  ],
  
  // Mock AI insights
  aiInsights: {
    demandPrediction: {
      high: ['Johannesburg CBD', 'Sandton', 'Pretoria'],
      medium: ['Soweto', 'Midrand'],
      low: ['Centurion', 'Randburg']
    },
    routeOptimization: [
      { route: 'JHB to Soweto', suggestion: 'Add 2 more vehicles', impact: '+15% efficiency' },
      { route: 'Sandton to PTA', suggestion: 'Extend service hours', impact: '+20% revenue' }
    ],
    incidents: [
      { type: 'Traffic', location: 'N1 Highway', severity: 'medium', eta: '15 min delay' },
      { type: 'Weather', location: 'Cape Town', severity: 'low', eta: '5 min delay' }
    ]
  }
};

// ============================================
// Authentication Functions
// ============================================
function login(email, password) {
  const user = TransiAI.users.find(u => u.email === email && u.password === password);
  if (user) {
    TransiAI.currentUser = user;
    localStorage.setItem('transiai_user', JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false, message: 'Invalid credentials' };
}

function logout() {
  TransiAI.currentUser = null;
  localStorage.removeItem('transiai_user');
  window.location.href = '/transiai/index.html';
}

function register(userData) {
  const existingUser = TransiAI.users.find(u => u.email === userData.email);
  if (existingUser) {
    return { success: false, message: 'Email already registered' };
  }
  
  const newUser = {
    id: TransiAI.users.length + 1,
    ...userData,
    avatar: userData.name.split(' ').map(n => n[0]).join('').toUpperCase(),
    wallet: 0
  };
  
  TransiAI.users.push(newUser);
  TransiAI.currentUser = newUser;
  localStorage.setItem('transiai_user', JSON.stringify(newUser));
  return { success: true, user: newUser };
}

function getCurrentUser() {
  if (!TransiAI.currentUser) {
    const stored = localStorage.getItem('transiai_user');
    if (stored) {
      TransiAI.currentUser = JSON.parse(stored);
    }
  }
  return TransiAI.currentUser;
}

function requireAuth(allowedRoles = []) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = '/transiai/index.html';
    return false;
  }
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    alert('Access denied');
    window.location.href = '/transiai/index.html';
    return false;
  }
  return true;
}

// ============================================
// Utility Functions
// ============================================
function formatCurrency(amount) {
  return `R ${amount.toFixed(2)}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-ZA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function formatTime(timeString) {
  return timeString;
}

function generateQRCode(data) {
  // Mock QR code generation - returns a data URL
  return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="white"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="12" fill="black">${data}</text></svg>`;
}

function generateQueueNumber() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = letters[Math.floor(Math.random() * letters.length)];
  const number = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
  return `${letter}-${number}`;
}

function calculateETA(distance) {
  // Simple ETA calculation (distance in km, average speed 40 km/h)
  const hours = distance / 40;
  const minutes = Math.round(hours * 60);
  return `${minutes} min`;
}

// ============================================
// UI Helper Functions
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} notification-enter`;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '1000';
  notification.style.minWidth = '300px';
  notification.innerHTML = `
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function showModal(title, content, actions = []) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
      <div class="modal-footer">
        ${actions.map(action => `
          <button class="btn ${action.class}" onclick="${action.onclick}">
            ${action.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  document.body.appendChild(backdrop);
  setTimeout(() => backdrop.classList.add('active'), 10);
  
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
}

function closeModal() {
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    setTimeout(() => backdrop.remove(), 300);
  }
}

function toggleMobileMenu() {
  const menu = document.querySelector('.navbar-menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

// ============================================
// Loading State
// ============================================
function showLoading(element) {
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.style.margin = '20px auto';
  element.innerHTML = '';
  element.appendChild(spinner);
}

function hideLoading(element, content) {
  element.innerHTML = content;
}

// ============================================
// Form Validation
// ============================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\+?[0-9\s-]{10,}$/;
  return re.test(phone);
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = 'var(--error)';
    } else {
      input.style.borderColor = 'var(--light-gray)';
    }
  });
  
  return isValid;
}

// ============================================
// Initialize on page load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Add page transition animation
  document.body.classList.add('page-transition');
  
  // Check authentication for protected pages
  const protectedPages = ['dashboard', 'map', 'queue', 'ticket', 'history', 'profile'];
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  
  if (protectedPages.includes(currentPage)) {
    requireAuth(['passenger']);
  }
  
  // Update user info in navbar if logged in
  const user = getCurrentUser();
  if (user) {
    const userInfo = document.getElementById('user-info');
    if (userInfo) {
      userInfo.innerHTML = `
        <div class="flex items-center gap-md">
          <div class="avatar">${user.avatar}</div>
          <span class="font-semibold">${user.name}</span>
        </div>
      `;
    }
  }
});

// ============================================
// Export functions for global use
// ============================================
window.TransiAI = TransiAI;
window.login = login;
window.logout = logout;
window.register = register;
window.getCurrentUser = getCurrentUser;
window.requireAuth = requireAuth;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
window.formatTime = formatTime;
window.generateQRCode = generateQRCode;
window.generateQueueNumber = generateQueueNumber;
window.calculateETA = calculateETA;
window.showNotification = showNotification;
window.showModal = showModal;
window.closeModal = closeModal;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleSidebar = toggleSidebar;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;
window.validateForm = validateForm;
