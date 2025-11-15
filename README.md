# TransiAI - African AI-Powered Mobility Platform

## Overview

TransiAI is a comprehensive, AI-powered transportation platform designed specifically for South Africa. It integrates buses, taxis, vans, and community shuttles into a single intelligent system with real-time tracking, digital queueing, and smart ticketing.

## 🎨 Design System

### Color Palette (African NeoTech)
- **Clay Orange**: #CC5A1A (Primary)
- **Warm Gold**: #DFAA3A (Accent)
- **Deep Brown**: #3A2F2A (Text/Dark)
- **Cool Teal**: #1BA39C (Tech Accent)
- **Deep Indigo**: #24315E (Secondary)

### Typography
- Primary Font: System UI fonts (Segoe UI, Roboto, etc.)
- Clean, modern sans-serif for accessibility

## 📱 Passenger Application (COMPLETED)

The passenger application is a fully functional mock application with the following features:

### Pages Implemented

1. **Landing Page** (`index.html`)
   - Hero section with call-to-action
   - Features showcase
   - About section
   - Footer with links

2. **Authentication**
   - Login (`passenger/login.html`)
   - Registration (`passenger/register.html`)
   - Demo credentials provided

3. **Dashboard** (`passenger/index.html`)
   - Welcome section with wallet balance
   - Quick action cards
   - Recent trips display
   - Popular routes

4. **Live Map** (`passenger/map.html`)
   - Interactive map mockup
   - Route search and selection
   - Real-time vehicle tracking
   - Vehicle information panel
   - Live tracking simulation

5. **Digital Queue** (`passenger/queue.html`)
   - Queue number display
   - Real-time wait time updates
   - Progress tracking
   - QR code generation for boarding
   - Queue simulation (auto-updates)

6. **Ticket** (`passenger/ticket.html`)
   - Digital boarding pass
   - QR code display
   - Trip details
   - Download and share options
   - Contact driver feature

7. **Trip History** (`passenger/history.html`)
   - Timeline view of all trips
   - Statistics dashboard
   - Filters (status, date, search)
   - Receipt viewing
   - Trip rating system
   - Export functionality

8. **Profile** (`passenger/profile.html`)
   - Account information management
   - Wallet management with top-up
   - Preferences settings
   - Notification settings
   - Security settings
   - Help & support

## 🚀 Getting Started

### Demo Credentials

**Passenger Account:**
- Email: `thabo@example.com`
- Password: `password123`

**Driver Account:**
- Email: `nomsa@example.com`
- Password: `password123`

**Admin Account:**
- Email: `admin@transiai.com`
- Password: `admin123`

### Running the Application

1. Open `index.html` in a web browser
2. Navigate to the passenger login page
3. Use the demo credentials above
4. Explore all features!

**OR**

Simply open any HTML file directly in your browser. The application works without a server.

## ✨ Key Features

### Mock Functionality
- **Authentication System**: Login/Register with local storage
- **Wallet System**: Add funds, track balance
- **Route Selection**: Browse and select routes
- **Digital Queueing**: Real-time queue simulation
- **Ticket Generation**: QR code tickets
- **Trip History**: Track all journeys
- **Live Tracking**: Simulated vehicle tracking
- **Notifications**: Toast notifications for actions

### Interactive Elements
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Modal dialogs for actions
- Form validation
- Loading states
- Hover effects

## 🎯 User Flows

### Book a Trip
1. Login → Dashboard
2. Click "Find Routes" or go to Live Map
3. Select a route
4. Click "Book This Route"
5. Get queue number
6. Wait for your turn (simulated)
7. Generate ticket with QR code

### Top Up Wallet
1. Dashboard → Click "Top Up" in wallet card
2. Enter amount
3. Select payment method
4. Confirm

### View History
1. Navigate to History page
2. Filter by status/date
3. View receipts
4. Rate completed trips
5. Rebook previous routes

## 📂 Project Structure

```
transiai/
├── index.html                 # Landing page
├── README.md                  # This file
├── assets/
│   ├── css/
│   │   ├── design-system.css  # Colors, typography, utilities
│   │   ├── components.css     # Reusable components
│   │   └── animations.css     # Animations and transitions
│   ├── js/
│   │   └── main.js           # Core functionality & mock data
│   └── images/               # (Empty - using emojis for icons)
├── passenger/
│   ├── login.html            # Passenger login
│   ├── register.html         # Passenger registration
│   ├── index.html            # Dashboard
│   ├── map.html              # Live map & tracking
│   ├── queue.html            # Digital queue
│   ├── ticket.html           # Boarding pass
│   ├── history.html          # Trip history
│   └── profile.html          # User profile
├── driver/                   # (To be implemented)
└── admin/                    # (To be implemented)
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Local Storage**: For user session management

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### Responsive Breakpoints
- Mobile: 390px
- Tablet: 1024px
- Desktop: 1440px

## 🎨 Design Principles

1. **African NeoTech Aesthetic**: Warm earth tones with modern tech accents
2. **Accessibility First**: High contrast, readable fonts, clear CTAs
3. **Mobile-First**: Responsive design for all devices
4. **User-Centric**: Intuitive navigation and clear feedback
5. **Performance**: Lightweight, fast loading

## 📊 Mock Data

The application includes realistic mock data:
- 3 user accounts (passenger, driver, admin)
- 4 routes with different vehicle types
- 3 active vehicles with live locations
- Sample trip history
- Queue system with 4 positions
- AI insights and predictions

## 🔜 Next Steps

### Driver Portal (Phase 2)
- Driver dashboard
- Route assignments
- Passenger pickup lists
- Earnings tracking
- Incident reporting

### Admin Dashboard (Phase 3)
- System overview
- Real-time fleet management
- Queue management
- Analytics & reports
- AI insights center
- Driver management

## 🤝 Contributing

This is a demonstration project showcasing the TransiAI concept. For production use, consider:
- Backend API integration
- Real database
- Actual payment processing
- Real-time WebSocket connections
- GPS integration
- Push notifications
- Security enhancements

## 📄 License

This is a demonstration project for TransiAI concept.

## 🌍 Built for South Africa

TransiAI is designed with South African communities in mind, addressing real transportation challenges with modern technology while respecting cultural identity and accessibility needs.

---

**Version**: 1.0.0  
**Status**: Passenger Application Complete ✅  
**Last Updated**: January 2025
