# Business Requirements Document (BRD)

## 1. **Executive Summary**

The purpose of this document is to outline the business requirements for developing a web-based ticketing system to streamline the management of complaints and inquiries. The new system will replace the current Google Sheets method, which is prone to errors, time-consuming, and difficult to manage.

*Note: the first version should be an internal application and serve the customer service employees complaints and inquiries, which means the clients can not submit any ticket.*
## 2. Business Objectives

- Enhance efficiency in managing complaints and inquiries.
- Minimize human errors caused by manual entry.
- Provide a centralized platform for tracking, categorizing, and resolving tickets.
- Improve reporting and analytics for better decision-making.
- Ensure scalability for future growth.

## 3. Scope

- **In Scope:**
  - Development of a web-based ticketing system.
  - User roles: Admin, Customer Service, and Department Representatives.
  - Features for ticket creation, categorization, and assignment tracking.
  - Dashboard for real-time monitoring and analytics.[depends on the cloud pricing]
  - Notification system for ticket status updates.
  - Integration with email for ticket creation and status updates.[Future]
  
- **Out of Scope:** [Future]
  - Integration with external CRMs or ERP systems.
  - AI-powered ticket resolution or chatbots.

## 4. Stakeholders

what the project needs to work.

- **Primary Users:**
  - Customer service representatives
  - Department representatives
- **Secondary Users:**
  - Managers overseeing operations
  - IT team (for maintenance)
- **Customers:** External clients submitting inquiries and complaints.[Future]

## 5. **Functional Requirements**
- **Ticket Management:**
  - Create, edit, and delete tickets.
  - Assign tickets to specific departments or users.
  - Track ticket status (Open, In Progress, Resolved, Closed).
  - Attach relevant files or images to tickets.
  
- **Categorization & Prioritization:**
  - Categorize tickets by type (Complaint, Inquiry, Suggestion).
  - Assign priority levels (Low, Medium, High).

- **User Roles & Permissions:**
  - Admin: Full access to manage the system.
  - Customer Service: Create and manage tickets, assign departments.
  - Department Representatives: Resolve tickets assigned to their department.

- **Notifications & Alerts:**
  - Email or in-app notifications for ticket updates.
  - Alerts for overdue tickets.

- **Reporting & Analytics:**
  - Generate reports on ticket trends, response times, and resolutions.
  - Dashboard view for key metrics.

- **Search & Filter:**
  - Search tickets by ID, category, status, or date.
  - Filter tickets by department, priority, or assigned user.

## 6. **Non-Functional Requirements**
- **Performance:** The system should handle up to 500 concurrent users without performance degradation.
- **Scalability:** Must be scalable to accommodate increasing users and tickets.
- **Security:** Implement role-based access control, data encryption, and secure authentication.
- **Usability:** Simple and intuitive UI to minimize the learning curve.
- **Availability:** System uptime of 99.9%.

## 7. **Risks & Assumptions**
- **Risks:**
  - Resistance to change from employees accustomed to Google Sheets.
  - Potential downtime during migration to the new system.
- **Assumptions:**
  - All employees will have access to necessary devices for using the application.
  - Internet connectivity will be available at all times.

## 8. **Timeline**
- Requirements Gathering: 2 weeks
- Design Phase: 3 weeks
- Development Phase: 6 weeks
- Testing & QA: 2 weeks
- Deployment & Training: 2 weeks
- Total: 15 weeks

## 9. **Budget Estimate**
- Development costs (frontend & backend)
- Hosting and server costs
- Initial training sessions
- Contingency fund (10% of the total budget)

## 10. **Success Metrics**
- Reduction in ticket resolution time by 30%.
- Decrease in errors and lost tickets by 90%.
- Employee satisfaction score > 85% after implementation.

Let me know if you'd like to adjust or expand any section!