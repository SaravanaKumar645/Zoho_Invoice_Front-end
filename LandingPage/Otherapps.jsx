import React from "react";
import linkstyles from "./Otherapps.module.css";
const Otherapps = () => {
  return (
    <div className={linkstyles.otherappsDiv}>
      <div className={linkstyles.title}>
        <h3>Other Zoho Finance Apps</h3>
      </div>
      <div className={linkstyles.otherapps}>
        <div className={linkstyles.zohoBooks}>
          <img
            className={linkstyles.zohoBooksimg}
            src="/images/other-apps/zoho-books.png"
            width="45"
            height="45"
            alt="img"
          />
          <section>
            <h5>Zoho Books</h5>
            <p>Online Accounting Software</p>
          </section>
        </div>
        <div className={linkstyles.zohoSubscriptions}>
          <img
            src="/images/other-apps/zoho-subscriptions.png"
            width="40"
            height="40"
            alt="img"
          />
          <section>
            <h5>Zoho Subscriptions</h5>
            <p>Online Subscription Management</p>
          </section>
        </div>
        <div className={linkstyles.zohoInventory}>
          <img
            src="/images/other-apps/zoho-inventory.png"
            width="40"
            height="40"
            alt="img"
          />
          <section>
            <h5>Zoho Inventory</h5>
            <p>Inventory Management Software</p>
          </section>
        </div>
        <div className={linkstyles.zohoExpense}>
          <img
            src="/images/other-apps/zoho-expense.png"
            width="40"
            height="40"
            alt="img"
          />
          <section>
            <h5>Zoho Expense</h5>
            <p>Online Expense Reporting</p>
          </section>
        </div>
        <div className={linkstyles.zohoPayroll}>
          <img
            src="/images/other-apps/zoho-payroll.png"
            width="40"
            height="40"
            alt="img"
          />
          <section>
            <h5>Zoho Payroll</h5>
            <p>Online Payroll Software</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Otherapps;
