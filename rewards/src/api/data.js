

export default function() {
    // simulates data coming from a database.
    return Promise.resolve(
      [
          {
            custid: 1,
            name: "Acme",
            amt: 120,
            transactionDt: "05-01-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 75,
            transactionDt: "05-21-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 94,
            transactionDt: "05-21-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 10,
            transactionDt: "06-01-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 75,
            transactionDt: "06-21-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 200,
            transactionDt: "07-01-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 1,
            transactionDt: "07-04-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 80,
            transactionDt: "07-03-2020"
          },
          {
            custid: 1,
            name: "Acme",
            amt: 224,
            transactionDt: "07-21-2020"
          },
          {
            custid: 2,
            name: "Charter",
            amt: 125,
            transactionDt: "05-01-2020"
          },
          {
            custid: 2,
            name: "Charter",
            amt: 75,
            transactionDt: "05-21-2020"
          },
          {
            custid: 2,
            name: "Charter",
            amt: 10,
            transactionDt: "06-01-2020"
          },
          {
            custid: 2,
            name: "Charter",
            amt: 75,
            transactionDt: "06-21-2020"
          },
          {
            custid: 2,
            name: "Charter",
            amt: 200,
            transactionDt: "07-01-2020"
          },
          {
            custid: 2,
            name: "Charter",
            amt: 224,
            transactionDt: "07-21-2020"
          },
          {
            custid: 3,
            name: "Adidas",
            amt: 120,
            transactionDt: "06-21-2020"
          }
      ]
    );
  };